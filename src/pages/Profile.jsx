import { Stack, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';


import AnimatedSection from "../components/AnimatedSection";
import ProfileDetails from "../components/ProfileDetails";
import coursesData from "../pages/CoursesData";

const Profile = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [selected, setSelected] = useState("dashboard")
    const theme = useTheme()
    const getLinkStyle = (path) => ({
        fontSize: "16px",
        fontWeight: "400",
        color: selected === path ? "white" : "#c4c3c3ff"
    });
    if (!user) {
        navigate("/login")
    }
    const role = user.role
    // switch (role) {
    //     case "student":s
    //         return <StudentProfile user={user} />
    //     case "teacher":
    //         return <TeacherProfile user={user} />
    //     case "admin":
    //         return <AdminProfile user={user} />
    //     default:
    //         return <div>Unknown role : {role}</div>
    // }

    return (
        <div className="profile" style={{ display: "flex", justifyContent: "start", alignItems: "start", gap: "20px" }}>
            <aside style={{ width: "12%", color: "white", borderRadius: "0 10px 10px 0", backgroundColor: "#0A5EB0", padding: "20px", height: "120vh" }}>
                {/* Logo */}
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <h2 style={{ fontFamily: "arial", color: "white" }}>
                            Learnlan
                        </h2>
                    </Stack>
                </Link>
                <ul style={{ marginTop: "50px", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start", padding: "0" }}>
                    <li><Link to={"dashboard"} style={getLinkStyle("dashboard")}><DashboardOutlinedIcon /> Dashboard</Link></li>
                    <li> <Link to={"allcourses"} style={getLinkStyle("allcourses")}><FolderOutlinedIcon /> All courses</Link></li>
                    <li><Link to={"whishlist"} style={getLinkStyle("whishlist")}><FavoriteBorderOutlinedIcon /> Whishlist</Link></li>
                </ul>
            </aside>
            <main style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column", gap: "10px" }}>
                <h2>My Courses</h2>
                <div className="profileCards" style={{ marginTop: "45px", width: "100%", gap: "20px", display: "flex", flexDirection: "column" }}>
                    {coursesData.map((course, index) => (
                        <AnimatedSection key={course.id} animationClass="fadeInUp" delay={`${index * 0.3}s`}>
                            <ProfileDetails name={course.name} details={course.lessons[0].description} title={course.title} color={course.profileColor} image={course.profileImage} />
                        </AnimatedSection>
                    ))}
                </div>
            </main>

        </div>
    )
}

export default Profile