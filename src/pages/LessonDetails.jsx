import { Link, useParams } from "react-router-dom";
import LessonsCard from "../components/LessonsCard";
import coursesData from "./CoursesData";

const LessonDetails = () => {
    const { name, lessonId } = useParams();
    const course = coursesData.find(
        (c) => c.name.toLowerCase() === name.toLowerCase()
    );

    if (!course) {
        return <div>Course not found</div>;
    }
    const lessonIndex = course.lessons.findIndex(
        (l) => String(l.lessonId) === String(lessonId)
    );
    if (lessonIndex === -1) return <div>Lesson not found</div>;

    const lesson = course.lessons[lessonIndex];
    const previousLesson = course.lessons[lessonIndex - 1];
    const nextLesson = course.lessons[lessonIndex + 1];
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "150px", padding: "50px" }}>
            <LessonsCard
                title={course.title}
                lessonTitle={lesson.lessonTitle}
                image={course.image}
                description={lesson.description}
                height="500px"
                width="100%"
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "70%", marginTop: "50px" }}>
                {previousLesson ? (
                    <Link
                        to={`/courses/${name}/${previousLesson.lessonId}`}
                        className="text-blue-500 underline"
                    >
                        ← Previous: {previousLesson.lessonTitle}
                    </Link>
                ) : <span />}

                {nextLesson ? (
                    <Link
                        to={`/courses/${name}/${nextLesson.lessonId}`}
                        className="text-blue-500 underline ml-auto"
                    >
                        Next: {nextLesson.lessonTitle} →
                    </Link>
                ) : <span />}
            </div>
            <Link to={`/courses/${name}`} className="text-blue-500 underline mt-4 inline-block" style={{ textAlign: "left", marginTop: "50px" }}>
                Go back to lessons
            </Link>
        </div>
    );
};

export default LessonDetails;
