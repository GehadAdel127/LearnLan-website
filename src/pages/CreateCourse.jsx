// components/TeacherCourseManager.jsx
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";

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
        <Box sx={{ mt: 5, p: 3, border: "1px solid #ccc", borderRadius: "10px" }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Manage Courses</Typography>
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <Button variant={mode === "newCourse" ? "contained" : "outlined"} onClick={() => setMode("newCourse")}>
                    Create New Course
                </Button>
                <Button variant={mode === "addLesson" ? "contained" : "outlined"} onClick={() => setMode("addLesson")}>
                    Add Lesson to Existing Course
                </Button>
            </Box>

            {mode === "newCourse" ? (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField label="Course Name" name="courseName" value={courseData.courseName} onChange={handleChange} />
                    <TextField
                        label="Intro Video URL"
                        name="videoUrl"
                        value={courseData.videoUrl}
                        onChange={handleChange}
                        placeholder="https://youtube.com/watch?v=..."
                    />
                    <TextField label="Description" name="description" value={courseData.description} onChange={handleChange} multiline rows={4} />
                    <TextField label="Price" name="price" value={courseData.price || ""} onChange={handleChange} />
                </Box>
            ) : (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        select
                        label="Select Course"
                        name="selectedCourse"
                        value={courseData.selectedCourse}
                        onChange={handleChange}
                    >
                        {existingCourses?.map((course) => (
                            <MenuItem key={course.id} value={course.name}>
                                {course.title}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField label="Lesson Title" name="lessonTitle" value={courseData.lessonTitle} onChange={handleChange} />
                    <TextField
                        label="Intro Video URL"
                        name="videoUrl"
                        value={courseData.videoUrl}
                        onChange={handleChange}
                        placeholder="https://youtube.com/watch?v=..."
                    />
                    <TextField label="Lesson Description" name="lessonDescription" value={courseData.lessonDescription || ""} onChange={handleChange} multiline rows={3} />
                </Box>
            )}

            <Button sx={{ mt: 3 }} variant="contained" onClick={handleSubmit}>
                {mode === "newCourse" ? "Create Course" : "Add Lesson"}
            </Button>
        </Box>
    );
};

export default TeacherCourseManager;
