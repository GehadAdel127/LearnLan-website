import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";


// MUI
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
    const theme = useTheme()
    return (
        <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "start", flexDirection: "column", padding: "50px" }}>
            <div className="footerContent" style={{ display: "flex", justifyContent: "center", alignItems: "start", gap: "50px" }}>
                <div className="main" style={{ width: "35%" }}>
                    <div className="icon" style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "10px" }}>
                        <img src={logo} alt="logo image" style={{ width: "50px" }} loading="lazy" />
                        <h2 style={{ display: "inline", fontFamily: "arial" }}>Learn<span style={{ fontFamily: "Quicksand", color: theme.palette.primary.main }}>lang</span></h2>
                    </div>
                    <div className="content animate__animated animate__slideInUp">
                        <p style={{ fontSize: "16px" }}>Discover engaging courses designed by native speakers. Start your journey to fluency today, whether for travel, career, or personal growth.</p>
                    </div>
                </div>
                <div className="courses" style={{ width: "21%" }}>
                    <div className="icon" style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "10px" }}>
                        <h3 style={{ display: "inline", textTransform: "uppercase" }}>Courses</h3>
                    </div>
                    <div className="coursesContent animate__animated animate__slideInUp" style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", gap: "10px", marginTop: "22px" }}>
                        <Link>Arabic Course</Link>
                        <Link>English Course</Link>
                        <Link>Spanish Course</Link>
                        <Link>French Course</Link>
                        <Link>Chinese Course</Link>
                    </div>
                </div>
                <div className="links" style={{ width: "21%" }}>
                    <div className="icon" style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "10px" }}>
                        <h3 style={{ display: "inline", textTransform: "uppercase" }}>Links</h3>
                    </div>
                    <div className="linksContent animate__animated animate__slideInUp" style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", gap: "10px", marginTop: "22px" }}>
                        <Link>Courses</Link>
                        <Link>teachers</Link>
                        <Link>About Us</Link>
                        <Link>Contact Us</Link>
                        <Link>Blog</Link>
                    </div>
                </div>
                <div className="contact" style={{ width: "21%" }}>
                    <div className="icon" style={{ display: "flex", justifyContent: "start", alignItems: "center", gap: "10px" }}>
                        <h3 style={{ display: "inline", textTransform: "uppercase" }}>Contact</h3>
                    </div>
                    <div className="contactContent animate__animated animate__slideInUp" style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", gap: "10px" }}>
                        <p>Call us:</p>
                        <span>
                            +20(1234567890)
                        </span>
                        <p>Send email:</p>
                        <span>
                            gehadadel6111@gmail.com
                        </span>
                    </div>
                </div>
            </div>
            <div className="copyRight animate__animated animate__fadeInLeft" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <p style={{ marginTop: "50px" }}>© 2025 Your Learning.All Rights Reserved.</p>
                <div className="icons" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "50px" }}>
                    <Link><YouTubeIcon /></Link>
                    <Link><PinterestIcon /></Link>
                    <Link><FacebookIcon /></Link>
                    <Link><InstagramIcon /></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer