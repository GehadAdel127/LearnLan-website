import { useTheme } from '@emotion/react'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'
import loginImage from "../assets/images/Globalization.jpeg"
import AnimatedSection from './AnimatedSection'

const Form = ({ flexDirection, title1, title2, description, forget, sign, unsign, unsignTitle, linkPath, remember }) => {
    const theme = useTheme()
    return (
        <section style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", flexDirection: flexDirection, marginTop: "150px", gap: "10%" }}>
            <div className="imageSection" style={{ width: "40%" }}>
                <AnimatedSection animationClass="fadeInDown" delay='0.3s'>
                    <img src={loginImage} alt="login image" style={{ width: "100%" }} />
                </AnimatedSection>
            </div>

            <div className="contentSection" style={{ width: "40%" }}>
                <div className="content">
                    <AnimatedSection animationClass="fadeInDown" delay='0.1s'>
                        <h2 style={{ margin: "5px" }}> {title1}</h2>
                    </AnimatedSection>
                    <AnimatedSection animationClass="fadeInDown" delay='0.3s'>
                        <h2 style={{ margin: "5px" }}>{title2}</h2>
                    </AnimatedSection>
                    <AnimatedSection animationClass="fadeInDown" delay='0.5s' >
                        <p>{description}</p>
                    </AnimatedSection>
                    <form style={{ width: "100%" }}>
                        <div className="inputs" style={{ display: "flex", flexDirection: "column", width: "70%", gap: "20px" }}>
                            {remember && <AnimatedSection animationClass="fadeInDown" delay='0.7s' >
                                <TextField
                                    required
                                    id="outlined-required"
                                    variant="outlined"
                                    label="Email"
                                />
                            </AnimatedSection>}
                            {!remember && <AnimatedSection animationClass="fadeInDown" delay='0.9s' >
                                <TextField
                                    id="outlined-password-input"
                                    label="New Password"
                                    variant="outlined"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </AnimatedSection>}
                            <AnimatedSection animationClass="fadeInDown" delay='0.9s' >
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    autoComplete="current-password"
                                />
                            </AnimatedSection>
                        </div>
                        <AnimatedSection animationClass="fadeInDown" delay='1.1s' >
                            {remember && <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px", width: "70%" }}>
                                <div className="rememberCheck">
                                    <Checkbox sx={{ color: theme.palette.primary.main, padding: "0", paddingRight: "10px" }} />
                                    Remember me
                                </div>
                                {forget && <Link to="/forgetpassword">Forget password?</Link>}
                            </div>}
                        </AnimatedSection>
                        <AnimatedSection animationClass="fadeInDown" delay='1.3s' >
                            <Button variant="contained" sx={{ marginTop: "50px" }}>{sign}</Button>
                        </AnimatedSection>
                        <AnimatedSection animationClass="fadeInDown" delay='1.4s' >
                            <p style={{ marginTop: "50px" }}>{unsignTitle} <Link to={linkPath} style={{ fontWeight: "bold" }} >{unsign}</Link></p>
                        </AnimatedSection>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Form