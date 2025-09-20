// src/components/Header.jsx

import logo from "../assets/images/logo.png";

// react + router
import { useTheme } from "@emotion/react";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// context
import { useAuth } from "../Context/AuthContext";

// MUI
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CloseIcon from "@mui/icons-material/Close";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
    Avatar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Stack,
    useMediaQuery,
} from "@mui/material";

// animation
import AnimatedSection from "./AnimatedSection";

const Header = () => {
    const theme = useTheme();
    const { user, logout } = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // --- Handlers ---
    const handleMobileMenuToggle = () => setMobileOpen(!mobileOpen);
    const handleMenuOpen = useCallback((e) => setAnchorEl(e.currentTarget), []);
    const handleMenuClose = useCallback(() => setAnchorEl(null), []);

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/login");
    };

    // --- Helpers ---
    const getLinkSx = (path) => ({
        fontSize: "16px",
        fontWeight: "700",
        textDecoration: "none",
        color:
            window.location.pathname === path
                ? theme.palette.primary.main
                : theme.palette.text.primary,
        transition: "color 0.3s ease-in-out",
        "&:hover": { color: theme.palette.primary.main },
    });

    // --- Drawer for Mobile ---
    const drawer = (
        <Box
            className="animate__animated animate__fadeInRight"
            sx={{
                textAlign: "center",
                width: 250,
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <IconButton
                onClick={handleMobileMenuToggle}
                sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: theme.palette.text.primary,
                }}
            >
                <CloseIcon />
            </IconButton>

            <Box sx={{ mt: 8 }}>
                {user ? (
                    <Box sx={{ textAlign: "center", mb: 2 }}>
                        <Avatar
                            src={user.profileImage || "/broken-image.jpg"}
                            alt={user.name}
                            sx={{
                                width: 60,
                                height: 60,
                                mx: "auto",
                                mb: 1,
                                bgcolor:
                                    theme.palette.mode === "dark"
                                        ? "#555"
                                        : theme.palette.primary.main,
                            }}
                        />
                        <div style={{ fontSize: 16, fontWeight: 700 }}>{user.name}</div>
                        <div style={{ fontSize: 14, color: "#666" }}>{user.email}</div>
                    </Box>
                ) : (
                    <Button
                        variant="contained"
                        component={Link}
                        to="/login"
                        onClick={handleMobileMenuToggle}
                        sx={{ my: 2 }}
                    >
                        Try for free
                    </Button>
                )}
            </Box>

            <List sx={{ width: "100%" }}>
                {[
                    { to: "/", label: "Home" },
                    { to: "/aboutus", label: "About Us" },
                    { to: "/courses", label: "Courses" },
                    ...(user
                        ? [
                            { to: "/profile", label: "Profile" },
                            { to: "/cart", label: "Cart" },
                        ]
                        : []),
                ].map((link, i) => (
                    <AnimatedSection
                        key={link.to}
                        animationClass="fadeInLeft"
                        delay={`${i * 0.15}s`}
                    >
                        <ListItem
                            component={Link}
                            to={link.to}
                            onClick={handleMobileMenuToggle}
                            sx={{ cursor: "pointer" }}
                        >
                            <ListItemText
                                primary={link.label}
                                sx={{
                                    textAlign: "center",
                                    "& .MuiListItemText-primary": getLinkSx(link.to),
                                }}
                            />
                        </ListItem>
                    </AnimatedSection>
                ))}

                {user && (
                    <AnimatedSection animationClass="fadeInLeft" delay="0.6s">
                        <ListItem
                            onClick={(e) => {
                                handleLogout(e);
                                handleMobileMenuToggle();
                            }}
                            sx={{ cursor: "pointer" }}
                        >
                            <ListItemText
                                primary="Logout"
                                sx={{
                                    textAlign: "center",
                                    "& .MuiListItemText-primary": {
                                        fontWeight: 700,
                                        transition: "color 0.3s ease-in-out",
                                        "&:hover": { color: theme.palette.primary.main },
                                    },
                                }}
                            />
                        </ListItem>
                    </AnimatedSection>
                )}
            </List>
        </Box>
    );

    return (
        <Box
            component="header"
            className="animate__animated animate__fadeInDown"
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                p: 3,
                borderRadius: 3,
                zIndex: 100,
            }}
        >
            {/* Logo */}
            <Link to="/" style={{ textDecoration: "none" }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <img src={logo} alt="logo" style={{ width: "50px" }} />
                    <h2 style={{ fontFamily: "arial", color: "#213547" }}>
                        Learn
                        <span
                            style={{ fontFamily: "Quicksand", color: theme.palette.primary.main }}
                        >
                            lan
                        </span>
                    </h2>
                </Stack>
            </Link>

            {/* Nav Links */}
            {!isMobile && (
                <Stack direction="row" spacing={2} justifyContent="center" flex={1}>
                    <Link to="/" style={getLinkSx("/")}>Home</Link>
                    <Link to="/aboutus" style={getLinkSx("/aboutus")}>About Us</Link>
                    <Link to="/courses" style={getLinkSx("/courses")}>Courses</Link>
                </Stack>
            )}

            {/* Auth Controls */}
            <Stack direction="row" spacing={1} alignItems="center">
                {isMobile ? (
                    <IconButton onClick={handleMobileMenuToggle}>
                        <MenuIcon sx={{ color: theme.palette.text.primary }} />
                    </IconButton>
                ) : user ? (
                    <>
                        <div style={{ textAlign: "right", marginRight: 8 }}>
                            <div style={{ fontSize: 14, fontWeight: 700 }}>{user.name}</div>
                            <div style={{ fontSize: 12, color: "#666" }}>{user.email}</div>
                        </div>
                        <IconButton onClick={handleMenuOpen}>
                            <Avatar
                                src={user.profileImage || "/broken-image.jpg"}
                                alt={user.name}
                                sx={{
                                    width: 40,
                                    height: 40,
                                    bgcolor:
                                        theme.palette.mode === "dark"
                                            ? "#555"
                                            : theme.palette.primary.main,
                                }}
                            />
                        </IconButton>
                    </>
                ) : (
                    <Link to="/login">
                        <Button variant="contained" sx={{ textTransform: "capitalize" }}>
                            Try for free
                        </Button>
                    </Link>
                )}
            </Stack>

            {/* User Dropdown Menu with icons */}
            {user && (
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    PaperProps={{ elevation: 3, sx: { minWidth: 160 } }}
                >
                    <MenuItem
                        onClick={() => {
                            navigate("/profile");
                            handleMenuClose();
                        }}
                    >
                        <AccountCircleOutlinedIcon sx={{ mr: 1 }} />
                        Profile
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            navigate("/cart");
                            handleMenuClose();
                        }}
                    >
                        <ShoppingCartOutlinedIcon sx={{ mr: 1 }} />
                        Cart
                    </MenuItem>
                    <MenuItem
                        onClick={(e) => {
                            handleLogout(e);
                            handleMenuClose();
                        }}
                    >
                        <LogoutOutlinedIcon sx={{ mr: 1 }} />
                        Logout
                    </MenuItem>
                </Menu>
            )}

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleMobileMenuToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": { width: 250, borderRadius: 1 },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default Header;
