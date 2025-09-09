import Form from "../components/Form"

const Login = () => {
    return (
        <Form flexDirection="row-reverse" title1="Hello," title2="Welcome Back" description="Hey,Welcome back to your place"
            forget="true" sign="Sign in" unsign="Sign Up" unsignTitle="Don't have an account?" linkPath="/register" padding="0 0 0 50px" remember="true" />
    )
}

export default Login