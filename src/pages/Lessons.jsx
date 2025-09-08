import { useTheme } from "@emotion/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import { lessonsData } from "./CoursesData";

const Lessons = () => {
    // Get the language from the URL. The route is set up to pass it as 'id'.
    const { name } = useParams();
    const theme = useTheme();

    const filteredLessons = name ? lessonsData.filter((course) => {
        return course.name && course.name.toLowerCase() === name.toLowerCase();
    }) : [];

    // Handle the case where no courses are found for the specified language.
    if (filteredLessons.length === 0) {
        return (
            <div style={{ marginTop: "150px", padding: "50px", textAlign: "center" }}>
                <h2>No Courses Found</h2>
                <p>There are no courses available for this language.</p>
            </div>
        );
    }

    return (
        <div style={{ marginTop: "60px", padding: "50px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            <h2 style={{ width: "100%", textAlign: "center", marginBottom: "30px", fontSize: "2rem" }}>
                All Lessons
            </h2>
            {filteredLessons.map((lesson, index) => (
                <AnimatedSection key={lesson.id} animationClass="fadeInDown" delay={`${index * 0.2}s`}>
                    <Card
                        key={lesson.id}
                        style={{
                            width: "350px",
                            height: "320px",
                            border: "none",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                            borderRadius: "15px",
                            cursor: "pointer",
                            overflow: "hidden"
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="200"
                            image={lesson.image}
                            alt={lesson.title}
                            loading='lazy'
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                        <CardContent style={{ padding: "16px" }}>
                            <Typography
                                variant="body2"
                                style={{ color: theme.palette.primary.main, fontWeight: "bold" }}
                            >
                                Online
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                                style={{ fontWeight: "bold", marginTop: "8px" }}
                            >
                                {lesson.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </AnimatedSection>
            ))}
        </div>
    );
};

export default Lessons;
