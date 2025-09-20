// src/pages/SavedCourses.jsx
import { Container, Grid, Typography } from "@mui/material";
import { useCourses } from "../Context/CoursesContext";
import AnimatedSection from "../components/AnimatedSection";
import CourseCard from "../components/CourseCard";

const SavedCourses = () => {
    const { savedCourses } = useCourses();

    return (
        <Container sx={{ padding: "50px 20px" }}>
            {/* Title animation */}
            <AnimatedSection animationClass="fadeInDown" delay="0.1s">
                <Typography variant="h4" gutterBottom>
                    Saved Courses
                </Typography>
            </AnimatedSection>

            {savedCourses.length === 0 ? (
                <AnimatedSection animationClass="fadeInUp" delay="0.2s">
                    <Typography variant="body1">
                        You haven’t saved any courses yet.
                    </Typography>
                </AnimatedSection>
            ) : (
                <Grid container spacing={3}>
                    {savedCourses.map((course, index) => (
                        <Grid key={course.id} size={{ xs: 12, sm: 6, md: 4 }}>
                            <AnimatedSection
                                animationClass="fadeInUp"
                                delay={`${index * 0.2 + 0.2}s`}
                            >
                                <CourseCard {...course} />
                            </AnimatedSection>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default SavedCourses;
