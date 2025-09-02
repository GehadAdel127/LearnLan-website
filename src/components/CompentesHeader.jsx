import { useTheme } from "@emotion/react";


// custom hook
import AnimatedSection from '../components/AnimatedSection';

const CompentesHeader = ({ title, head }) => {
    const theme = useTheme()
    return (
        <section style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "0px" }}>
            <AnimatedSection animationClass="fadeInLeft">
                <h4 style={{ color: theme.palette.primary.main }}>{title} </h4>
            </AnimatedSection>
            <AnimatedSection animationClass="fadeInRight">
                <h2> {head} </h2>
            </AnimatedSection>
        </section>
    )
}

export default CompentesHeader