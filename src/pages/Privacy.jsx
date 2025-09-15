// pages/Privacy.jsx
import { Box, Typography } from "@mui/material";

const Privacy = () => {
    return (
        <Box sx={{ p: 4, maxWidth: 900, mx: "auto" }}>
            <Typography variant="h4" gutterBottom>
                Privacy Policy
            </Typography>
            <Typography paragraph>
                Your privacy is important to us. This policy explains how we collect,
                use, and safeguard your personal information...
            </Typography>
            <Typography paragraph>
                1. We only collect necessary data to provide our services. <br />
                2. We do not share your personal information with third parties without
                consent. <br />
                3. Payment information is processed securely by trusted providers.
            </Typography>
            <Typography paragraph>
                By using our platform, you agree to this privacy policy.
            </Typography>
        </Box>
    );
};

export default Privacy;
