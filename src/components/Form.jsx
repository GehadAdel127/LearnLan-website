import { useTheme } from '@emotion/react'
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import {
    Alert,
    Button,
    Checkbox,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    useMediaQuery
} from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginImage from "../assets/images/Globalization.jpeg"
import { useAuth } from '../Context/AuthContext'
import { loginService, registerService } from '../Services/AuthServices'
import AnimatedSection from './AnimatedSection'

const Form = ({
    title1,
    title2,
    description,
    forget,
    sign,
    unsign,
    unsignTitle,
    linkPath,
    remember,
    nameInput
}) => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"))

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profileImage, setProfileImage] = useState(null)
    const [errorMessage, setErrorMessage] = useState("")
    const { login } = useAuth()
    const [role, setRole] = useState("student")
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let user
            if (sign === "Sign in") {
                user = await loginService(email, password, role)
            } else if (sign === "Sign Up") {
                user = await registerService(name, email, password, profileImage, role)
            }
            login(user)
            navigate("/profile")
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    return (
        <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 5, px: 2 }}
        >
            {/* Image Section */}
            <Grid
                item
                xs={12}
                md={6}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <AnimatedSection animationClass="fadeInDown" delay="0.1s">
                    <img
                        src={loginImage}
                        alt="login"
                        style={{
                            width: "100%",
                            maxWidth: "500px",
                            maxHeight: "400px",   // ✅ restricts size
                            objectFit: "cover",
                            borderRadius: "12px",
                        }}
                    />
                </AnimatedSection>
            </Grid>

            {/* Form Section */}
            <Grid item xs={12} md={6}>
                <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
                    <AnimatedSection animationClass="fadeInDown" delay="0.1s">
                        <h2>{title1}</h2>
                    </AnimatedSection>
                    <AnimatedSection animationClass="fadeInDown" delay="0.2s">
                        <h2>{title2}</h2>
                    </AnimatedSection>
                    <AnimatedSection animationClass="fadeInDown" delay="0.3s">
                        <p>{description}</p>
                    </AnimatedSection>

                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            marginTop: "20px",
                        }}
                    >
                        {nameInput && (
                            <TextField
                                required
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        )}

                        <TextField
                            required
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        {sign === "Sign Up" && (
                            <TextField
                                type="file"
                                inputProps={{ accept: "image/*" }}
                                onChange={(e) => {
                                    const file = e.target.files[0]
                                    const reader = new FileReader()
                                    reader.onloadend = () => setProfileImage(reader.result)
                                    if (file) reader.readAsDataURL(file)
                                }}
                            />
                        )}

                        <FormControl fullWidth>
                            <InputLabel id="role-label">Role</InputLabel>
                            <Select
                                labelId="role-label"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <MenuItem value="student">Student</MenuItem>
                                <MenuItem value="teacher">Teacher</MenuItem>
                                <MenuItem value="admin">Admin</MenuItem>
                            </Select>
                        </FormControl>

                        {remember && (
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <Checkbox />
                                    Remember me
                                </div>
                                {forget && <Link to="/forgetpassword">Forget password?</Link>}
                            </div>
                        )}

                        {errorMessage && (
                            <Alert severity="error">{errorMessage}</Alert>
                        )}

                        <Button type="submit" variant="contained">
                            {sign}
                        </Button>

                        <p>
                            {unsignTitle}{" "}
                            <Link to={linkPath} style={{ fontWeight: "bold" }}>
                                {unsign}
                            </Link>
                        </p>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

export default Form
