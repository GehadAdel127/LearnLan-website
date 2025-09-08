import AnimatedSection from "../components/AnimatedSection";
import CourseCard from "../components/CourseCard";
// MUI
import SearchIcon from '@mui/icons-material/Search';
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
    const theme = useTheme()
    const [pages, setPages] = useState(1)
    const [searchedCourse, setSearchedCourse] = useState("")
    const [filteredcourses, setFilteredCourses] = useState([])
    const itemsPerPage = 10
    const numberOfPages = Math.ceil((filteredcourses.length) / itemsPerPage)

    useEffect(() => {
        const filtered = coursesData.filter((course) => {
            return course.title.toLowerCase().includes(searchedCourse.toLowerCase())
        })
        setFilteredCourses(filtered)
        setPages(1)
    }, [searchedCourse])
    const handleSearchChange = (event) => {
        setSearchedCourse(event.target.value)
    }
    const handlePagesChange = (event, value) => {
        setPages(value)
    }
    const displayCourses = filteredcourses.slice(
        (pages - 1) * itemsPerPage,
        pages * itemsPerPage
    )
    return (
        <section style={{ marginTop: "150px", padding: "50px" }}>
            <h2>Courses</h2>
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
            <div className="cards" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexFlow: "wrap", width: "100%", gap: "50px" }}>
                {displayCourses.map((course, index) => (
                    <AnimatedSection key={course.id} animationClass="fadeInDown" delay={`${index * 0.2}s`}>
                        <CourseCard
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
            <Stack spacing={2} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginTop: "150px" }}>
                <Pagination count={numberOfPages} page={pages}
                    variant="outlined" color="primary"
                    onChange={handlePagesChange} />
            </Stack>
        </section>
    )
}

export default Courses