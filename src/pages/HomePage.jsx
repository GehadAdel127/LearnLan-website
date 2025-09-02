import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

// MUI
import Button from '@mui/material/Button';
// images
import heroImage from "../assets/images/heroImag.jpeg";
import CoursesCards from "../components/CoursesCards";
import Instructors from "../components/Instructors";
import PriceComponent from "../components/PriceComponent";
import Start from "../components/Start";
import Testimonial from "../components/Testimonial";


// custom hook
import AnimatedSection from '../components/AnimatedSection';


const HomePage = () => {
    const theme = useTheme()
    return (
        <section>
            <div className="home" style={{ marginTop: "150px", padding: "60px", width: "100%", display: "flex" }}>
                <AnimatedSection style={{ width: "45%" }} animationClass="fadeInLeft">
                    <h2 style={{ fontSize: "32px", fontWeight: "800", padding: "0px", margin: "0px" }}>Unlock Your World with New <span style={{ color: theme.palette.primary.main }}>Languages</span></h2>
                    <p className="animate__animated animate__slideInUp" style={{ fontSize: "20px" }}>Discover engaging courses designed by native speakers. Start your journey to fluency today, whether for travel, career, or personal growth.</p>
                    <div className="homeButtons animate__animated animate__fadeInLeftBig" style={{ display: "flex", gap: "10px", marginTop: "70px" }}>
                        <Link to="/login"><Button className="btn" variant="contained" style={{ color: "white", textTransform: "capitalize" }}>Get Started</Button></Link>
                        <Link><Button variant="outlined" className="learnMore">Learn More</Button></Link>
                    </div>
                </AnimatedSection>
                <AnimatedSection style={{ width: "45%", display: "flex", justifyContent: "center", alignContent: "center" }} animationClass="fadeInRight">
                    <img src={heroImage} alt="hero image" style={{ width: "80%" }} loading="lazy" />
                </AnimatedSection>

            </div>
            <CoursesCards />
            <Start />
            <Instructors />
            <PriceComponent />
            <Testimonial />
        </section>
    )
}

export default HomePage