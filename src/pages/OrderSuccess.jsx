// pages/OrderSuccess.jsx
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";

const OrderSuccess = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <AnimatedSection animationClass="fadeInDown" delay="0.1s">
                <Typography variant="h3" color="primary" gutterBottom>
                    🎉 Order Confirmed!
                </Typography>
            </AnimatedSection>

            <AnimatedSection animationClass="fadeInUp" delay="0.3s">
                <Typography variant="h6" gutterBottom>
                    Thank you for your purchase. A confirmation email has been sent to you.
                </Typography>
            </AnimatedSection>

            <AnimatedSection animationClass="fadeInUp" delay="0.5s">
                <Typography sx={{ mt: 2 }}>
                    You can now access your courses in your profile.
                </Typography>
            </AnimatedSection>

            <AnimatedSection animationClass="zoomIn" delay="0.7s">
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 4 }}
                    onClick={() => navigate("/courses")}
                >
                    Browse More Courses
                </Button>
            </AnimatedSection>
        </Box>
    );
};

export default OrderSuccess;
