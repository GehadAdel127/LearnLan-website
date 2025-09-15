// pages/Cart.jsx
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import CourseCard from "../components/CourseCard";

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "English",
            title: "Advanced English",
            price: 59.99,
            image: "/path/to/image.jpg",
            quantity: 1,
        },
        {
            id: 2,
            name: "Arabic",
            title: "Beginner's Arabic",
            price: 49.99,
            image: "/path/to/image.jpg",
            quantity: 2,
        },
    ]);

    const handleRemove = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const handleQuantityChange = (id, delta) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Box sx={{ padding: "30px", display: "flex", flexDirection: "column", gap: 5 }}>
            <Typography variant="h4">Your Cart</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {cartItems.map((item) => (
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
                        <CourseCard
                            name={item.name}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                            <Box>
                                <Button onClick={() => handleQuantityChange(item.id, 1)}>+</Button>
                                <Typography component="span" sx={{ mx: 1 }}>{item.quantity}</Typography>
                                <Button onClick={() => handleQuantityChange(item.id, -1)}>-</Button>
                            </Box>
                            <IconButton onClick={() => handleRemove(item.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
                <Button variant="contained" color="primary">Proceed to Checkout</Button>
            </Box>
        </Box>
    );
};

export default Cart;
