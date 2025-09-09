import { useParams } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import LessonsCard from "../components/LessonsCard";
import coursesData from "./CoursesData";

const Lessons = () => {
    // Get the language from the URL. The route is set up to pass it as 'id'.
    const { name } = useParams();

    const filteredLessons = coursesData.find((c) => c.name.toLowerCase() === name.toLowerCase());

    // Handle the case where no courses are found for the specified language.
    if (!filteredLessons) {
        return (
            <div style={{ marginTop: "150px", padding: "50px", textAlign: "center" }}>
                <h2>No Courses Found</h2>
                <p>There are no courses available for this language.</p>
            </div>
        );
    }

    return (
        <div style={{ marginTop: "60px", padding: "50px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            <h2 style={{ width: "100%", textAlign: "center", marginBottom: "30px", fontSize: "2rem" }}>
                All {filteredLessons.name} Course Lessons
            </h2>
            {filteredLessons.lessons.map((lesson, index) => (
                <div style={{ width: "20%" }} key={lesson.lessonId}>
                    <AnimatedSection animationClass="fadeInDown" delay={`${index * 0.1}s`}>
                        <LessonsCard link={`/courses/${name}/${lesson.lessonId}`} title={filteredLessons.title} lessonTitle={lesson.lessonTitle} image={filteredLessons.image} description={lesson.description} />
                    </AnimatedSection>
                </div>
            ))}
        </div>
    );
};

export default Lessons;
