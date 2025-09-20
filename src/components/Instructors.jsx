import { useTheme } from "@emotion/react";
import StartCard from "./StartCard";


// images
import image1 from "../assets/images/teacher1.png";
import image2 from "../assets/images/teacher2.png";
import image3 from "../assets/images/teacher3.png";
import image4 from "../assets/images/teacher4.png";
import CompentesHeader from "./CompentesHeader";

// custom hook
import { Box, Stack } from "@mui/material";
import AnimatedSection from '../components/AnimatedSection';


const polygonClipPath = 'polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)';
const instructorsDetails = [
    {
        id: 1,
        name: "Ghada",
        language: "Arabic",
        description: "Instructor",
        image: image1,
        bottom: "-100px",
        backgroundColor: "#0a5db01e",
        textAlign: "center",
        color: "#0A5EB0",
        polygonClipPath: polygonClipPath,
        fontSize: "18px"
    },
    {
        id: 2,
        name: "Nour",
        language: "English",
        description: "Instructor",
        image: image2,
        backgroundColor: "#f564aa18",
        textAlign: "center",
        color: "#F564A9",
        polygonClipPath: polygonClipPath,
        fontSize: "18px"
    },
    {
        id: 3,
        name: "Reem",
        language: "Spanish",
        description: "Instructor",
        image: image3,
        bottom: "-100px",
        backgroundColor: "#0a5db01e",
        textAlign: "center",
        color: "#0A5EB0",
        polygonClipPath: polygonClipPath,
        fontSize: "18px"
    },
    {
        id: 4,
        name: "Ahmad",
        language: "Chinese",
        description: "Instructor",
        image: image4,
        backgroundColor: "#f564aa18",
        textAlign: "center",
        color: "#F564A9",
        polygonClipPath: polygonClipPath,
        fontSize: "18px"
    }
];

const Instructors = () => {
    const theme = useTheme()
    return (
        <Box
            component="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                mt: { xs: 5, md: 9 },
                px: { xs: 2, sm: 3, md: 0 },
            }}
        >
            <CompentesHeader title="Our instructors" head="Meet the passionate team" />
            <AnimatedSection animationClass="fadeInUp" delay="0.2s">
                <Stack
                    className="cards"
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 3, md: 4 }}
                    sx={{
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: { xs: "nowrap", md: "wrap" },
                        mt: { xs: 3, md: 5 },
                        maxWidth: 'lg',
                    }}
                >
                    {instructorsDetails.map((instructorsDetail, index) => (
                        <StartCard
                            key={instructorsDetail.id}
                            title={instructorsDetail.name}
                            language={instructorsDetail.language}
                            description={instructorsDetail.description}
                            image={instructorsDetail.image}
                            backgroundColor={instructorsDetail.backgroundColor}
                            textAlign={instructorsDetail.textAlign}
                            color={instructorsDetail.color}
                            polygonClipPath={instructorsDetail.polygonClipPath}
                            fontSize={instructorsDetail.fontSize}
                            bottom={instructorsDetail.bottom}
                            instructorBackground={"transparent"} height={"450px"} />

                    ))}
                </Stack>
            </AnimatedSection>
        </Box>
    )
}

export default Instructors