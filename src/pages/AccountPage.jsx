// components/AccountPage.jsx
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import fakeDB from "../Services/AuthServices";
import AnimatedSection from "../components/AnimatedSection"; // ✅ Correct import

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
        <Paper
            elevation={4}
            sx={{
                p: { xs: 3, md: 5 },
                maxWidth: 600,
                mx: "auto",
                borderRadius: "16px",
                mt: 5,
            }}
        >
            <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "600", textAlign: "center", mb: 3 }}
            >
                Account Settings
            </Typography>

            <Box display="flex" flexDirection="column" gap={2}>
                <AnimatedSection animationClass="fadeInLeft" delay="0.1s">
                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                    />
                </AnimatedSection>

                <AnimatedSection animationClass="fadeInRight" delay="0.2s">
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                    />
                </AnimatedSection>

                <AnimatedSection animationClass="fadeInLeft" delay="0.3s">
                    <TextField
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        fullWidth
                    />
                </AnimatedSection>

                <AnimatedSection animationClass="fadeInRight" delay="0.4s">
                    <TextField
                        label="Profile Image URL"
                        name="profileImage"
                        value={formData.profileImage}
                        onChange={handleChange}
                        fullWidth
                    />
                </AnimatedSection>

                <AnimatedSection animationClass="fadeInUp" delay="0.5s">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                        fullWidth
                        sx={{ textTransform: "capitalize", fontWeight: "600" }}
                    >
                        Save Changes
                    </Button>
                </AnimatedSection>
            </Box>
        </Paper>
    );
};

export default AccountPage;
