import { useTheme } from "@mui/material/styles";
import { PieChart } from "@mui/x-charts/PieChart";
import fakeDB from "../Services/AuthServices";

const AdminCharts = () => {
    const theme = useTheme();

    const totalStudents = fakeDB.users.filter(u => u.role === "student").length;
    const totalTeachers = fakeDB.users.filter(u => u.role === "teacher").length;

    const data = [
        { label: "Students", value: totalStudents },
        { label: "Teachers", value: totalTeachers },
    ];

    return (
        <PieChart
            series={[{ data }]}
            colors={[
                theme.palette.primary.main,
                theme.palette.secondary.main,
                theme.palette.background.default,
            ]}
            height={300}
            width={400}
        />
    );
};

export default AdminCharts;
