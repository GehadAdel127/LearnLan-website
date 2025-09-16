import { Container, Grid, Typography } from "@mui/material";
import { useCourses } from "../Context/CoursesContext";
import AnimatedSection from "../components/AnimatedSection";
import CourseCard from "../components/CourseCard";

const SavedCourses = () => {
    const { savedCourses } = useCourses();

    return (
        <Container sx={{ padding: "50px 20px" }}>
            <Typography variant="h4" gutterBottom>
                Saved Courses
            </Typography>

            {savedCourses.length === 0 ? (
                <Typography variant="body1">You haven’t saved any courses yet.</Typography>
            ) : (
                <Grid container spacing={3} direction="column">
                    {savedCourses.map((course, index) => (
                        <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={course.id}  >
                            <AnimatedSection animationClass="fadeInUp" delay={`${index * 0.2}s`}>
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
