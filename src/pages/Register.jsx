// src/pages/Register.jsx
import { useMediaQuery, useTheme } from "@mui/material";
import Form from "../components/Form";

const Register = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            <Form
                flexDirection={isSmall ? "column" : "row"}
                title1="Hello,"
                title2="Welcome"
                description="Hey, Welcome to your place"
                forget="false"
                sign="Sign Up"
                unsign="Sign in"
                unsignTitle="Do you have an account?"
                linkPath="/login"
                padding="0 50px 0 0"
                remember="true"
                nameInput="true"
                isSmall={isSmall}
            />
        </div>
    );
};

export default Register;
