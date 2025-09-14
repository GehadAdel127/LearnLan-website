import coursesData from "../pages/CoursesData";
import Charts from "./Charts";

const StudentDashboard = ({ user }) => {
    const enrolled = (user.enrolledCourses || []).map((ec) => {
        const course = coursesData.find((c) => c.id === ec.courseId);
        return {
            ...course,
            progress: ec.progress,
            completedLessons: ec.completedLessons,
        };
    });

    return (
        <>
            <h2>My Courses</h2>

            {/* Chart showing progress */}
            <Charts enrolledCourses={user.enrolledCourses} />

            {/* Course details as a list */}
            <ul style={{ marginTop: 20 }}>
                {enrolled.map((course) =>
                    course ? (
                        <li key={course.id} style={{ marginBottom: 10 }}>
                            <strong>{course.title}</strong> ({course.name}) –{" "}
                            {course.progress}% completed, {course.numberOfLessons} lessons
                        </li>
                    ) : null
                )}
            </ul>
        </>
    );
};

export default StudentDashboard;
