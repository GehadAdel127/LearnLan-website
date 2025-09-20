// src/pages/Login.jsx
import { useMediaQuery, useTheme } from "@mui/material";
import Form from "../components/Form";

const Login = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Form
            flexDirection={isSmall ? "column" : "row-reverse"}
            title1="Hello,"
            title2="Welcome Back"
            description="Hey, Welcome back to your place"
            forget="true"
            sign="Sign in"
            unsign="Sign Up"
            unsignTitle="Don't have an account?"
            linkPath="/register"
            padding={isSmall ? "0" : "0 0 0 50px"}
            remember="true"
            isSmall={isSmall}
        />
    );
};

export default Login;
