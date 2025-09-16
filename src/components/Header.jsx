// images import
import logo from "../assets/images/logo.png";

// react router + react
import { useTheme } from "@emotion/react";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// context
import { useAuth } from "../Context/AuthContext";

// MUI
import {
    Avatar,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Stack
} from "@mui/material";

const Header = () => {
    const theme = useTheme();
    const { user, logout } = useAuth();
    const [searchQuery, setSearchQuery] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleMenuOpen = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleMenuClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        try {
            logout();
            navigate("/login");
        } catch (error) {
            console.error(error.message);
        }
    };
    const getLinkStyle = (path) => ({
        fontSize: "16px",
        fontWeight: "700",
        textDecoration: "none",
        color:
            window.location.pathname === path
                ? theme.palette.primary.main
                : theme.palette.text.primary,
        transition: "color 0.3s ease-in-out"
    });

    return (
        <Box
            component="header"
            className="animate__animated animate__fadeInDown"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "95%",
                p: 3,
                borderRadius: 3,
                zIndex: 100
            }}
        >
            {/* Logo */}
            <Link to="/" style={{ textDecoration: "none" }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <img src={logo} alt="logo" style={{ width: "50px" }} loading="lazy" />
                    <h2 style={{ fontFamily: "arial", color: "#213547" }}>
                        Learn
                        <span style={{ fontFamily: "Quicksand", color: theme.palette.primary.main }}>
                            lang
                        </span>
                    </h2>
                </Stack>
            </Link>

            {/* Nav Links */}
            <Stack direction="row" spacing={2} width="60%" display="flex" justifyContent="center" alignItems="center"  >
                <Link to="/" style={getLinkStyle("/")}>Home</Link>
                <Link to="/aboutus" style={getLinkStyle("/aboutus")}>About Us</Link>
                <Link to="/courses" style={getLinkStyle("/courses")}>Courses</Link>
            </Stack>

            {/* Auth Controls */}
            <Stack direction="row" spacing={1} display="flex" justifyContent="center" alignItems="center" width="23%" >
                {user ? (
                    <>
                        <div style={{ textAlign: "right", marginRight: 8 }}>
                            <div style={{ fontSize: 14, fontWeight: 700 }}>{user.name}</div>
                            <div style={{ fontSize: 12, color: "#666" }}>{user.email}</div>
                        </div>
                        <IconButton onClick={handleMenuOpen} style={{ outline: "none", padding: "0px", marginLeft: "0px" }}>
                            <Avatar
                                src={user.profileImage || "/broken-image.jpg"}
                                alt={user.name}
                                sx={{ width: 40, height: 40, bgcolor: theme.palette.mode === 'dark' ? '#555' : theme.palette.primary.main, }}
                            />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                            PaperProps={{ elevation: 3, sx: { minWidth: 150 } }}
                            disableScrollLock
                        >
                            <MenuItem
                                onClick={() => {
                                    navigate("/profile");
                                    handleMenuClose();
                                }}
                            >
                                Profile
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    navigate("/cart")
                                    handleMenuClose();
                                }}
                            >
                                Cart
                            </MenuItem>
                            <MenuItem
                                onClick={(e) => {
                                    handleLogout(e);
                                    handleMenuClose();
                                }}
                            >
                                Logout
                            </MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Link to="/login">
                        <Button
                            variant="contained"
                            sx={{
                                px: 2,
                                py: 1,
                                color: theme.palette.background.paper,
                                fontSize: "12px",
                                textTransform: "capitalize"
                            }}
                        >
                            Try for free
                        </Button>
                    </Link>
                )}
            </Stack>
        </Box >
    );
};

export default Header;
