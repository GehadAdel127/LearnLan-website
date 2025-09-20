import { useTheme } from '@emotion/react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginImage from "../assets/images/Globalization.jpeg"
import { useAuth } from '../Context/AuthContext'
import { loginService, registerService } from '../Services/AuthServices'
import AnimatedSection from './AnimatedSection'

const Form = ({ flexDirection, title1, title2, description, forget, sign, unsign, unsignTitle, linkPath, remember, nameInput, isSmall }) => {
    const theme = useTheme()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profileImage, setProfileImage] = useState(null)
    const [errorMessage, setErrorMessage] = useState("")
    const { login } = useAuth()
    const [role, setRole] = useState("student");
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let user
            if (sign === "Sign in") {
                user = await loginService(email, password, role)
            } else if (sign === "Sign Up") {
                user = await registerService(name, email, password, profileImage, role)
            } else {
                console.log("Other forms like forget password");
            }
            login(user)
            navigate("/profile")
        }
        catch (error) {
            setErrorMessage(error.message)
        }
    }

    return (
        <section style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", flexDirection: flexDirection, marginTop: "50px", gap: "10%" }}>
            <AnimatedSection animationClass="fadeInDown" delay='0.1s' width={isSmall ? "80%" : "40%"} >
                <img src={loginImage} alt="login image" style={{ width: "100%" }} />
            </AnimatedSection>

            <div className="contentSection" style={{ width: isSmall ? "80%" : "40%", }}>
                <div className="content" style={{ textAlign: isSmall ? "center" : "" }}>
                    <AnimatedSection animationClass="fadeInDown" delay='0.1s'>
                        <h2 style={{ margin: "5px" }}> {title1}</h2>
                    </AnimatedSection>
                    <AnimatedSection animationClass="fadeInDown" delay='0.2s'>
                        <h2 style={{ margin: "5px" }}>{title2}</h2>
                    </AnimatedSection>
                    <AnimatedSection animationClass="fadeInDown" delay='0.3s' >
                        <p>{description}</p>
                    </AnimatedSection>
                    <form style={{ width: "100%", display: isSmall ? "flex" : "", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
                        <div className="inputs" style={{ display: "flex", flexDirection: "column", width: "100%", gap: "20px" }}>
                            {nameInput && <AnimatedSection animationClass="fadeInDown" delay='0.4s' >
                                <TextField
                                    required
                                    id="name-input"
                                    variant="outlined"
                                    label="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </AnimatedSection>}
                            {remember && <AnimatedSection animationClass="fadeInDown" delay='0.5s' >
                                <TextField
                                    required
                                    id="email-input"
                                    variant="outlined"
                                    label="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </AnimatedSection>}
                            {!remember && <AnimatedSection animationClass="fadeInDown" delay='0.6s' >
                                <TextField
                                    id="outlined-new-password-input"
                                    label="New Password"
                                    variant="outlined"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </AnimatedSection>}
                            <AnimatedSection animationClass="fadeInDown" delay='0.7s' >
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </AnimatedSection>
                            {sign === "Sign Up" && (
                                <AnimatedSection animationClass="fadeInDown" delay="0.8s">
                                    <TextField
                                        type="file"
                                        inputProps={{ accept: "image/*" }}
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                setProfileImage(reader.result);
                                            };
                                            if (file) reader.readAsDataURL(file);
                                        }}
                                    />
                                </AnimatedSection>
                            )}
                            <AnimatedSection animationClass="fadeInDown" delay="0.9s">
                                <FormControl fullWidth>
                                    <InputLabel id="role-label">Role</InputLabel>
                                    <Select
                                        labelId="role-label"
                                        value={role}
                                        label="Role"
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <MenuItem value="student">Student</MenuItem>
                                        <MenuItem value="teacher">Teacher</MenuItem>
                                        <MenuItem value="admin">Admin</MenuItem>
                                    </Select>
                                </FormControl>
                            </AnimatedSection>

                        </div>
                        <AnimatedSection animationClass="fadeInDown" delay='1s' >
                            {remember && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px", width: "100%", gap: "10px" }}>
                                <div className="rememberCheck">
                                    <Checkbox sx={{ color: theme.palette.primary.main, padding: "0", paddingRight: "10px" }} />
                                    Remember me
                                </div>
                                {forget && <Link to="/forgetpassword">Forget password?</Link>}
                            </div>}
                        </AnimatedSection>
                        {errorMessage &&
                            <AnimatedSection animationClass="fadeInDown" delay='0.1s'>
                                <Alert severity="error" style={{ marginTop: "20px" }}>{errorMessage}</Alert>
                            </AnimatedSection>
                        }
                        <AnimatedSection animationClass="fadeInDown" delay='1.1s' >
                            <Button variant="contained" sx={{ marginTop: "20px" }} onClick={handleSubmit}>{sign}</Button>
                        </AnimatedSection>
                        <AnimatedSection animationClass="fadeInDown" delay='1.4s' >
                            <p style={{ marginTop: "20px" }}>{unsignTitle} <Link to={linkPath} style={{ fontWeight: "bold" }} >{unsign}</Link></p>
                        </AnimatedSection>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form
