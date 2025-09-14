import fakeDB from "../Services/AuthServices";
import AdminCharts from "./AdminCharts";
import AdminStats from "./Adminstats";

const AdminDashboard = () => {
    const students = fakeDB.users.filter(u => u.role === "student").length;
    const teachers = fakeDB.users.filter(u => u.role === "teacher").length;

    return (
        <>
            <h2>Admin Dashboard</h2>
            <AdminStats />


            <div style={{ marginTop: "30px" }}>
                <AdminCharts />
            </div>
        </>
    );
};

export default AdminDashboard;
