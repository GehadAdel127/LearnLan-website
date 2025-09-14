// arabic
import arabic2 from "../assets/images/arabic (1).jpg";
import arabic3 from "../assets/images/arabic (2).jpg";
import arabic4 from "../assets/images/arabic (3).jpg";
import arabic5 from "../assets/images/arabic (4).jpg";
import arabic6 from "../assets/images/arabic (5).jpg";
import arabic1 from "../assets/images/arabic.jpg";
// english
import english2 from "../assets/images/english (1).jpg";
import english3 from "../assets/images/english (2).jpg";
import english4 from "../assets/images/english (3).jpg";
import english5 from "../assets/images/english (4).jpg";
import english6 from "../assets/images/english (5).jpg";
import english7 from "../assets/images/english (6).jpg";
import english1 from "../assets/images/english.jpg";
// spanish
import spanish2 from "../assets/images/spanish (1).jpg";
import spanish3 from "../assets/images/spanish (2).jpg";
import spanish4 from "../assets/images/spanish (3).jpg";
import spanish5 from "../assets/images/spanish (4).jpg";
import spanish6 from "../assets/images/spanish (5).jpg";
import spanish7 from "../assets/images/spanish (6).jpg";
import spanish1 from "../assets/images/spanish.jpg";


import image from "../assets/images/Monitor-cuate.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

const images = {
    arabic: [
        arabic1,
        arabic2,
        arabic3,
        arabic4,
        arabic5,
        arabic6
    ],
    english: [
        english1,
        english2,
        english3,
        english4,
        english5,
        english6,
        english7
    ],
    spanish: [
        spanish1,
        spanish2,
        spanish3,
        spanish4,
        spanish5,
        spanish6,
        spanish7
    ]
};
const coursesData = [
    // ---------------- Arabic Courses ----------------
    {
        id: 1,
        title: "Beginner's Arabic: The Basics",
        image: images.arabic[1],
        price: "49.99",
        numberOfStudents: 1500,
        rate: 4.8,
        numberOfLessons: 30,
        duration: "15 hours",
        level: "Beginner",
        skills: ["Alphabet", "Basic Grammar", "Greetings", "Daily Vocabulary"],
        certificate: true,
        name: "Arabic",
        profileImage: image,
        profileColor: "#906fcc3a",
        lessons: Array.from({ length: 30 }, (_, i) => ({
            lessonId: i + 1,
            lessonTitle: `Lesson ${i + 1} - Arabic Basics`,
            description: `Detailed explanation and practice material for Arabic lesson ${i + 1}.`,
            videoUrl: `https://www.youtube.com/embed/arabic${i + 1}`,
            resources: [`arabic-lesson-${i + 1}.pdf`]
        }))
    },
    {
        id: 2,
        title: "Arabic for Travel and Tourism",
        image: images.arabic[2],
        price: "59.99",
        numberOfStudents: 1200,
        rate: 4.7,
        numberOfLessons: 25,
        duration: "12 hours",
        level: "Intermediate",
        skills: ["Travel Phrases", "Directions", "Culture", "Hotel & Food"],
        certificate: true,
        name: "Arabic",
        profileImage: image,
        profileColor: "#906fcc3a",
        lessons: Array.from({ length: 25 }, (_, i) => ({
            lessonId: i + 1,
            lessonTitle: `Lesson ${i + 1} - Travel Arabic`,
            description: `Essential phrases and dialogues for travelers in Arabic-speaking countries (lesson ${i + 1}).`,
            videoUrl: `https://www.youtube.com/embed/arabicTravel${i + 1}`,
            resources: [`arabic-travel-${i + 1}.pdf`]
        }))
    },

    // ---------------- English Courses ----------------
    {
        id: 3,
        title: "Advanced English: Academic Writing",
        image: images.english[1],
        price: "59.99",
        numberOfStudents: 2100,
        rate: 4.9,
        numberOfLessons: 45,
        duration: "25 hours",
        level: "Advanced",
        skills: ["Essay Writing", "Research", "Academic Style", "Citations"],
        certificate: true,
        name: "English",
        profileImage: image2,
        profileColor: "#ca90d43b",
        lessons: Array.from({ length: 45 }, (_, i) => ({
            lessonId: i + 1,
            lessonTitle: `Lesson ${i + 1} - Academic Writing`,
            description: `Comprehensive coverage of academic writing strategies in lesson ${i + 1}.`,
            videoUrl: `https://www.youtube.com/embed/englishAcademic${i + 1}`,
            resources: [`english-writing-${i + 1}.pdf`]
        }))
    },
    {
        id: 4,
        title: "Business English Communication",
        image: images.english[2],
        price: "39.99",
        numberOfStudents: 1800,
        rate: 4.6,
        numberOfLessons: 20,
        duration: "10 hours",
        level: "Intermediate",
        skills: ["Meetings", "Emails", "Presentations", "Negotiations"],
        certificate: true,
        name: "English",
        profileImage: image2,
        profileColor: "#ca90d43b",
        lessons: Array.from({ length: 20 }, (_, i) => ({
            lessonId: i + 1,
            lessonTitle: `Lesson ${i + 1} - Business English`,
            description: `Business-oriented phrases, formal tone, and real-life scenarios (lesson ${i + 1}).`,
            videoUrl: `https://www.youtube.com/embed/businessEnglish${i + 1}`,
            resources: [`business-english-${i + 1}.pdf`]
        }))
    },

    // ---------------- Spanish Courses ----------------
    {
        id: 5,
        title: "Intermediate Spanish: Daily Conversation",
        image: images.spanish[1],
        price: "39.99",
        numberOfStudents: 950,
        rate: 4.7,
        numberOfLessons: 20,
        duration: "10 hours",
        level: "Intermediate",
        skills: ["Conversation", "Daily Phrases", "Listening", "Culture"],
        certificate: false,
        name: "Spanish",
        profileImage: image3,
        profileColor: "#ff81ad34",
        lessons: Array.from({ length: 20 }, (_, i) => ({
            lessonId: i + 1,
            lessonTitle: `Lesson ${i + 1} - Spanish Conversation`,
            description: `Interactive conversational practice in Spanish (lesson ${i + 1}).`,
            videoUrl: `https://www.youtube.com/embed/spanishConversation${i + 1}`,
            resources: [`spanish-conversation-${i + 1}.pdf`]
        }))
    },
    {
        id: 6,
        title: "Spanish for Beginners",
        image: images.spanish[2],
        price: "29.99",
        numberOfStudents: 1400,
        rate: 4.5,
        numberOfLessons: 15,
        duration: "8 hours",
        level: "Beginner",
        skills: ["Alphabet", "Numbers", "Basic Vocabulary", "Simple Sentences"],
        certificate: true,
        name: "Spanish",
        profileImage: image3,
        profileColor: "#ff81ad34",
        lessons: Array.from({ length: 15 }, (_, i) => ({
            lessonId: i + 1,
            lessonTitle: `Lesson ${i + 1} - Spanish Basics`,
            description: `Foundation of Spanish for complete beginners (lesson ${i + 1}).`,
            videoUrl: `https://www.youtube.com/embed/spanishBasic${i + 1}`,
            resources: [`spanish-beginners-${i + 1}.pdf`]
        }))
    },

    // ---------------- New: French Courses ----------------
    {
        id: 7,
        title: "French for Everyday Life",
        image: images.spanish[3], // placeholder image
        price: "44.99",
        numberOfStudents: 800,
        rate: 4.6,
        numberOfLessons: 18,
        duration: "9 hours",
        level: "Beginner",
        skills: ["Greetings", "Food", "Directions", "Daily Vocabulary"],
        certificate: true,
        name: "French",
        profileImage: image,
        profileColor: "#6fc3903a",
        lessons: Array.from({ length: 18 }, (_, i) => ({
            lessonId: i + 1,
            lessonTitle: `Lesson ${i + 1} - French Basics`,
            description: `Useful everyday French phrases (lesson ${i + 1}).`,
            videoUrl: `https://www.youtube.com/embed/frenchBasic${i + 1}`,
            resources: [`french-lesson-${i + 1}.pdf`]
        }))
    },

    // ---------------- New: German Courses ----------------
    {
        id: 8,
        title: "German for Beginners",
        image: images.spanish[4], // placeholder image
        price: "34.99",
        numberOfStudents: 700,
        rate: 4.4,
        numberOfLessons: 16,
        duration: "7 hours",
        level: "Beginner",
        skills: ["Alphabet", "Numbers", "Introductions", "Daily Vocabulary"],
        certificate: true,
        name: "German",
        profileImage: image2,
        profileColor: "#90c3ff3a",
        lessons: Array.from({ length: 16 }, (_, i) => ({
            lessonId: i + 1,
            lessonTitle: `Lesson ${i + 1} - German Basics`,
            description: `Foundational German vocabulary and pronunciation (lesson ${i + 1}).`,
            videoUrl: `https://www.youtube.com/embed/germanBasic${i + 1}`,
            resources: [`german-lesson-${i + 1}.pdf`]
        }))
    }
]

export default coursesData