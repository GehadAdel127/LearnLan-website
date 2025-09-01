import { Link } from "react-router-dom";
import English from "../assets/images/studentgirl.jpg";
import Arabic from "../assets/images/studentgirl2.jpg";
import Spanish from "../assets/images/studentgirl3.jpg";

// MUI icons 
import { useTheme } from "@emotion/react";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CourseCard from "./CourseCard";
const CoursesCards = () => {
    const theme = useTheme()


    const coursesData = [
        {
            id: 1,
            title: "Beginner's Arabic",
            image: Arabic,
            price: "49.99",
            numberOfStudents: 1500,
            rate: 4.8,
            numberOfLessons: 30,
        },
        {
            id: 2,
            title: "Advanced English",
            image: English,
            price: "59.99",
            numberOfStudents: 2100,
            rate: 4.9,
            numberOfLessons: 45,
        },
        {
            id: 3,
            title: "Intermediate Spanish",
            image: Spanish,
            price: "39.99",
            numberOfStudents: 950,
            rate: 4.7,
            numberOfLessons: 20,
        }
    ];

    return (
        <section className="coursesCards" style={{ padding: "50px", paddingTop: "0px" }}>
            <div className="headerSection" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <h2>Our Popular Courses</h2>
                <div className="linkWithIcon" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Link to="/courses" style={{ fontWeight: "500", color: theme.palette.primary.main }}>Explore Courses</Link>
                    <ChevronRightOutlinedIcon style={{ color: theme.palette.primary.main, fontWeight: "400" }} />
                </div>
            </div>
            <div className="cards animate__animated animate__fadeInDown" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexFlow: "wrap", width: "100%", gap: "100px" }}>
                {coursesData.map((course, index) => (
                    <CourseCard
                        key={course.id}
                        image={course.image}
                        title={course.title}
                        price={course.price}
                        rate={course.rate}
                        numberOfLessons={course.numberOfLessons}
                        numberOfStudents={course.numberOfStudents}
                        animationDelay={`${index * 0.3}s`}
                    />
                ))}
            </div>
        </section>
    )
}

export default CoursesCards