import { useTheme } from "@emotion/react";
import TeacherCharts from "./TeacherCharts";

const TeacherDashboard = ({ user }) => {
    // Aggregate teacher info
    const theme = useTheme()
    const totalCourses = user.teachingCourses.length;
    const totalStudents = user.teachingCourses.reduce(
        (acc, c) => acc + c.studentsEnrolled,
        0
    );
    const totalLessons = user.teachingCourses.reduce(
        (acc, c) => acc + c.lessonsCount,
        0
    );

    return (
        <>
            <h2>Teacher Dashboard</h2>

            {/* Stats cards */}
            <div style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
                <div
                    style={{
                        flex: "1",
                        background: theme.palette.primary.main,
                        color: theme.palette.background.paper,
                        padding: "20px",
                        borderRadius: "12px",
                        textAlign: "center",
                    }}
                >
                    <h3>Total Courses</h3>
                    <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                        {totalCourses}
                    </p>
                </div>

                <div
                    style={{
                        flex: "1",
                        background: theme.palette.secondary.main,
                        color: "#fff",
                        padding: "20px",
                        borderRadius: "12px",
                        textAlign: "center",
                    }}
                >
                    <h3>Total Students</h3>
                    <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                        {totalStudents}
                    </p>
                </div>

                <div
                    style={{
                        flex: "1",
                        background: "#A6F1E0",
                        color: "#000",
                        padding: "20px",
                        borderRadius: "12px",
                        textAlign: "center",
                    }}
                >
                    <h3>Total Lessons</h3>
                    <p style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                        {totalLessons}
                    </p>
                </div>
            </div>

            {/* Chart */}
            <TeacherCharts user={user} />

            {/* Course List */}
            <h3 style={{ marginTop: "30px" }}>My Courses</h3>
            <ul>
                {user.teachingCourses.map((c, i) => (
                    <li key={i}>
                        Course {c.courseId} – {c.studentsEnrolled} students,{" "}
                        {c.lessonsCount} lessons{" "}
                        {c.published ? "✅ Published" : "⏳ Draft"}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TeacherDashboard;
