import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

// MUI
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
// custom hook
import { Box, Typography } from "@mui/material";
import AnimatedSection from '../components/AnimatedSection';

const Footer = () => {
    const theme = useTheme();
    return (
        <Box
            component="footer"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: {
                    xs: "20px",
                    md: "50px",
                },
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                borderTop: `1px solid ${theme.palette.divider}`,
            }}
        >
            <Box
                className="footerContent"
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                    justifyContent: "space-between",
                    alignItems: {
                        xs: "center",
                        md: "flex-start",
                    },
                    gap: {
                        xs: "30px",
                        md: "50px",
                    },
                    width: "100%",
                    maxWidth: "lg",
                    marginBottom: {
                        xs: "30px",
                        md: "50px",
                    },
                }}
            >
                <Box
                    className="main"
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "80%",
                            md: "35%",
                        },
                        textAlign: {
                            xs: "center",
                            md: "left",
                        },
                    }}
                >
                    <Box
                        className="icon"
                        sx={{
                            display: "flex",
                            justifyContent: {
                                xs: "center",
                                md: "flex-start",
                            },
                            alignItems: "center",
                            gap: "10px",
                            mb: 2,
                        }}
                    >
                        <img src={logo} alt="logo image" style={{ width: "50px" }} loading="lazy" />
                        <h2 style={{ display: "inline", fontFamily: "arial" }}>Learn<span style={{ fontFamily: "Quicksand", color: theme.palette.primary.main }}>lang</span></h2>
                    </Box>
                    <AnimatedSection animationClass="slideInUp">
                        <Box className="content">
                            <Typography variant="body2" sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                                Discover engaging courses designed by native speakers. Start your journey to fluency today, whether for travel, career, or personal growth.
                            </Typography>
                        </Box>
                    </AnimatedSection>
                </Box>

                <Box
                    className="courses"
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "80%",
                            md: "21%",
                        },
                        textAlign: {
                            xs: "center",
                            md: "left",
                        },
                    }}
                >
                    <Box
                        className="icon"
                        sx={{
                            display: "flex",
                            justifyContent: {
                                xs: "center",
                                md: "flex-start",
                            },
                            alignItems: "center",
                            gap: "10px",
                            mb: 2,
                        }}
                    >
                        <Typography variant="h6" component="h3" sx={{ textTransform: "uppercase", fontSize: { xs: "1rem", md: "1.2rem" } }}>Courses</Typography>
                    </Box>
                    <AnimatedSection animationClass="slideInUp">
                        <Box
                            className="coursesContent"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: {
                                    xs: "center",
                                    md: "flex-start",
                                },
                                gap: "10px",
                                marginTop: "22px",
                            }}
                        >
                            <Link to="/courses/arabic" style={{ textDecoration: "none", color: theme.palette.text.secondary }}>Arabic Course</Link>
                            <Link to="/courses/english" style={{ textDecoration: "none", color: theme.palette.text.secondary }}>English Course</Link>
                            <Link to="/courses/spanish" style={{ textDecoration: "none", color: theme.palette.text.secondary }}>Spanish Course</Link>
                            <Link to="/courses/french" style={{ textDecoration: "none", color: theme.palette.text.secondary }}>French Course</Link>
                            <Link to="/courses/german" style={{ textDecoration: "none", color: theme.palette.text.secondary }}>German Course</Link>
                        </Box>
                    </AnimatedSection>
                </Box>

                {/* Links Section */}
                <Box
                    className="links"
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "80%",
                            md: "21%",
                        },
                        textAlign: {
                            xs: "center",
                            md: "left",
                        },
                    }}
                >
                    <Box
                        className="icon"
                        sx={{
                            display: "flex",
                            justifyContent: {
                                xs: "center",
                                md: "flex-start",
                            },
                            alignItems: "center",
                            gap: "10px",
                            mb: 2,
                        }}
                    >
                        <Typography variant="h6" component="h3" sx={{ textTransform: "uppercase", fontSize: { xs: "1rem", md: "1.2rem" } }}>Links</Typography>
                    </Box>
                    <AnimatedSection animationClass="slideInUp">
                        <Box
                            className="linksContent"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: {
                                    xs: "center",
                                    md: "flex-start",
                                },
                                gap: "10px",
                                marginTop: "22px",
                            }}
                        >
                            <Link to={"/courses"} style={{ textDecoration: "none", color: theme.palette.text.secondary }}>Courses</Link>
                            <Link to={"/terms"} style={{ textDecoration: "none", color: theme.palette.text.secondary }}>Terms</Link>
                            <Link to={"/aboutus"} style={{ textDecoration: "none", color: theme.palette.text.secondary }}>About Us</Link>
                            <Link to={"/contact"} style={{ textDecoration: "none", color: theme.palette.text.secondary }}>Contact Us</Link>
                            <Link to={"/privacy"} style={{ textDecoration: "none", color: theme.palette.text.secondary }}>Privacy</Link>
                        </Box>
                    </AnimatedSection>
                </Box>

                {/* Contact Section */}
                <Box
                    className="contact"
                    sx={{
                        width: {
                            xs: "100%",
                            sm: "80%",
                            md: "21%",
                        },
                        textAlign: {
                            xs: "center",
                            md: "left",
                        },
                    }}
                >
                    <Box
                        className="icon"
                        sx={{
                            display: "flex",
                            justifyContent: {
                                xs: "center",
                                md: "flex-start",
                            },
                            alignItems: "center",
                            gap: "10px",
                            mb: 2,
                        }}
                    >
                        <Typography variant="h6" component="h3" sx={{ textTransform: "uppercase", fontSize: { xs: "1rem", md: "1.2rem" } }}>Contact</Typography>
                    </Box>
                    <AnimatedSection animationClass="slideInUp">
                        <Box
                            className="contactContent"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: {
                                    xs: "center",
                                    md: "flex-start",
                                },
                                gap: "10px",
                                marginTop: "22px",
                            }}
                        >
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>Call us:</Typography>
                            <Typography variant="body2" color="text.secondary">+20(1234567890)</Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>Send email:</Typography>
                            <Typography variant="body2" color="text.secondary">gehadadel6111@gmail.com</Typography>
                        </Box>
                    </AnimatedSection>
                </Box>
            </Box>

            {/* Copyright and Social Icons */}
            <Box
                className="copyRight"
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column", // Stack vertically on small screens
                        sm: "row",   // Row layout on small-medium and up
                    },
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginTop: {
                        xs: "30px",
                        md: "50px",
                    },
                    borderTop: `1px solid ${theme.palette.divider}`, // Separator line for copyright
                    paddingTop: {
                        xs: "20px",
                        md: "30px",
                    },
                    textAlign: {
                        xs: "center",
                        sm: "left",
                    },
                }}
            >
                <AnimatedSection animationClass="fadeInLeft">
                    <Typography variant="body2" sx={{
                        marginBottom: { xs: "15px", sm: 0 } // Add margin bottom for copyright on small screens
                    }}>
                        © 2025 Your Learning.All Rights Reserved.
                    </Typography>
                </AnimatedSection>
                <Box
                    className="icons"
                    sx={{
                        display: "flex",
                        justifyContent: "center", // Center icons when stacked or on small screens
                        alignItems: "center",
                        gap: {
                            xs: "20px", // Smaller gap on small screens
                            md: "50px", // Original gap on medium and up
                        },
                        flexWrap: "wrap", // Allow icons to wrap if space is tight
                    }}
                >
                    <AnimatedSection animationClass="fadeInLeft">
                        {/* Use IconButton for better accessibility and clickable areas */}
                        <Link to="#" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.text.secondary }}>
                            <YouTubeIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
                        </Link>
                        <Link to="#" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.text.secondary }}>
                            <PinterestIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
                        </Link>
                        <Link to="#" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.text.secondary }}>
                            <FacebookIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
                        </Link>
                        <Link to="#" target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.text.secondary }}>
                            <InstagramIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
                        </Link>
                    </AnimatedSection>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;