import { useTheme } from "@emotion/react";
import image1 from "../assets/images/Globalization.jpeg";
import image3 from "../assets/images/Learninglanguages (1).jpeg";
import image2 from "../assets/images/Learninglanguages.jpeg";
import image4 from "../assets/images/timeManagement.jpeg";

// external imports
import CompentesHeader from "./CompentesHeader";
import StartCard from "./StartCard";

// custom hook
import AnimatedSection from '../components/AnimatedSection';

const steps = [
    {
        id: 1,
        title: "Tell us about yourself",
        description: "Let us know about your learning style, what your current course-name level is and your goals for learning.",
        image: image1
    },
    {
        id: 2,
        title: "Get expertly matched",
        description: "Our class coordinator will pair you up with your perfect tutor based on your profile and preferences.",
        image: image2
    },
    {
        id: 3,
        title: "Take a free 30 min trial lesson",
        description: "Get familiar with your tutor and experience what it's like to learn with Live webinar.",
        image: image3
    },
    {
        id: 4,
        title: "Schedule future lessons",
        description: "Use your online calendar to pick dates and times that suit you for future classes.",
        image: image4
    }
];

const Start = () => {
    const theme = useTheme();

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%" }}>
            <CompentesHeader title="Simple steps" head="Start Your Learning Journey" />
            <AnimatedSection animationClass="fadeInUp" delay="0.2s" >
                <div
                    className="cards"
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "30px",
                        padding: "0 50px"
                    }}
                >
                    {steps.map((step, index) => (
                        <StartCard
                            key={step.id}
                            title={step.title}
                            description={step.description}
                            image={step.image}
                        />
                    ))}
                </div>
            </AnimatedSection>
        </div>
    );
};

export default Start;
