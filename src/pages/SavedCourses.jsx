import { Box, Typography } from "@mui/material";
import CourseCard from "../components/CourseCard";

const SavedCoursesSection = ({ savedCourses, onSaveCourse, onAddToCart }) => {
    return (
        <Box sx={{ mt: 5 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Saved Courses</Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                {savedCourses.length ? (
                    savedCourses.map((course) => (
                        <CourseCard
                            key={course.id}
                            {...course}
                            isSaved={true}
                            onSaveCourse={onSaveCourse}
                            onAddToCart={onAddToCart}
                        />
                    ))
                ) : (
                    <Typography>No saved courses yet.</Typography>
                )}
            </Box>
        </Box>
    );
};

export default SavedCoursesSection;
