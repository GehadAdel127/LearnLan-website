// src/components/profileSideBar.jsx
import { useTheme } from "@emotion/react";
import { useState } from "react";

const Sidebar = ({ user, onSelect }) => {
    const theme = useTheme();
    const [selected, setSelected] = useState("dashboard");

    // links differ per role
    const links = [
        { key: "dashboard", label: "Dashboard" },
        { key: "courses", label: "Courses" },
        ...(user.role === "teacher" || user.role === "admin"
            ? [{ key: "students", label: "Students" }]
            : []),
        ...(user.role === "admin" ? [{ key: "teachers", label: "Teachers" }] : []),
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
                width: "20%",
                background: theme.palette.primary.main,
                borderRight: "1px solid #ddd",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <h2
                style={{
                    color: "#fff",
                    padding: "20px",
                    height: "50px",
                    margin: 0,
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                }}
            >
                {roleTitle}
            </h2>

            <nav style={{ flex: 1, padding: "16px 0" }}>
                {links.map((link) => (
                    <div
                        key={link.key}
                        onClick={() => {
                            setSelected(link.key);
                            onSelect(link.key);
                        }}
                        style={{
                            padding: "12px 20px",
                            cursor: "pointer",
                            fontSize: "18px",
                            fontWeight: "500",
                            transition: "all 0.2s ease",
                            color:
                                selected === link.key ? "#fff" : "#b9b5b5ff",
                            transform:
                                selected === link.key
                                    ? "translateX(10px)"
                                    : "translateX(0)",
                        }}
                        onMouseEnter={(e) => {
                            if (selected !== link.key) {
                                e.currentTarget.style.transform =
                                    "translateX(10px)";
                                e.currentTarget.style.color = "#fff";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (selected !== link.key) {
                                e.currentTarget.style.transform =
                                    "translateX(0)";
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
