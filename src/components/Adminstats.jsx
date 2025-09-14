import { Card, CardContent } from "@mui/material";
import coursesData from "../pages/CoursesData";
import fakeDB from "../Services/AuthServices";

const AdminStats = () => {
    const totalCourses = coursesData.length;
    const totalLessons = coursesData.reduce((acc, c) => acc + c.lessons.length, 0);
    const totalStudents = fakeDB.users.filter((u) => u.role === "student").length;
    const totalTeachers = fakeDB.users.filter((u) => u.role === "teacher").length;

    // Assign fixed theme/profile colors per stat
    const stats = [
        { label: "Courses", value: totalCourses, color: "#0A5EB0" },      // Primary Blue
        { label: "Lessons", value: totalLessons, color: "#e96581ff" },    // Secondary Pink
        { label: "Students", value: totalStudents, color: "#A6F1E0" },    // Background2 Greenish
        { label: "Teachers", value: totalTeachers, color: "#FFD166" },    // Accent Yellow
    ];

    return (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {stats.map((stat, i) => (
                <Card
                    key={i}
                    style={{
                        flex: "1 1 200px",
                        textAlign: "center",
                        backgroundColor: stat.color,
                        color: "#fff",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                >
                    <CardContent>
                        <h3 style={{ margin: "0 0 10px 0" }}>{stat.label}</h3>
                        <p style={{ fontSize: "1.8rem", fontWeight: "bold", margin: 0 }}>
                            {stat.value}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default AdminStats;
