// src/components/AdminTeachersChart.jsx
import { useTheme } from "@mui/material/styles";
import { BarChart } from "@mui/x-charts/BarChart";

const AdminTeachersChart = ({ teachers }) => {
    const theme = useTheme();

    if (!teachers || teachers.length === 0) {
        return <p>No teachers available.</p>;
    }

    const teacherNames = teachers.map(t => t.name);
    const coursesData = teachers.map(t => t.teachingCourses?.length || 0);
    const studentsData = teachers.map(t =>
        t.teachingCourses?.reduce((sum, c) => sum + (c.studentsEnrolled || 0), 0) || 0
    );

    const series = [
        { data: coursesData, label: "Courses" },
        { data: studentsData, label: "Total Students" }
    ];

    return (
        <BarChart
            series={series}
            categories={teacherNames}
            height={350}
            spacing={0.3}
            colors={[theme.palette.primary.main, theme.palette.secondary.main]}
            margin={{ top: 20, right: 20, bottom: 80, left: 50 }}
        />
    );
};

export default AdminTeachersChart;
