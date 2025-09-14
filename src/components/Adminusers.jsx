import { Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import fakeDB from "../Services/AuthServices";

const AdminUsers = () => {
    return (
        <div style={{ marginTop: "30px" }}>
            <h3>👥 Teachers & Students</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {fakeDB.users.map((u) => (
                    <Link key={u.userId} to={`/profile/${u.userId}`} style={{ textDecoration: "none" }}>
                        <Card style={{ width: "200px", textAlign: "center" }}>
                            <CardContent>
                                <img src={u.profileImage} alt={u.name} width="80" height="80" style={{ borderRadius: "50%" }} />
                                <h4>{u.name}</h4>
                                <p>{u.role}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AdminUsers;
