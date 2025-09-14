// src/pages/Profile.jsx
import { Avatar, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import AdminDashboard from "../components/AdminDashboard";
import Sidebar from "../components/profileSideBar";
import StudentDashboard from "../components/StudentDashboard";
import TeacherDashboard from "../components/TeacherDashboard";
import AccountPage from "./AccountPage";

import AdminCharts from "../components/AdminCharts";
import AdminTeachersChart from "../components/AdminTeacherCharts";
import ProfileDetails from "../components/ProfileDetails";
import StudentsChart from "../components/StudentsCharts";
import TeacherCharts from "../components/TeacherCharts";

import { AuthContext } from "../Context/AuthContext";
import fakeDB from "../Services/AuthServices"; // ✅ students + teachers info
import coursesData from "./CoursesData"; // ✅ courses info

const Profile = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const contextUser = auth?.user ?? null;
    const contextLogout = auth?.logout ?? null;

    const [user, setUser] = useState(null);
    const [section, setSection] = useState("dashboard");
    const [date, setDate] = useState(new Date());
    const [visitDates, setVisitDates] = useState([]);

    const [anchorEl, setAnchorEl] = useState(null);

    // Load user from context or localStorage
    useEffect(() => {
        if (contextUser) {
            setUser(contextUser);
            return;
        }
        const stored = localStorage.getItem("currentUser");
        if (stored) {
            try {
                setUser(JSON.parse(stored));
            } catch (err) {
                console.error("Failed to parse currentUser from localStorage", err);
            }
        }
    }, [contextUser]);

    // Track visits
    useEffect(() => {
        const visits = JSON.parse(localStorage.getItem("visitDates")) || [];
        const today = new Date().toISOString().split("T")[0];
        if (!visits.includes(today)) {
            visits.push(today);
            localStorage.setItem("visitDates", JSON.stringify(visits));
        }
        setVisitDates(visits);
    }, []);

    const isVisited = (d) => {
        const dayStr = d.toISOString().split("T")[0];
        return visitDates.includes(dayStr);
    };

    const handleMenuOpen = useCallback((e) => setAnchorEl(e.currentTarget), []);
    const handleMenuClose = useCallback(() => setAnchorEl(null), []);

    const handleLogout = useCallback(
        (e) => {
            e?.preventDefault();
            if (contextLogout) contextLogout();
            localStorage.removeItem("currentUser");
            navigate("/login");
        },
        [contextLogout, navigate]
    );

    // Compute enrolled courses safely
    const enrolled = useMemo(() => {
        if (!user?.enrolledCourses) return [];
        return user.enrolledCourses.map((ec) =>
            coursesData.find((c) => c.id === ec.courseId)
        );
    }, [user]);

    if (!user) {
        return <div style={{ padding: 40, textAlign: "center" }}>Loading profile...</div>;
    }

    const renderContent = () => {
        switch (section) {
            case "dashboard":
                if (user.role === "student") return <StudentDashboard user={user} />;
                if (user.role === "teacher") return <TeacherDashboard user={user} />;
                if (user.role === "admin") return <AdminDashboard />;
                return <h2>Welcome {user.name}</h2>;

            case "courses":
                return (
                    <div>
                        <h2 style={{ marginBottom: 16 }}>Courses</h2>

                        {/* Student */}
                        {user.role === "student" && (
                            <>
                                <TeacherCharts user={user} /> {/* optional chart */}
                                <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
                                    {enrolled.map((course, i) =>
                                        course ? (
                                            <ProfileDetails
                                                key={i}
                                                name={course.name}
                                                details={`${user.enrolledCourses[i].progress}% completed`}
                                                title={course.title}
                                                color={course.profileColor}
                                                image={course.profileImage}
                                            />
                                        ) : null
                                    )}
                                </div>
                            </>
                        )}

                        {/* Teacher */}
                        {user.role === "teacher" && (
                            <div>
                                <TeacherCharts user={user} />
                                <ul style={{ marginTop: 20 }}>
                                    {(user.teachingCourses || []).map((c) => (
                                        <li key={c.courseId}>
                                            {`Course ${c.courseId} – ${c.studentsEnrolled} students, ${c.lessonsCount} lessons`}{" "}
                                            {c.published ? "✅ Published" : "❌ Draft"}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Admin */}
                        {user.role === "admin" && (
                            <div>
                                <AdminCharts />
                                <ul style={{ marginTop: 20 }}>
                                    {coursesData.map((c) => (
                                        <li key={c.id}>
                                            {c.title} – {c.lessons.length} lessons
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                );

            case "students":
                if (user.role === "teacher" || user.role === "admin") {
                    const students = fakeDB.users.filter((u) => u.role === "student");
                    return (
                        <div>
                            <h2 style={{ marginBottom: 16 }}>Students</h2>
                            <StudentsChart students={students} />
                            <ul style={{ marginTop: 20 }}>
                                {students.map((s) => (
                                    <li key={s.userId}>
                                        <strong>{s.name}</strong> - {s.email} - {s.enrolledCourses?.length || 0} courses
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                }
                return <h2>Not authorized</h2>;

            case "teachers":
                if (user.role === "admin") {
                    const teachers = fakeDB.users.filter((u) => u.role === "teacher");
                    return (
                        <div>
                            <h2 style={{ marginBottom: 16 }}>Teachers</h2>
                            <AdminTeachersChart teachers={teachers} />
                            <ul style={{ marginTop: 20 }}>
                                {teachers.map((t) => (
                                    <li key={t.userId}>
                                        <strong>{t.name}</strong> - {t.email} - {t.teachingCourses?.length || 0} courses
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                }
                return <h2>Not authorized</h2>;

            case "account":
                return <AccountPage user={user} />;

            case "logout":
                handleLogout();
                return <h2>Logging out...</h2>;

            default:
                return <h2>Welcome {user.name}</h2>;
        }
    };

    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar */}
            <Sidebar user={user} onSelect={setSection} />

            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Header */}
                <header
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "18px 24px",
                        borderBottom: "1px solid #eee",
                        background: "#fff",
                    }}
                >
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <h2 style={{ margin: 0, fontFamily: "Arial, sans-serif", color: "#0A5EB0" }}>
                                Learnlan
                            </h2>
                        </Stack>
                    </Link>

                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ textAlign: "right", marginRight: 8 }}>
                            <div style={{ fontSize: 14, fontWeight: 700 }}>{user.name}</div>
                            <div style={{ fontSize: 12, color: "#666" }}>{user.email}</div>
                        </div>

                        <IconButton onClick={handleMenuOpen} style={{ outline: "none" }}>
                            <Avatar
                                src={user.profileImage || "/broken-image.jpg"}
                                alt={user.name}
                                sx={{ width: 40, height: 40 }}
                            />
                        </IconButton>

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            transformOrigin={{ vertical: "top", horizontal: "right" }}
                            PaperProps={{ elevation: 3, sx: { minWidth: 160 } }}
                            disableScrollLock
                        >
                            <MenuItem
                                onClick={() => {
                                    setSection("account");
                                    handleMenuClose();
                                }}
                            >
                                Profile
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
                    </div>
                </header>

                {/* Main content */}
                <main style={{ display: "flex", gap: 24, padding: 24 }}>
                    <section style={{ flex: 1 }}>{renderContent()}</section>

                    {/* Calendar */}
                    <aside style={{ width: 300, padding: 16, borderRadius: 8 }}>
                        <div style={{ marginBottom: 12, fontWeight: 700 }}>My Calendar</div>
                        <Calendar
                            onChange={setDate}
                            value={date}
                            prevLabel="<"
                            nextLabel=">"
                            tileClassName={({ date: tileDate, view }) => {
                                const today = new Date().toDateString() === tileDate.toDateString();
                                if (view === "month") {
                                    if (today) return "today";
                                    if (isVisited(tileDate)) return "visited-day";
                                }
                                return null;
                            }}
                        />
                        <div style={{ marginTop: 8 }}>
                            <strong>Selected:</strong> {date.toDateString()}
                        </div>
                    </aside>
                </main>
            </div>
        </div>
    );
};

export default Profile;
