// src/pages/ForgetPassword.jsx
import { useMediaQuery, useTheme } from "@mui/material";
import Form from "../components/Form";

const ForgetPassword = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md")); // true if screen < sm

    return (
        <Form
            flexDirection={isSmall ? "column" : "row-reverse"}
            title1="Set a New Password"
            description="Enter a new password for your account"
            sign="Submit"
            padding={isSmall ? "0" : "0 0 0 50px"} // remove padding on mobile for better centering
            isSmall={isSmall}
        />
    );
};

export default ForgetPassword;
