import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { markLessonAsWatched } from "../components/ProgressUtilies";
import fakeDB from "../Services/AuthServices";
import coursesData from "./CoursesData";

const LessonDetails = () => {
    const { name, lessonId } = useParams();
    const [playVideo, setPlayVideo] = useState(false);

    // Find course
    const course = coursesData.find(
        (c) => c.name.toLowerCase() === name.toLowerCase()
    );

    if (!course) {
        return <div style={{ marginTop: "100px", textAlign: "center" }}>Course not found</div>;
    }

    // Simulated logged-in user
    const currentUserId = 1;

    // Find lesson
    const lessonIndex = course.lessons.findIndex(
        (l) => String(l.lessonId) === String(lessonId)
    );
    if (lessonIndex === -1)
        return <div style={{ marginTop: "100px", textAlign: "center" }}>Lesson not found</div>;

    const lesson = course.lessons[lessonIndex];
    const previousLesson = course.lessons[lessonIndex - 1];
    const nextLesson = course.lessons[lessonIndex + 1];
    // 🔥 Mark as watched on visit
    useEffect(() => {
        markLessonAsWatched(
            currentUserId,
            course.courseId,
            lesson.lessonId,
            course.lessons.length
        );
        console.log("Updated user data:", fakeDB.users);
    }, [lesson.lessonId]);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginTop: "120px",
                padding: "30px",
            }}
        >
            {/* Lesson Title */}
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
                {lesson.lessonTitle}
            </h2>

            {/* Video Thumbnail / Player */}
            <div style={{ width: "80%", maxWidth: "900px", marginBottom: "30px" }}>
                {!playVideo ? (
                    <div
                        style={{
                            position: "relative",
                            cursor: "pointer",
                        }}
                        onClick={() => setPlayVideo(true)}
                    >
                        {/* Course Image as Thumbnail */}
                        <img
                            src={course.image}
                            alt={lesson.lessonTitle}
                            style={{
                                width: "100%",
                                borderRadius: "12px",
                            }}
                        />
                        {/* Play Button Overlay */}
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                background: "rgba(0, 0, 0, 0.6)",
                                borderRadius: "50%",
                                padding: "25px 35px",
                                color: "white",
                                fontSize: "2rem",
                            }}
                        >
                            ▶
                        </div>
                    </div>
                ) : (
                    <iframe
                        width="100%"
                        height="500"
                        src={lesson.videoUrl + "?autoplay=1"}
                        title={lesson.lessonTitle}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </div>

            {/* Description */}
            <p style={{ maxWidth: "800px", textAlign: "center", marginBottom: "30px" }}>
                {lesson.description}
            </p>

            {/* Resources */}
            {lesson.resources && lesson.resources.length > 0 && (
                <div style={{ marginBottom: "30px", width: "80%", maxWidth: "800px" }}>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>📂 Resources</h3>
                    <ul>
                        {lesson.resources.map((res, idx) => (
                            <li key={idx}>
                                <a
                                    href={`/resources/${res}`}
                                    download
                                    className="text-blue-500 underline"
                                >
                                    {res}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Navigation */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "70%",
                    marginTop: "40px",
                }}
            >
                {previousLesson ? (
                    <Link
                        to={`/courses/${name}/${previousLesson.lessonId}`}
                        className="text-blue-500 underline"
                    >
                        ← Previous: {previousLesson.lessonTitle}
                    </Link>
                ) : (
                    <span />
                )}

                {nextLesson ? (
                    <Link
                        to={`/courses/${name}/${nextLesson.lessonId}`}
                        className="text-blue-500 underline ml-auto"
                    >
                        Next: {nextLesson.lessonTitle} →
                    </Link>
                ) : (
                    <span />
                )}
            </div>

            {/* Back to Lessons */}
            <Link
                to={`/courses/${name}`}
                className="text-blue-500 underline mt-8 inline-block"
            >
                ⬅ Back to lessons
            </Link>
        </div>
    );
};

export default LessonDetails;
