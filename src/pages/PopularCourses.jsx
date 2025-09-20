import { useTheme } from "@emotion/react";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { useCourses } from "../Context/CoursesContext";
import coursesData from "./CoursesData";

const PopularCourses = () => {
    const theme = useTheme();
    const { savedCourses, toggleSaveCourse, addToCart } = useCourses();

    return (
        <section className="PopularCourses" style={{ padding: "50px", paddingTop: "0px" }}>
            <div className="headerSection" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <h2>Our Popular Courses</h2>
                <div className="linkWithIcon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Link to="/courses" style={{ fontWeight: "500", color: theme.palette.primary.main }}>Explore Courses</Link>
                    <ChevronRightOutlinedIcon style={{ color: theme.palette.primary.main, fontWeight: "400" }} />
                </div>
            </div>

            <div className="cards" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexFlow: "wrap", width: "100%", gap: "20px" }}>
                {coursesData.slice(0, 3).map((course, index) => (
                        <CourseCard
                            {...course}
                            isSaved={savedCourses.includes(course.id)}
                            onSaveCourse={toggleSaveCourse}
                            onAddToCart={addToCart}
                        />
                ))}
            </div>
        </section>
    );
};

export default PopularCourses;
