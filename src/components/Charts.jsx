import { useTheme } from "@mui/material/styles";
import { PieChart } from "@mui/x-charts/PieChart";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import coursesData from "../pages/CoursesData";

export default function Charts() {
    const { user } = useContext(AuthContext);
    const theme = useTheme();

    if (!user || user.role !== "student") {
        return <p>No progress data available</p>;
    }

    // Build chart data from enrolled courses
    const courseProgressData = user.enrolledCourses.map((enrolled) => {
        const course = coursesData.find((c) => c.id === enrolled.courseId);
        return {
            label: course ? course.name : `Course ${enrolled.courseId}`,
            value: enrolled.progress,
        };
    });

    const valueFormatter = (item) => `${item.value}%`;

    return (
        <PieChart
            series={[
                {
                    data: courseProgressData,
                    highlightScope: { fade: "global", highlight: "item" },
                    faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                    valueFormatter,
                },
            ]}
            // 🔹 Apply theme-based colors here
            colors={[
                theme.palette.primary.main,
                theme.palette.secondary.main,
                theme.palette.background2.main,
                "#8884d8", // fallback extra color
            ]}
            height={250}
            width={400}
        />
    );
}
