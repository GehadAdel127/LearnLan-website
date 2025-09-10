// images import
import TextField from "@mui/material/TextField"
import logo from "../assets/images/logo.png"
// react router imports
import { useTheme } from "@emotion/react"
import Button from "@mui/material/Button"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

// context
import { AuthContext } from "../Context/AuthContext"

// MUI
import Avatar from "@mui/material/Avatar"

const Header = () => {
    const theme = useTheme()
    const [selectedLink, setSelectedLink] = useState("/")
    const user = useContext(AuthContext)
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()
    const getLinkStyle = (path) => ({
        fontSize: "16px",
        fontWeight: "700",
        textDecoration: "none",
        color: selectedLink === path ? theme.palette.primary.main : "black",
        transition: "color 0.3s ease-in-out"
    });

    // handle search on button click
    const handleSearchClick = () => {
        if (searchQuery.trim()) {
            navigate(`/courses?search=${encodeURIComponent(searchQuery.trim())}`)
            setSearchQuery("")
        }
    }

    return (
        <header
            className="animate__animated animate__fadeInDown"
            style={{
                display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%",
                padding: "0px 50px", backgroundColor: theme.palette.background.main, position: "fixed",
                top: "20px", right: "20px", borderRadius: "20px", boxShadow: "10px 10px 10px rgb(0 0 0 / 13%)",
                zIndex: "100"
            }}>
            <Link to={"/"} style={{ width: "20%" }}>
                <div className="logo" style={{ width: "100%", fontSize: "10px", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                    <img src={logo} alt="logo" style={{ width: "50px" }} loading="lazy" />
                    <h1 style={{ display: "inline", fontFamily: "arial", color: "#213547" }}>Learn<span style={{ fontFamily: "Quicksand", color: theme.palette.primary.main }}>lang</span></h1>
                </div>

            </Link>
            <div className="links" style={{ width: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Link to="/" onClick={() => { (setSelectedLink("/")) }} style={getLinkStyle("/")}>Home</Link>
                <Link to="/aboutus" onClick={() => { (setSelectedLink("/aboutus")) }} style={getLinkStyle("/aboutus")} >About Us</Link>
                <Link to="/courses" onClick={() => { (setSelectedLink("/courses")) }} style={getLinkStyle("/courses")}>Courses</Link>
            </div>
            <div className="searchAndLogin" style={{ width: "26%", display: "flex", justifyContent: "end", alignItems: "center", gap: "10px" }}>
                <TextField
                    id="outlined-basic"
                    label="Search for course"
                    variant="outlined"
                    size="small"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: "200px", background: "white", fontSize: "10px", borderRadius: "7px" }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault()
                            handleSearchClick()
                        }
                    }}
                />
                {user ? <Link to={'/profile'}><Avatar src={user.profileImage || "/broken-image.jpg"} /></Link> : <Link to="/login"><Button variant="contained" style={{ padding: "10px 15px", color: "white", fontSize: "12px", textTransform: "capitalize" }}>Try for free</Button></Link>}
            </div>
        </header>
    )
}

export default Header