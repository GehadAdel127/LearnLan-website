// components/TeacherCourseManager.jsx
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection"; // ✅ add animation

const TeacherCourseManager = ({ existingCourses = [] }) => {
    const [mode, setMode] = useState("newCourse");
    const [courseData, setCourseData] = useState({
        courseName: "",
        lessonTitle: "",
        description: "",
        selectedCourse: "",
    });

    const handleChange = (e) => {
        setCourseData({ ...courseData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (mode === "newCourse") {
            console.log("Creating course:", courseData);
        } else {
            console.log("Adding lesson to course:", courseData);
        }
    };

    return (
        <AnimatedSection animationClass="fadeInUp">
            <Box
                sx={{
                    mt: 5,
                    p: { xs: 3, md: 4 },
                    border: "1px solid #ccc",
                    borderRadius: "16px",
                    maxWidth: 700,
                    mx: "auto",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{ mb: 3, fontWeight: "600", textAlign: "center" }}
                >
                    Manage Courses
                </Typography>

                <Box sx={{ display: "flex", gap: 2, mb: 3, justifyContent: "center" }}>
                    <Button
                        variant={mode === "newCourse" ? "contained" : "outlined"}
                        onClick={() => setMode("newCourse")}
                    >
                        Create New Course
                    </Button>
                    <Button
                        variant={mode === "addLesson" ? "contained" : "outlined"}
                        onClick={() => setMode("addLesson")}
                    >
                        Add Lesson to Existing Course
                    </Button>
                </Box>

                {mode === "newCourse" ? (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <AnimatedSection animationClass="fadeInLeft" delay="0.1s">
                            <TextField
                                label="Course Name"
                                name="courseName"
                                value={courseData.courseName}
                                onChange={handleChange}
                                fullWidth
                            />
                        </AnimatedSection>

                        <AnimatedSection animationClass="fadeInRight" delay="0.2s">
                            <TextField
                                label="Intro Video URL"
                                name="videoUrl"
                                value={courseData.videoUrl || ""}
                                onChange={handleChange}
                                placeholder="https://youtube.com/watch?v=..."
                                fullWidth
                            />
                        </AnimatedSection>

                        <AnimatedSection animationClass="fadeInLeft" delay="0.3s">
                            <TextField
                                label="Description"
                                name="description"
                                value={courseData.description}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                fullWidth
                            />
                        </AnimatedSection>

                        <AnimatedSection animationClass="fadeInRight" delay="0.4s">
                            <TextField
                                label="Price"
                                name="price"
                                value={courseData.price || ""}
                                onChange={handleChange}
                                fullWidth
                            />
                        </AnimatedSection>
                    </Box>
                ) : (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <AnimatedSection animationClass="fadeInLeft" delay="0.1s">
                            <TextField
                                select
                                label="Select Course"
                                name="selectedCourse"
                                value={courseData.selectedCourse}
                                onChange={handleChange}
                                fullWidth
                            >
                                {existingCourses?.map((course) => (
                                    <MenuItem key={course.id} value={course.name}>
                                        {course.title}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </AnimatedSection>

                        <AnimatedSection animationClass="fadeInRight" delay="0.2s">
                            <TextField
                                label="Lesson Title"
                                name="lessonTitle"
                                value={courseData.lessonTitle}
                                onChange={handleChange}
                                fullWidth
                            />
                        </AnimatedSection>

                        <AnimatedSection animationClass="fadeInLeft" delay="0.3s">
                            <TextField
                                label="Intro Video URL"
                                name="videoUrl"
                                value={courseData.videoUrl || ""}
                                onChange={handleChange}
                                placeholder="https://youtube.com/watch?v=..."
                                fullWidth
                            />
                        </AnimatedSection>

                        <AnimatedSection animationClass="fadeInRight" delay="0.4s">
                            <TextField
                                label="Lesson Description"
                                name="lessonDescription"
                                value={courseData.lessonDescription || ""}
                                onChange={handleChange}
                                multiline
                                rows={3}
                                fullWidth
                            />
                        </AnimatedSection>
                    </Box>
                )}

                <AnimatedSection animationClass="fadeInUp" delay="0.5s">
                    <Button
                        sx={{ mt: 3 }}
                        variant="contained"
                        onClick={handleSubmit}
                        fullWidth
                    >
                        {mode === "newCourse" ? "Create Course" : "Add Lesson"}
                    </Button>
                </AnimatedSection>
            </Box>
        </AnimatedSection>
    );
};

export default TeacherCourseManager;
