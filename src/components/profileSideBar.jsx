// src/components/profileSideBar.jsx
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

const Sidebar = ({ user, onSelect }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [selected, setSelected] = useState("dashboard");

    // links differ per role
    const links = [
        { key: "dashboard", label: "Dashboard" },
        { key: "courses", label: "Courses" },
        ...(user.role === "teacher"
            ? [{ key: "createCourse", label: "Create Course" }]
            : []),
        ...(user.role === "teacher" || user.role === "admin"
            ? [{ key: "students", label: "Students" }]
            : []),
        ...(user.role === "admin" ? [{ key: "teachers", label: "Teachers" }] : []),
        ...(user.role === "student"
            ? [{ key: "savedCourses", label: "Saved Courses" }]
            : []),
        { key: "account", label: "Account" },
        { key: "logout", label: "Logout" },
    ];

    // Dashboard title
    const roleTitle =
        user.role === "student"
            ? "Student Dashboard"
            : user.role === "teacher"
                ? "Teacher Dashboard"
                : user.role === "admin"
                    ? "Admin Dashboard"
                    : "Dashboard";

    return (
        <aside
            style={{
                flexShrink: 0,
                width: isMobile ? "100%" : "20%",
                background: theme.palette.primary.main,
                borderRight: isMobile ? "none" : "1px solid #ddd",
                borderRadius: isMobile ? "0" : "0 10px 10px 0",
                display: "flex",
                flexDirection: "column",
                minHeight: isMobile ? "100vh" : "auto",
            }}
        >
            <h2
                style={{
                    color: theme.palette.background.paper,
                    padding: isMobile ? "16px" : "20px",
                    margin: 0,
                    fontSize: isMobile ? "16px" : "18px",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                }}
            >
                {roleTitle}
            </h2>

            <nav
                style={{
                    flex: 1,
                    padding: isMobile ? "8px 0" : "16px 0",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {links.map((link) => (
                    <div
                        key={link.key}
                        onClick={() => {
                            setSelected(link.key);
                            onSelect(link.key);
                        }}
                        style={{
                            padding: isMobile ? "12px 16px" : "12px 20px",
                            cursor: "pointer",
                            fontSize: isMobile ? "16px" : "18px",
                            fontWeight: "500",
                            transition: "all 0.2s ease",
                            color:
                                selected === link.key
                                    ? theme.palette.background.paper
                                    : "#b9b5b5ff",
                            transform:
                                selected === link.key ? "translateX(10px)" : "translateX(0)",
                        }}
                        onMouseEnter={(e) => {
                            if (selected !== link.key) {
                                e.currentTarget.style.transform = "translateX(10px)";
                                e.currentTarget.style.color =
                                    theme.palette.background.paper;
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (selected !== link.key) {
                                e.currentTarget.style.transform = "translateX(0)";
                                e.currentTarget.style.color = "#b9b5b5ff";
                            }
                        }}
                    >
                        {link.label}
                    </div>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
