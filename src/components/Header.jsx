// images import
import logo from "../assets/images/logo.png";

// react router + react
import { useTheme } from "@emotion/react";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// context
import { useAuth } from "../Context/AuthContext";

// MUI
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
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

const Header = () => {
    const theme = useTheme();
    const { user, logout } = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // --- Handlers ---
    const handleMobileMenuToggle = () => setMobileOpen(!mobileOpen);

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
        "&:hover": {
            color: theme.palette.primary.main,
        },
    });

    // --- Drawer for Mobile ---
    const drawer = (
        <Box
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
                <ListItem
                    button
                    component={Link}
                    to="/"
                    onClick={handleMobileMenuToggle}
                >
                    <ListItemText
                        primary="Home"
                        sx={{ textAlign: "center", "& .MuiListItemText-primary": getLinkSx("/") }}
                    />
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/aboutus"
                    onClick={handleMobileMenuToggle}
                >
                    <ListItemText
                        primary="About Us"
                        sx={{
                            textAlign: "center",
                            "& .MuiListItemText-primary": getLinkSx("/aboutus"),
                        }}
                    />
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to="/courses"
                    onClick={handleMobileMenuToggle}
                >
                    <ListItemText
                        primary="Courses"
                        sx={{
                            textAlign: "center",
                            "& .MuiListItemText-primary": getLinkSx("/courses"),
                        }}
                    />
                </ListItem>
                {user && (
                    <>
                        <ListItem
                            button
                            component={Link}
                            to="/profile"
                            onClick={handleMobileMenuToggle}
                        >
                            <ListItemText
                                primary="Profile"
                                sx={{
                                    textAlign: "center",
                                    "& .MuiListItemText-primary": getLinkSx("/profile"),
                                }}
                            />
                        </ListItem>
                        <ListItem
                            button
                            component={Link}
                            to="/cart"
                            onClick={handleMobileMenuToggle}
                        >
                            <ListItemText
                                primary="Cart"
                                sx={{
                                    textAlign: "center",
                                    "& .MuiListItemText-primary": getLinkSx("/cart"),
                                }}
                            />
                        </ListItem>
                        <ListItem
                            button
                            onClick={(e) => {
                                handleLogout(e);
                                handleMobileMenuToggle();
                            }}
                        >
                            <ListItemText
                                primary="Logout"
                                sx={{
                                    textAlign: "center",
                                    "& .MuiListItemText-primary": {
                                        fontWeight: 700,
                                        transition: "color 0.3s ease-in-out",
                                        "&:hover": {
                                            color: theme.palette.primary.main,
                                        },
                                    },
                                }}
                            />
                        </ListItem>
                    </>
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
                    <img
                        src={logo}
                        alt="logo"
                        style={{ width: "50px" }}
                        loading="lazy"
                    />
                    <h2 style={{ fontFamily: "arial", color: "#213547" }}>
                        Learn
                        <span
                            style={{
                                fontFamily: "Quicksand",
                                color: theme.palette.primary.main,
                            }}
                        >
                            lang
                        </span>
                    </h2>
                </Stack>
            </Link>

            {/* Nav Links */}
            {!isMobile && (
                <Stack
                    direction="row"
                    spacing={2}
                    width="75%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Link to="/" style={getLinkSx("/")}>
                        Home
                    </Link>
                    <Link to="/aboutus" style={getLinkSx("/aboutus")}>
                        About Us
                    </Link>
                    <Link to="/courses" style={getLinkSx("/courses")}>
                        Courses
                    </Link>
                </Stack>
            )}

            {/* Auth Controls */}
            <Stack
                direction="row"
                spacing={1}
                display="flex"
                justifyContent="end"
                alignItems="center"
                sx={{ width: isMobile ? "100%" : "" }}
            >
                {isMobile ? (
                    <IconButton
                        onClick={handleMobileMenuToggle}
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                    >
                        <MenuIcon sx={{ color: theme.palette.text.primary }} />
                    </IconButton>
                ) : (
                    <>
                        {user ? (
                            <>
                                <div style={{ textAlign: "right", marginRight: 8 }}>
                                    <div style={{ fontSize: 14, fontWeight: 700 }}>
                                        {user.name}
                                    </div>
                                    <div style={{ fontSize: 12, color: "#666" }}>
                                        {user.email}
                                    </div>
                                </div>
                                <IconButton
                                    onClick={handleMenuOpen}
                                    style={{
                                        outline: "none",
                                        padding: "0px",
                                        marginLeft: "0px",
                                    }}
                                >
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
                                <Button
                                    variant="contained"
                                    sx={{
                                        px: 2,
                                        py: 1,
                                        color: theme.palette.background.paper,
                                        fontSize: "12px",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    Try for free
                                </Button>
                            </Link>
                        )}
                    </>
                )}
            </Stack>

            {/* User Dropdown Menu */}
            {user && (
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
                            navigate("/cart");
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
            )}

            {/* Mobile Drawer */}
            <nav>
                <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleMobileMenuToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: 250,
                            borderTopLeftRadius: theme.spacing(1),
                            borderBottomLeftRadius: theme.spacing(1),
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
};

export default Header;
