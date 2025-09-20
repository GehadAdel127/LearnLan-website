// src/pages/Profile.jsx
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
    Avatar,
    Drawer,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link, useNavigate } from "react-router-dom";

import AdminDashboard from "../components/AdminDashboard";
import Sidebar from "../components/profileSideBar";
import StudentDashboard from "../components/StudentDashboard";
import TeacherDashboard from "../components/TeacherDashboard";
import AccountPage from "./AccountPage";

import AdminCharts from "../components/AdminCharts";
import AdminTeachersChart from "../components/AdminTeacherCharts";
import AnimatedSection from "../components/AnimatedSection";
import ProfileDetails from "../components/ProfileDetails";
import StudentsChart from "../components/StudentsCharts";
import TeacherCharts from "../components/TeacherCharts";

import { useAuth } from "../Context/AuthContext";
import { useCourses } from "../Context/CoursesContext";
import fakeDB from "../Services/AuthServices";
import coursesData from "./CoursesData";
import TeacherCourseManager from "./CreateCourse";
import SavedCoursesSection from "./SavedCourses";

const Profile = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();
    const auth = useAuth();
    const { savedCourses, toggleSaveCourse, addToCart } = useCourses();

    const contextUser = auth?.user ?? null;
    const contextLogout = auth?.logout ?? null;

    const [user, setUser] = useState(null);
    const [section, setSection] = useState("dashboard");
    const [date, setDate] = useState(new Date());
    const [visitDates, setVisitDates] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);

    // Sidebar drawer toggle
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    // Load user
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
                console.error("Failed to parse currentUser", err);
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

    // Compute enrolled courses
    const enrolled = useMemo(() => {
        if (!user?.enrolledCourses) return [];
        return user.enrolledCourses.map((ec) =>
            coursesData.find((c) => c.id === ec.courseId)
        );
    }, [user]);

    if (!user) {
        return (
            <div style={{ padding: 40, textAlign: "center" }}>
                Loading profile...
            </div>
        );
    }

    // Renderer
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
                        <AnimatedSection animationClass="fadeInDown" delay="0.1s">
                            <h2 style={{ marginBottom: 16 }}>Courses</h2>
                        </AnimatedSection>

                        {user.role === "student" && (
                            <>
                                <AnimatedSection animationClass="fadeInUp" delay="0.2s">
                                    <TeacherCharts user={user} />
                                </AnimatedSection>

                                <div
                                    style={{
                                        marginTop: 20,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "15px",
                                    }}
                                >
                                    {enrolled.map((course, i) =>
                                        course ? (
                                            <AnimatedSection
                                                key={i}
                                                animationClass="fadeInUp"
                                                delay={`${0.3 + i * 0.2}s`}
                                            >
                                                <ProfileDetails
                                                    name={course.name}
                                                    details={`${user.enrolledCourses[i].progress}% completed`}
                                                    title={course.title}
                                                    color={course.profileColor}
                                                    image={course.profileImage}
                                                />
                                            </AnimatedSection>
                                        ) : null
                                    )}
                                </div>
                            </>
                        )}

                        {user.role === "teacher" && (
                            <div>
                                <AnimatedSection animationClass="fadeInUp" delay="0.2s">
                                    <TeacherCharts user={user} />
                                </AnimatedSection>

                                <ul style={{ marginTop: 20 }}>
                                    {(user.teachingCourses || []).map((c, i) => (
                                        <AnimatedSection
                                            key={c.courseId}
                                            animationClass="fadeInUp"
                                            delay={`${0.3 + i * 0.2}s`}
                                        >
                                            <li>
                                                {`Course ${c.courseId} – ${c.studentsEnrolled} students, ${c.lessonsCount} lessons`}{" "}
                                                {c.published ? "✅ Published" : "❌ Draft"}
                                            </li>
                                        </AnimatedSection>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {user.role === "admin" && (
                            <div>
                                <AnimatedSection animationClass="fadeInUp" delay="0.2s">
                                    <AdminCharts />
                                </AnimatedSection>

                                <ul style={{ marginTop: 20 }}>
                                    {coursesData.map((c, i) => (
                                        <AnimatedSection
                                            key={c.id}
                                            animationClass="fadeInUp"
                                            delay={`${0.3 + i * 0.2}s`}
                                        >
                                            <li>
                                                {c.title} – {c.lessons.length} lessons
                                            </li>
                                        </AnimatedSection>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                );


            case "savedCourses":
                const saved = coursesData.filter((c) => savedCourses.includes(c.id));
                return (
                    <SavedCoursesSection
                        savedCourses={saved}
                        onSaveCourse={toggleSaveCourse}
                        onAddToCart={addToCart}
                    />
                );

            case "createCourse":
                return <TeacherCourseManager />;

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
                                        <strong>{s.name}</strong> - {s.email} -{" "}
                                        {s.enrolledCourses?.length || 0} courses
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
                                        <strong>{t.name}</strong> - {t.email} -{" "}
                                        {t.teachingCourses?.length || 0} courses
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
        <div
            style={{
                display: "flex",
                minHeight: "100vh",
                flexDirection: isMobile ? "column" : "row",
            }}
        >
            {/* Sidebar - show drawer on mobile */}
            {!isMobile && <Sidebar user={user} onSelect={setSection} />}
            {isMobile && (
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <Sidebar
                        user={user}
                        onSelect={(s) => {
                            setSection(s);
                            setDrawerOpen(false);
                        }}
                    />
                </Drawer>
            )}

            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Header */}
                <header
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: isMobile ? "12px 16px" : "18px 24px",
                        borderBottom: "1px solid #eee",
                        background: theme.palette.background.paper,
                        flexWrap: "wrap",
                    }}
                >
                    <Stack direction="row" alignItems="center" spacing={1}>
                        {isMobile && (
                            <IconButton onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        )}
                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            <h2
                                style={{
                                    margin: 0,
                                    fontFamily: "Arial, sans-serif",
                                    fontSize: isMobile ? "18px" : "22px",
                                    color: "#213547ff"
                                }}
                            >
                                Learn<span style={{ color: theme.palette.primary.main }}>lan</span>
                            </h2>
                        </Link>
                    </Stack>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            marginTop: isMobile ? 8 : 0,
                            flexWrap: "wrap",
                        }}
                    >
                        <div style={{ textAlign: "right", marginRight: 8 }}>
                            <div style={{ fontSize: 14, fontWeight: 700 }}>{user.name}</div>
                            <div style={{ fontSize: 12, color: "#666" }}>{user.email}</div>
                        </div>

                        <IconButton onClick={handleMenuOpen} style={{ outline: "none" }}>
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

                    </div>
                </header>

                {/* Main content */}
                <main
                    style={{
                        display: "flex",
                        gap: 24,
                        padding: isMobile ? 12 : 24,
                        flexDirection: isMobile ? "column" : "row",
                    }}
                >
                    <section style={{ flex: 1 }}>{renderContent()}</section>

                    {/* Calendar */}
                    <aside
                        style={{
                            width: isMobile ? "100%" : 300,
                            padding: 16,
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            flexDirection: "column",
                            borderRadius: 8,
                        }}
                    >
                        <div style={{ marginBottom: 12, fontWeight: 700 }}>My Calendar</div>
                        <Calendar
                            className="custom-calendar"
                            onChange={setDate}
                            value={date}
                            prevLabel="<"
                            nextLabel=">"
                            tileClassName={({ date: tileDate, view }) => {
                                const today =
                                    new Date().toDateString() === tileDate.toDateString();
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
