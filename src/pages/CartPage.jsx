// pages/Cart.jsx
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../Context/CoursesContext";
import AnimatedSection from "../components/AnimatedSection";

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
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: 5,
            }}
        >
            <AnimatedSection animationClass="fadeInUp" delay={"0.1s"}>
                <Typography variant="h4">Your Cart</Typography>
            </AnimatedSection>

            {/* Cart items */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {cart.length === 0 ? (
                    <AnimatedSection animationClass="fadeInUp" delay={"0.2s"}>
                        <Typography
                            variant="h6"
                            sx={{ textAlign: "center", mt: 5, color: "text.secondary" }}
                        >
                            🛒 Your cart is empty.
                        </Typography>
                    </AnimatedSection>
                ) : (
                    cart.map((item, index) => (
                        <AnimatedSection
                            key={item.id || index}
                            delay={`${index * 0.1}s`}
                            animationClass="fadeInUp"
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "18px 9px",
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
                                        gap: 0,
                                    }}
                                >
                                    <Box>
                                        <Button
                                            sx={{ minWidth: "30px" }}
                                            onClick={() => updateQuantity(item.id, 1)}
                                        >
                                            +
                                        </Button>
                                        <Typography component="span" sx={{ mx: 0 }}>
                                            {item.quantity}
                                        </Typography>
                                        <Button
                                            sx={{ minWidth: "30px" }}
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
                        </AnimatedSection>
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
                    <AnimatedSection animationClass={"fadeInLeft"} delay="0.1s">
                        <Typography variant="h5">
                            Total: ${total.toFixed(2)}
                        </Typography>
                    </AnimatedSection>
                    <AnimatedSection animationClass={"fadeInRight"} delay="0.1s">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate("/checkout")}
                        >
                            Proceed to Checkout
                        </Button>
                    </AnimatedSection>
                </Box>
            )}
        </Box>
    );
};

export default Cart;
