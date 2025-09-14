// fakeDB.js

export const fakeDB = {
    users: [
        // ==================== STUDENT ====================
        {
            userId: 1,
            name: "Ali Hassan",
            email: "ali@example.com",
            password: "student123",
            role: "student",
            profileImage: "/avatars/ali.png",
            enrolledCourses: [
                {
                    courseId: 1, // Beginner's Arabic
                    progress: 40, // % completed
                    completedLessons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    certificateEarned: false
                },
                {
                    courseId: 3, // Advanced English: Academic Writing
                    progress: 10,
                    completedLessons: [1, 2, 3, 4],
                    certificateEarned: false
                }
            ]
        },

        // ==================== TEACHER ====================
        {
            userId: 2,
            name: "Maria Lopez",
            email: "maria@example.com",
            password: "teacher123",
            role: "teacher",
            profileImage: "/avatars/maria.png",
            teachingCourses: [
                {
                    courseId: 5, // Intermediate Spanish
                    studentsEnrolled: 120,
                    lessonsCount: 20,
                    published: true
                },
                {
                    courseId: 7, // French for Everyday Life
                    studentsEnrolled: 85,
                    lessonsCount: 18,
                    published: true
                }
            ]
        },

        // ==================== ADMIN ====================
        {
            userId: 3,
            name: "Admin User",
            email: "admin@example.com",
            password: "admin123",
            role: "admin",
            profileImage: "/avatars/admin.png",
            permissions: ["manage_users", "manage_courses", "view_reports"]
        }
    ]
};

// ==================== AUTH SERVICES ====================

export const loginService = async (email, password) => {
    const user = fakeDB.users.find((u) => u.email === email && u.password === password);
    if (!user) throw new Error("Invalid email or password!");
    return user;
};

export const registerService = async (name, email, password, profileImage, role) => {
    const exists = fakeDB.users.find((u) => u.email === email);
    if (exists) throw new Error("User already exists");

    const newUser = {
        userId: fakeDB.users.length + 1,
        name,
        email,
        password,
        role,
        profileImage,
        enrolledCourses: role === "student" ? [] : undefined,
        teachingCourses: role === "teacher" ? [] : undefined,
        permissions: role === "admin" ? ["manage_users", "manage_courses"] : undefined
    };

    fakeDB.users.push(newUser);
    return newUser;
};

export default fakeDB;
