import image from "../assets/images/404 Error Page not Found with people connecting a plug-pana.svg";
import AnimatedSection from "../components/AnimatedSection";

const NotFound = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f9f9f9",
                padding: "20px",
            }}
        >
            <AnimatedSection animationClass="fadeInUp" delay="0.2s">
                <img
                    src={image}
                    alt="error 404"
                    style={{
                        maxWidth: "600px",
                        width: "100%",
                        height: "auto",
                    }}
                />
            </AnimatedSection>
        </div>
    );
};

export default NotFound;
