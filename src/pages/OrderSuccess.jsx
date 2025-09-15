// pages/OrderSuccess.jsx
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
            <Typography variant="h3" color="primary" gutterBottom>
                🎉 Order Confirmed!
            </Typography>
            <Typography variant="h6" gutterBottom>
                Thank you for your purchase. A confirmation email has been sent to you.
            </Typography>
            <Typography sx={{ mt: 2 }}>
                You can now access your courses in your profile.
            </Typography>

            <Button
                variant="contained"
                color="primary"
                sx={{ mt: 4 }}
                onClick={() => navigate("/courses")}
            >
                Browse More Courses
            </Button>
        </Box>
    );
};

export default OrderSuccess;
