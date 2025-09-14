// src/components/StudentsChart.jsx
import { Box, Typography, useTheme } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const StudentsChart = ({ students }) => {
    const theme = useTheme()
    // Prepare series data
    const studentNames = students.map((s) => s.name);
    const coursesSeries = students.map((s) => s.enrolledCourses?.length || 0);
    const progressSeries = students.map(
        (s) =>
            s.enrolledCourses?.reduce((sum, c) => sum + (c.progress || 0), 0) /
            (s.enrolledCourses?.length || 1) || 0
    );

    const series = [
        { data: coursesSeries, label: "Courses Enrolled" },
        { data: progressSeries, label: "Average Progress (%)" },
    ];

    return (
        <Box sx={{ width: "100%", height: 350 }}>
            <Typography variant="h6" gutterBottom>
                Students Overview
            </Typography>
            <BarChart
                series={series}
                colors={[
                    theme.palette.primary.main,
                    theme.palette.secondary.main,
                ]}
                categories={studentNames}
                spacing={0.3}
                height={300}
                margin={{ top: 20, right: 20, bottom: 60, left: 50 }}
            />
        </Box>
    );
};

export default StudentsChart;
