// pages/Terms.jsx
import { Box, Typography } from "@mui/material";
import AnimatedSection from "../components/AnimatedSection";

const Terms = () => {
    return (
        <Box sx={{ p: 4, maxWidth: 900, mx: "auto" }}>
            <AnimatedSection animationClass="fadeInUp" delay="0.1s">
                <Typography variant="h4" gutterBottom>
                    Terms & Conditions
                </Typography>
            </AnimatedSection>

            <AnimatedSection animationClass="fadeInUp" delay="0.2s">
                <Typography paragraph>
                    Welcome to our platform. By using our services, you agree to abide by
                    the following terms and conditions...
                </Typography>
            </AnimatedSection>

            <AnimatedSection animationClass="fadeInUp" delay="0.3s">
                <Typography paragraph>
                    1. You must not redistribute course materials without permission. <br />
                    2. Payments are final unless otherwise stated. <br />
                    3. We reserve the right to modify these terms at any time.
                </Typography>
            </AnimatedSection>

            <AnimatedSection animationClass="fadeInUp" delay="0.4s">
                <Typography paragraph>
                    Please read these terms carefully before using our services.
                </Typography>
            </AnimatedSection>
        </Box>
    );
};

export default Terms;
