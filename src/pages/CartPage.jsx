// pages/Cart.jsx
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../Context/CoursesContext";

const Cart = () => {
    const theme = useTheme();
    const { cart, removeFromCart, updateQuantity } = useCourses();
    const navigate = useNavigate();

    const total = cart.reduce(
        (acc, item) => acc + Number(item.price) * item.quantity,
        0
    );

    return (
        <Box
            sx={{
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                gap: 5,
            }}
        >
            <Typography variant="h4">Your Cart</Typography>

            {/* Cart items */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {cart.length === 0 ? (
                    <Typography
                        variant="h6"
                        sx={{ textAlign: "center", mt: 5, color: "text.secondary" }}
                    >
                        🛒 Your cart is empty.
                    </Typography>
                ) : (
                    cart.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: 2,
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                            }}
                        >
                            {/* Item details */}
                            <div>
                                <p
                                    style={{
                                        color: theme.palette.primary.main,
                                        fontWeight: "600",
                                        margin: 0,
                                    }}
                                >
                                    {item.name} : {item.title}
                                </p>
                                <strong>${Number(item.price).toFixed(2)}</strong>
                            </div>

                            {/* Quantity & remove controls */}
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <Box>
                                    <Button onClick={() => updateQuantity(item.id, 1)}>+</Button>
                                    <Typography component="span" sx={{ mx: 1 }}>
                                        {item.quantity}
                                    </Typography>
                                    <Button
                                        onClick={() =>
                                            item.quantity > 1 && updateQuantity(item.id, -1)
                                        }
                                    >
                                        -
                                    </Button>
                                </Box>

                                <IconButton onClick={() => removeFromCart(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    ))
                )}
            </Box>

            {/* Footer with total + checkout */}
            {cart.length > 0 && (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "1px solid #ddd",
                        pt: 2,
                    }}
                >
                    <Typography variant="h5">
                        Total: ${total.toFixed(2)}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate("/checkout")}
                    >
                        Proceed to Checkout
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default Cart;
