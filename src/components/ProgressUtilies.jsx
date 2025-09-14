// progressUtils.js
import { fakeDB } from "../Services/AuthServices";

export const markLessonAsWatched = (userId, courseId, lessonId, totalLessons) => {
    const user = fakeDB.users.find((u) => u.userId === userId);
    if (!user) return;

    const course = user.enrolledCourses.find((c) => c.courseId === courseId);
    if (!course) return;

    if (!course.completedLessons.includes(lessonId)) {
        course.completedLessons.push(lessonId);
    }

    // Update progress %
    course.progress = Math.round(
        (course.completedLessons.length / totalLessons) * 100
    );

    // Certificate check
    if (course.progress === 100) {
        course.certificateEarned = true;
    }
};
