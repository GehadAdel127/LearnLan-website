// pages/Terms.jsx
import { Box, Typography } from "@mui/material";

const Terms = () => {
    return (
        <Box sx={{ p: 4, maxWidth: 900, mx: "auto" }}>
            <Typography variant="h4" gutterBottom>
                Terms & Conditions
            </Typography>
            <Typography paragraph>
                Welcome to our platform. By using our services, you agree to abide by
                the following terms and conditions...
            </Typography>
            <Typography paragraph>
                1. You must not redistribute course materials without permission. <br />
                2. Payments are final unless otherwise stated. <br />
                3. We reserve the right to modify these terms at any time.
            </Typography>
            <Typography paragraph>
                Please read these terms carefully before using our services.
            </Typography>
        </Box>
    );
};

export default Terms;
