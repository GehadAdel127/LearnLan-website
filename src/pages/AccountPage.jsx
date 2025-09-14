import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import fakeDB from "../Services/AuthServices";

const AccountPage = ({ user }) => {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        password: user.password,
        profileImage: user.profileImage,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        const dbUser = fakeDB.users.find((u) => u.userId === user.userId);
        if (dbUser) {
            dbUser.name = formData.name;
            dbUser.email = formData.email;
            dbUser.password = formData.password;
            dbUser.profileImage = formData.profileImage;
            alert("✅ Account updated!");
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 4, maxWidth: 500, boxShadow: "none" }}>
            <Typography variant="h5" gutterBottom>
                Account Settings
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    fullWidth
                />
                <TextField
                    label="Profile Image URL"
                    name="profileImage"
                    value={formData.profileImage}
                    onChange={handleChange}
                    fullWidth
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                >
                    Save Changes
                </Button>
            </Box>
        </Paper>
    );
};

export default AccountPage;
