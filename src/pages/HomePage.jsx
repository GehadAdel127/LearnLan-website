import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

// MUI
import Button from '@mui/material/Button';
// images
import Instructors from "../components/Instructors";
import PopularCourses from "../components/popularCourses";
import PriceComponent from "../components/PriceComponent";
import Start from "../components/Start";
import Testimonial from "../components/Testimonial";

// custom hook
import AnimatedSection from '../components/AnimatedSection';


const HomePage = () => {
    const theme = useTheme()
    return (
        <>
            <div className="home" style={{ marginTop: "50px", padding: "60px", textAlign: "center" }}>
                <AnimatedSection animationClass="fadeInLeft">
                    <h2 style={{ fontSize: "32px", fontWeight: "800" }}>
                        Unlock Your World with New <span style={{ color: theme.palette.primary.main }}>Languages</span>
                    </h2>
                </AnimatedSection>

                <AnimatedSection animationClass="fadeInRight" delay="0.2s">
                    <p style={{ fontSize: "20px" }}>
                        Discover engaging courses designed by native speakers. Start your journey to fluency today,
                        whether for travel, career, or personal growth.
                    </p>
                </AnimatedSection>

                <div style={{ display: "flex", gap: "10px", marginTop: "70px", justifyContent: "center" }}>
                    <AnimatedSection animationClass="fadeInUp" delay="0.4s">
                        <Link to="/login">
                            <Button variant="contained" style={{ color: "white", textTransform: "capitalize" }}>
                                Get Started
                            </Button>
                        </Link>
                    </AnimatedSection>

                    <AnimatedSection animationClass="fadeInUp" delay="0.6s">
                        <Link to="/aboutus">
                            <Button variant="outlined" className="learnMore">Learn More</Button>
                        </Link>
                    </AnimatedSection>
                </div>
            </div>

            <PopularCourses />
            <Start />
            <Instructors />
            <PriceComponent />
            <Testimonial /></>
    )
}

export default HomePage