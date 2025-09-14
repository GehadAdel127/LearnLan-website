import { useTheme } from "@mui/material/styles";
import { BarChart } from "@mui/x-charts/BarChart";

const TeacherCharts = ({ user }) => {
    const theme = useTheme();

    if (!user.teachingCourses || user.teachingCourses.length === 0) {
        return <p>No courses uploaded yet.</p>;
    }

    const courseNames = user.teachingCourses.map(c => `Course ${c.courseId}`);
    const studentsData = user.teachingCourses.map(c => c.studentsEnrolled);

    const series = [
        { data: studentsData, label: "Students Enrolled" }
    ];

    return (
        <BarChart
            series={series}
            categories={courseNames}
            height={300}
            spacing={0.3}
            colors={[
                theme.palette.primary.main,
                theme.palette.secondary.main,
            ]}
            margin={{ top: 20, right: 20, bottom: 60, left: 50 }}
        />
    );
};

export default TeacherCharts;
