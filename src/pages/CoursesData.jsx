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
    {
        id: 1,
        title: "Beginner's Arabic: The Basics",
        image: images.arabic[1],
        price: "49.99",
        numberOfStudents: 1500,
        rate: 4.8,
        numberOfLessons: 30,
    },
    {
        id: 2,
        title: "Advanced English: Academic Writing",
        image: images.english[1],
        price: "59.99",
        numberOfStudents: 2100,
        rate: 4.9,
        numberOfLessons: 45,
    },
    {
        id: 3,
        title: "Intermediate Spanish: Daily Conversation",
        image: images.spanish[1],
        price: "39.99",
        numberOfStudents: 950,
        rate: 4.7,
        numberOfLessons: 20,
    },
    {
        id: 4,
        title: "Mastering Arabic: Grammar & Syntax",
        image: images.arabic[2],
        price: "69.99",
        numberOfStudents: 1100,
        rate: 4.6,
        numberOfLessons: 50,
    },
    {
        id: 5,
        title: "English for Travel: Essential Phrases",
        image: images.english[2],
        price: "29.99",
        numberOfStudents: 3200,
        rate: 4.5,
        numberOfLessons: 15,
    },
    {
        id: 6,
        title: "Spanish for Business Professionals",
        image: images.spanish[2],
        price: "79.99",
        numberOfStudents: 650,
        rate: 4.9,
        numberOfLessons: 40,
    },
    {
        id: 7,
        title: "Arabic Calligraphy & Script",
        image: images.arabic[3],
        price: "34.99",
        numberOfStudents: 780,
        rate: 4.7,
        numberOfLessons: 25,
    },
    {
        id: 8,
        title: "English Public Speaking",
        image: images.english[3],
        price: "54.99",
        numberOfStudents: 1900,
        rate: 4.8,
        numberOfLessons: 35,
    },
    {
        id: 9,
        title: "Spanish Literature & Culture",
        image: images.spanish[3],
        price: "44.99",
        numberOfStudents: 450,
        rate: 4.9,
        numberOfLessons: 30,
    },
    {
        id: 10,
        title: "Conversational English: Fluency Practice",
        image: images.english[4],
        price: "49.99",
        numberOfStudents: 2500,
        rate: 4.8,
        numberOfLessons: 28,
    },
    {
        id: 11,
        title: "Arabic for Beginners: Reading & Writing",
        image: images.arabic[4],
        price: "39.99",
        numberOfStudents: 1800,
        rate: 4.7,
        numberOfLessons: 22,
    },
    {
        id: 12,
        title: "Advanced Spanish: Verb Conjugation",
        image: images.spanish[4],
        price: "64.99",
        numberOfStudents: 800,
        rate: 4.6,
        numberOfLessons: 38,
    },
    {
        id: 13,
        title: "English Pronunciation Workshop",
        image: images.english[5],
        price: "39.99",
        numberOfStudents: 1600,
        rate: 4.9,
        numberOfLessons: 20,
    },
    {
        id: 14,
        title: "Arabic Poetry and History",
        image: images.arabic[5],
        price: "49.99",
        numberOfStudents: 350,
        rate: 4.8,
        numberOfLessons: 32,
    },
    {
        id: 15,
        title: "Spanish for Healthcare Professionals",
        image: images.spanish[5],
        price: "89.99",
        numberOfStudents: 220,
        rate: 4.9,
        numberOfLessons: 45,
    },
    {
        id: 16,
        title: "Beginner's English: The Alphabet",
        image: images.english[6],
        price: "19.99",
        numberOfStudents: 4100,
        rate: 4.5,
        numberOfLessons: 10,
    },
    {
        id: 17,
        title: "Arabic for Kids: Fun & Games",
        image: images.arabic[1],
        price: "24.99",
        numberOfStudents: 980,
        rate: 4.7,
        numberOfLessons: 18,
    },
    {
        id: 18,
        title: "Intermediate English: Grammar & Vocabulary",
        image: images.english[0],
        price: "49.99",
        numberOfStudents: 1750,
        rate: 4.8,
        numberOfLessons: 30,
    },
    {
        id: 19,
        title: "Spanish for Beginners: A Quick Start",
        image: images.spanish[6],
        price: "29.99",
        numberOfStudents: 2900,
        rate: 4.6,
        numberOfLessons: 15,
    },
    {
        id: 20,
        title: "Advanced Arabic: Modern Arabic Media",
        image: images.arabic[0],
        price: "79.99",
        numberOfStudents: 550,
        rate: 4.9,
        numberOfLessons: 55,
    },
];
export default coursesData