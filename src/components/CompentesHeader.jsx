import { useTheme } from "@emotion/react";


// custom hook
import AnimatedSection from '../components/AnimatedSection';

const CompentesHeader = ({ title, head }) => {
    const theme = useTheme()
    return (
        <AnimatedSection animationClass="fadeInLeft">
            <section style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "0px" }}>
                <h4 style={{ color: theme.palette.primary.main }}>{title} </h4>
                <h2> {head} </h2>
            </section>
        </AnimatedSection>
    )
}

export default CompentesHeader
