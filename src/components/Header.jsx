// images import
import TextField from "@mui/material/TextField";
import logo from "../assets/images/logo.png";

// react router + react
import { useTheme } from "@emotion/react";
import { useCallback, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// context
import { AuthContext } from "../Context/AuthContext";

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
    const { user, logout } = useContext(AuthContext);
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

    const handleSearchClick = () => {
        if (searchQuery.trim()) {
            navigate(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery("");
        }
    };

    const getLinkStyle = (path) => ({
        fontSize: "16px",
        fontWeight: "700",
        textDecoration: "none",
        color: window.location.pathname === path ? theme.palette.primary.main : "black",
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
                width: "100%",
                p: 3,
                borderRadius: 3,
                // boxShadow: "10px 10px 10px rgb(0 0 0 / 13%)",
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
            <Stack direction="row" spacing={2}>
                <Link to="/" style={getLinkStyle("/")}>Home</Link>
                <Link to="/aboutus" style={getLinkStyle("/aboutus")}>About Us</Link>
                <Link to="/courses" style={getLinkStyle("/courses")}>Courses</Link>
            </Stack>

            {/* Search and Auth Controls */}
            <Stack direction="row" spacing={0} alignItems="center" width="28%">
                <TextField
                    id="outlined-basic"
                    label="Search for course"
                    variant="outlined"
                    size="small"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleSearchClick();
                        }
                    }}
                    sx={{
                        width: 200,
                        backgroundColor: "white",
                        borderRadius: 1
                    }}
                />

                {user ? (
                    <>
                        <IconButton onClick={handleMenuOpen} style={{ outline: "none" }}>
                            <Avatar
                                src={user.profileImage || "/broken-image.jpg"}
                                alt="User Avatar"
                                sx={{ width: 40, height: 40 }}
                            />
                        </IconButton>
                        <div style={{ textAlign: "right", marginRight: 8 }}>
                            <div style={{ fontSize: 14, fontWeight: 700 }}>{user.name}</div>
                            <div style={{ fontSize: 12, color: "#666" }}>{user.email}</div>
                        </div>
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
                                    alert("Theme switch placeholder");
                                    handleMenuClose();
                                }}
                            >
                                Theme
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
                                color: "white",
                                fontSize: "12px",
                                textTransform: "capitalize"
                            }}
                        >
                            Try for free
                        </Button>
                    </Link>
                )}
            </Stack>
        </Box>
    );
};

export default Header;
