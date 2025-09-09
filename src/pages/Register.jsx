import Form from "../components/Form"

const Register = () => {
    return (
        <div>
            <Form flexDirection="row" title1="Hello," title2="Welcome" description="Hey,Welcome to your place"
                forget="false" sign="Sign Up" unsign="Sign in" unsignTitle="Do you have an account?" linkPath="/login" padding="0 50px 0 0"
                remember="true" />
        </div>
    )
}

export default Register