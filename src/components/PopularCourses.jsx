import { Link } from "react-router-dom";
import English from "../assets/images/studentgirl.jpg";
import Arabic from "../assets/images/studentgirl2.jpg";
import Spanish from "../assets/images/studentgirl3.jpg";

// MUI icons 
import { useTheme } from "@emotion/react";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CourseCard from "./CourseCard";

// custom hook
import { useState } from "react";
import { useCourses } from "../Context/CoursesContext";
import AnimatedSection from './AnimatedSection';


const PopularCourses = () => {
    const theme = useTheme();

    const coursesData = [
        {
            id: 1,
            title: "Beginner's Arabic",
            image: Arabic,
            price: "49.99",
            numberOfStudents: 1500,
            rate: 4.8,
            numberOfLessons: 30,
            name: "Arabic"
        },
        {
            id: 2,
            title: "Advanced English",
            image: English,
            price: "59.99",
            numberOfStudents: 2100,
            rate: 4.9,
            numberOfLessons: 45,
            name: "English"
        },
        {
            id: 3,
            title: "Intermediate Spanish",
            image: Spanish,
            price: "39.99",
            numberOfStudents: 950,
            rate: 4.7,
            numberOfLessons: 20,
            name: "Spanish"
        }
    ];

    const { savedCourses, toggleSaveCourse, addToCart } = useCourses();

    const [cart, setCart] = useState([]);

    const handleSaveCourse = (id) => {
        setSavedCourses((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
        );
    };

    const handleAddToCart = (id) => {
        setCart((prev) =>
            prev.includes(id) ? prev : [...prev, id]
        );
    };

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
                {coursesData.map((course, index) => (
                    <AnimatedSection key={course.id} animationClass="fadeInUp" delay={`${index * 0.1}s`}>
                        <CourseCard
                            id={course.id}
                            name={course.name}
                            title={course.title}
                            image={course.image}
                            price={course.price}
                            rate={course.rate}
                            numberOfStudents={course.numberOfStudents}
                            numberOfLessons={course.numberOfLessons}
                            isSaved={savedCourses.includes(course.id)}
                            onSaveCourse={handleSaveCourse}
                            onAddToCart={handleAddToCart}
                        />

                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
};

export default PopularCourses;
