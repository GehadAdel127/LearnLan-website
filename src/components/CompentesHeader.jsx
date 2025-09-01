import { useTheme } from "@emotion/react"

const CompentesHeader = ({ title, head }) => {
    const theme = useTheme()
    return (
        <>
            <h4 style={{ color: theme.palette.primary.main }} className="animate__animated animate__fadeInLeft">{title} </h4>
            <h2 className="animate__animated animate__fadeInRight"> {head} </h2>
        </>
    )
}

export default CompentesHeader