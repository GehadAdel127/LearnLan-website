// pages/Checkout.jsx
import {
    Box,
    Button,
    Divider,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../Context/CoursesContext";

const Checkout = () => {
    const { cart } = useCourses();
    const navigate = useNavigate();

    const total = cart.reduce(
        (acc, item) => acc + Number(item.price) * item.quantity,
        0
    );

    const handlePayment = (e) => {
        e.preventDefault();
        // ✅ In real app you would integrate Stripe / PayPal here
        navigate("/order-success");
    };

    return (
        <Box sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
            <Typography variant="h4" gutterBottom>
                Checkout
            </Typography>

            <Paper sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6">Billing Information</Typography>
                <Box
                    component="form"
                    sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
                    onSubmit={handlePayment}
                >
                    <TextField label="Full Name" fullWidth required />
                    <TextField label="Email Address" fullWidth required type="email" />
                    <TextField label="Address" fullWidth required />
                    <TextField label="City" fullWidth required />
                    <TextField label="ZIP / Postal Code" fullWidth required />

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="h6">Payment Details</Typography>
                    <TextField label="Card Number" fullWidth required />
                    <TextField label="Expiration Date (MM/YY)" fullWidth required />
                    <TextField label="CVV" fullWidth required />

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="h6">Order Summary</Typography>
                    {cart.map((item) => (
                        <Typography key={item.id}>
                            {item.name} : {item.title} × {item.quantity} = $
                            {(Number(item.price) * item.quantity).toFixed(2)}
                        </Typography>
                    ))}
                    <Typography variant="h5" sx={{ mt: 2 }}>
                        Total: ${total.toFixed(2)}
                    </Typography>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3 }}
                    >
                        Pay Now
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default Checkout;
