import AnimatedSection from "../components/AnimatedSection";
import CourseCard from "../components/CourseCard";
// MUI
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, MenuItem, Select } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Pagination from "@mui/material/Pagination";
import Paper from '@mui/material/Paper';
import Stack from "@mui/material/Stack";

// hooks
import { useEffect, useState } from "react";

// data fetching
import { useTheme } from "@emotion/react";
import coursesData from "./CoursesData";

const Courses = () => {
    const theme = useTheme();
    const [pages, setPages] = useState(1);
    const [searchedCourse, setSearchedCourse] = useState("");
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [sortOption, setSortOption] = useState("default");

    const itemsPerPage = 10;
    const numberOfPages = Math.ceil(filteredCourses.length / itemsPerPage);

    useEffect(() => {
        let filtered = coursesData.filter((course) =>
            course.title.toLowerCase().includes(searchedCourse.toLowerCase())
        );

        // Sorting logic
        if (sortOption === "priceLowHigh") {
            filtered = [...filtered].sort((a, b) => a.price - b.price);
        } else if (sortOption === "priceHighLow") {
            filtered = [...filtered].sort((a, b) => b.price - a.price);
        } else if (sortOption === "ratingHighLow") {
            filtered = [...filtered].sort((a, b) => b.rate - a.rate);
        } else if (sortOption === "lessonsHighLow") {
            filtered = [...filtered].sort((a, b) => b.numberOfLessons - a.numberOfLessons);
        } else if (sortOption === "studentsHighLow") {
            filtered = [...filtered].sort((a, b) => b.numberOfStudents - a.numberOfStudents);
        }

        setFilteredCourses(filtered);
        setPages(1);
    }, [searchedCourse, sortOption]);

    const handleSearchChange = (event) => {
        setSearchedCourse(event.target.value);
    };

    const handlePagesChange = (event, value) => {
        setPages(value);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const displayCourses = filteredCourses.slice(
        (pages - 1) * itemsPerPage,
        pages * itemsPerPage
    );

    return (
        <section style={{ marginTop: "150px", padding: "50px" }}>
            <h2>Courses</h2>

            {/* Search & Sort Row */}
            <div style={{ display: "flex", gap: "20px", alignItems: "center", marginBottom: "20px" }}>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search For a course"
                        inputProps={{ 'aria-label': 'search For a course' }}
                        value={searchedCourse}
                        onChange={handleSearchChange}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>

                {/* Sorting Dropdown */}
                <FormControl sx={{ minWidth: 200 }}>
                    <Select value={sortOption} onChange={handleSortChange}>
                        <MenuItem value="default">Sort By:</MenuItem>
                        <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
                        <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
                        <MenuItem value="ratingHighLow">Rating: High to Low</MenuItem>
                        <MenuItem value="lessonsHighLow">Lessons: Most to Least</MenuItem>
                        <MenuItem value="studentsHighLow">Students: Most to Least</MenuItem>
                    </Select>
                </FormControl>
            </div>

            {/* Courses Grid */}
            <div
                className="cards"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexFlow: "wrap",
                    width: "100%",
                    gap: "50px",
                }}
            >
                {displayCourses.map((course, index) => (
                    <AnimatedSection
                        key={course.id}
                        animationClass="fadeInDown"
                        delay={`${index * 0.2}s`}
                    >
                        <CourseCard
                            id={course.id}
                            name={course.name}
                            image={course.image}
                            title={course.title}
                            price={course.price}
                            rate={course.rate}
                            numberOfLessons={course.numberOfLessons}
                            numberOfStudents={course.numberOfStudents}
                            animationDelay={`${index * 0.2}s`}
                        />
                    </AnimatedSection>
                ))}
            </div>

            {/* Pagination */}
            <Stack
                spacing={2}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginTop: "150px",
                }}
            >
                <Pagination
                    count={numberOfPages}
                    page={pages}
                    variant="outlined"
                    color="primary"
                    onChange={handlePagesChange}
                />
            </Stack>
        </section>
    );
};

export default Courses;
