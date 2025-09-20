// pages/Privacy.jsx
import { Box, Typography, useTheme } from "@mui/material";
import AnimatedSection from "../components/AnimatedSection";

const Privacy = () => {
    const theme = useTheme()
    return (
        <Box sx={{ p: 4, maxWidth: 900, mx: "auto" }}>
            <AnimatedSection animationClass="fadeInUp" delay="0.1s">
                <Typography variant="h3" gutterBottom color={theme.palette.primary.main}>
                    Privacy Policy
                </Typography>
            </AnimatedSection>

            <AnimatedSection animationClass="fadeInUp" delay="0.2s">
                <Typography paragraph>
                    Your privacy is important to us. This policy explains how we collect,
                    use, and safeguard your personal information....
                </Typography>
            </AnimatedSection>

            <AnimatedSection animationClass="fadeInUp" delay="0.3s">
                <Typography paragraph>
                    1. We only collect necessary data to provide our services. <br />
                    2. We do not share your personal information with third parties without
                    consent. <br />
                    3. Payment information is processed securely by trusted providers.
                </Typography>
            </AnimatedSection>

            <AnimatedSection animationClass="fadeInUp" delay="0.4s">
                <Typography paragraph>
                    By using our platform, you agree to this privacy policy.
                </Typography>
            </AnimatedSection>
        </Box>
    );
};

export default Privacy;
