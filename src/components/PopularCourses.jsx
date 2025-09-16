import { Link } from "react-router-dom";
import English from "../assets/images/studentgirl.jpg";
import Arabic from "../assets/images/studentgirl2.jpg";
import Spanish from "../assets/images/studentgirl3.jpg";

// MUI icons
import { useTheme } from "@emotion/react";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CourseCard from "./CourseCard";

// custom hook
import { useState } from "react"; // Keep useState if you're using it for local state (like 'cart' here)
import { useCourses } from "../Context/CoursesContext"; // Import useCourses for context functions
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

    // Destructure functions from context, as CourseCard directly uses them
    const { savedCourses, toggleSaveCourse, addToCart } = useCourses();

    // The local 'cart' state and related handlers are likely redundant
    // if 'useCourses' context already manages the global cart state and 'addToCart' function.
    // CourseCard component will use the 'addToCart' from context directly.
    // I'm keeping this for now but flagging it as a potential area for simplification.
    const [cart, setCart] = useState([]); // This local state is not used by CourseCard directly

    // These local handlers are also likely not used if CourseCard uses context functions directly.
    // I'm modifying them to pass the full course object, which is what context functions typically expect.
    const handleSaveCourse = (course) => {
        toggleSaveCourse(course); // Use the context function
    };

    const handleAddToCart = (course) => {
        addToCart(course); // Use the context function
    };

    return (
        <section className="PopularCourses" style={{ padding: "20px" }}>
            <div className="headerSection" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", flexWrap: "wrap", marginBottom: "20px" }}> {/* Added flexWrap for responsiveness */}
                <h2>Our Popular Courses</h2>
                <div className="linkWithIcon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Link to="/courses" style={{ fontWeight: "500", color: theme.palette.primary.main }}>Explore Courses</Link>
                    <ChevronRightOutlinedIcon style={{ color: theme.palette.primary.main, fontWeight: "400" }} />
                </div>
            </div>
            <AnimatedSection animationClass="fadeInDown">
                <div
                    className="cards"
                    style={{
                        display: "grid", // Changed from flex to grid
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", // Fixed card width
                        gap: "20px", // Maintained gap
                        justifyItems: "center", // Center cards horizontally within their grid cells
                        width: "100%",
                        boxSizing: "border-box", // Ensure padding is included in the width
                        // Optional: Add some horizontal padding if you want space from the PopularCourses section's edges
                        // padding: "0 10px"
                    }}
                >
                    {coursesData.map((course, index) => (
                        <AnimatedSection key={course.id} animationClass="fadeInUp" delay={`${index * 0.3}s`}>
                            <CourseCard
                                id={course.id}
                                name={course.name}
                                title={course.title}
                                image={course.image}
                                price={course.price}
                                rate={course.rate}
                                numberOfStudents={course.numberOfStudents}
                                numberOfLessons={course.numberOfLessons}
                            // The isSaved and isInCart props are determined within CourseCard
                            // using `useCourses` context, so they don't need to be passed here.
                            // If you wanted to use the local handlers you defined above:
                            // onSaveCourse={() => handleSaveCourse(course)}
                            // onAddToCart={() => handleAddToCart(course)}
                            />
                        </AnimatedSection>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
};

export default PopularCourses;