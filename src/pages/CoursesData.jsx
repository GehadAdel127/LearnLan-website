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
    {
        id: 1,
        title: "Beginner's Arabic: The Basics",
        image: images.arabic[1],
        price: "49.99",
        numberOfStudents: 1500,
        rate: 4.8,
        numberOfLessons: 30,
        name: "Arabic",
        profileImage: image,
        profileColor: "#906fcc3a",
        lessons: [
            { lessonId: 1, lessonTitle: "Introduction to the Arabic Alphabet", description: "Learn the 28 letters of the Arabic alphabet and their basic sounds. This is the foundation for all future lessons." },
            { lessonId: 2, lessonTitle: "Writing Alif, Baa, and Taa", description: "Practice the correct strokes and shapes for the first three letters." },
            { lessonId: 3, lessonTitle: "Short Vowels (Harakat)", description: "Understand and apply the short vowel markers (Fatha, Kasra, and Damma)." },
            { lessonId: 4, lessonTitle: "Numbers 1-10", description: "Master counting from one to ten in Arabic, with correct pronunciation." },
            { lessonId: 5, lessonTitle: "Greetings and Common Phrases", description: "Essential vocabulary for greetings, introductions, and everyday conversations." },
            { lessonId: 6, lessonTitle: "Plural Forms", description: "A simple introduction to forming plurals for nouns in Arabic." },
            { lessonId: 7, lessonTitle: "Basic Sentence Structure", description: "Learn how to construct simple sentences using a subject, verb, and object." },
            { lessonId: 8, lessonTitle: "Question Words", description: "Practice asking questions using 'who,' 'what,' 'where,' and 'when'." },
            { lessonId: 9, lessonTitle: "The Sun and Moon Letters", description: "An important grammar rule for understanding the definite article 'al-'." },
            { lessonId: 10, lessonTitle: "Daily Routine Vocabulary", description: "Words and phrases related to morning and evening routines." },
            { lessonId: 11, lessonTitle: "Days of the Week", description: "Learn and pronounce the days of the week in Arabic." },
            { lessonId: 12, lessonTitle: "Months of the Year", description: "Memorize the names of the months in Arabic." },
            { lessonId: 13, lessonTitle: "Telling Time", description: "How to tell time and ask 'what time is it?'" },
            { lessonId: 14, lessonTitle: "Family Members", description: "Vocabulary for talking about your family and relatives." },
            { lessonId: 15, lessonTitle: "Food and Drinks", description: "Learn common food items and how to order in a restaurant." },
            { lessonId: 16, lessonTitle: "Common Adjectives", description: "Build your vocabulary with descriptive words for people and things." },
            { lessonId: 17, lessonTitle: "Shopping Phrases", description: "Essential phrases for shopping and bargaining in the market." },
            { lessonId: 18, lessonTitle: "Health and Medical Phrases", description: "Basic vocabulary for describing how you feel and seeking medical help." },
            { lessonId: 19, lessonTitle: "Colors", description: "Identify and name various colors in Arabic." },
            { lessonId: 20, lessonTitle: "Animals", description: "Learn the names of common animals." },
            { lessonId: 21, lessonTitle: "Countries and Nationalities", description: "Discuss where you are from and your nationality." },
            { lessonId: 22, lessonTitle: "Professions", description: "Vocabulary for different jobs and careers." },
            { lessonId: 23, lessonTitle: "Transportation", description: "Phrases for getting around and using public transport." },
            { lessonId: 24, lessonTitle: "Hobbies and Interests", description: "Talk about your hobbies and things you enjoy doing." },
            { lessonId: 25, lessonTitle: "Weather and Seasons", description: "Learn to describe the weather and talk about the seasons." },
            { lessonId: 26, lessonTitle: "Technology Vocabulary", description: "Modern words for technology and devices." },
            { lessonId: 27, lessonTitle: "Cultural Norms and Etiquette", description: "An introduction to social rules in Arabic-speaking countries." },
            { lessonId: 28, lessonTitle: "Final Review and Assessment", description: "A comprehensive review of all course topics to test your knowledge." },
            { lessonId: 29, lessonTitle: "Mini-Conversation Practice", description: "Put all your skills to the test in a short conversational exercise." },
            { lessonId: 30, lessonTitle: "Course Summary and Next Steps", description: "A final overview and guidance on where to continue your learning journey." }
        ]
    },
    {
        id: 2,
        title: "Advanced English: Academic Writing",
        image: images.english[1],
        price: "59.99",
        numberOfStudents: 2100,
        rate: 4.9,
        numberOfLessons: 45,
        name: "English",
        profileImage: image2,
        profileColor: "#ca90d43b",
        lessons: [
            { lessonId: 1, lessonTitle: "Essay Structure and Outlining", description: "Master the classic essay structure: introduction, body paragraphs, and conclusion. Learn to create a powerful outline." },
            { lessonId: 2, lessonTitle: "Developing a Strong Thesis Statement", description: "Learn to formulate a clear, concise, and argumentative thesis statement that guides your entire paper." },
            { lessonId: 3, lessonTitle: "Academic Tone and Diction", description: "Explore the difference between formal and informal writing. Improve your vocabulary and professional tone." },
            { lessonId: 4, lessonTitle: "Integrating Sources and Citations", description: "Learn how to properly quote, paraphrase, and summarize external sources using APA or MLA style." },
            { lessonId: 5, lessonTitle: "Crafting a Compelling Introduction", description: "Techniques for writing an engaging introduction that hooks the reader and presents your thesis effectively." },
            { lessonId: 6, lessonTitle: "Writing a Strong Conclusion", description: "Strategies for summarizing your arguments and leaving a lasting impression on the reader." },
            { lessonId: 7, lessonTitle: "Using Transition Words and Phrases", description: "Create a logical flow between paragraphs and ideas with effective transition words." },
            { lessonId: 8, lessonTitle: "Identifying and Correcting Common Errors", description: "A deep dive into common grammar, syntax, and punctuation mistakes in academic writing." },
            { lessonId: 9, lessonTitle: "The Art of the Persuasive Essay", description: "Learn to build a strong argument and persuade your audience with evidence and logic." },
            { lessonId: 10, lessonTitle: "The Expository Essay", description: "Master the art of explaining a complex topic clearly and concisely." },
            { lessonId: 11, lessonTitle: "Writing a Research Paper", description: "Step-by-step guidance on how to plan, research, and write a full-length research paper." },
            { lessonId: 12, lessonTitle: "Peer Review and Self-Editing", description: "Develop critical skills to review and edit your own work and the work of others." },
            { lessonId: 13, lessonTitle: "Avoiding Plagiarism", description: "Understand what constitutes plagiarism and how to avoid it through proper citation." },
            { lessonId: 14, lessonTitle: "Argumentative vs. Persuasive Essays", description: "Explore the subtle differences and appropriate uses of these two essay types." },
            { lessonId: 15, lessonTitle: "Narrative Essay Writing", description: "Learn to tell a compelling story while still maintaining an academic structure." },
            { lessonId: 16, lessonTitle: "Cause and Effect Essays", description: "Practice writing essays that analyze the causes and effects of an event or phenomenon." },
            { lessonId: 17, lessonTitle: "Compare and Contrast Essays", description: "Techniques for effectively comparing and contrasting two or more subjects." },
            { lessonId: 18, lessonTitle: "Using Formal and Informal Language", description: "Distinguish between language appropriate for academic, professional, and casual settings." },
            { lessonId: 19, lessonTitle: "Sentence Variety", description: "Learn to construct sentences of varying lengths and structures to improve flow." },
            { lessonId: 20, lessonTitle: "Punctuation for Advanced Writers", description: "Master semicolons, colons, and other advanced punctuation marks." },
            { lessonId: 21, lessonTitle: "Advanced Vocabulary Building", description: "Expand your lexicon with sophisticated words and phrases for academic discourse." },
            { lessonId: 22, lessonTitle: "Writing Annotated Bibliographies", description: "A guide to creating a detailed and organized annotated bibliography for research." },
            { lessonId: 23, lessonTitle: "Citing Non-Traditional Sources", description: "How to cite websites, videos, and other digital media in academic work." },
            { lessonId: 24, lessonTitle: "Revising and Proofreading", description: "Final strategies for polishing your paper and catching any remaining errors." },
            { lessonId: 25, lessonTitle: "Literary Analysis", description: "A focused lesson on how to analyze and write about literary texts." },
            { lessonId: 26, lessonTitle: "The Rhetorical Analysis Essay", description: "Learn to analyze the persuasive techniques used in a text." },
            { lessonId: 27, lessonTitle: "Writing a Book Review", description: "How to summarize a book and provide a critical analysis." },
            { lessonId: 28, lessonTitle: "Writing an Abstract", description: "A guide to writing a concise summary of a research paper or essay." },
            { lessonId: 29, lessonTitle: "The Literature Review", description: "How to synthesize multiple sources to create a comprehensive literature review." },
            { lessonId: 30, lessonTitle: "Grant Proposal Writing", description: "An introduction to writing effective and persuasive grant proposals." },
            { lessonId: 31, lessonTitle: "Writing for the Sciences", description: "Understanding the unique conventions of scientific writing." },
            { lessonId: 32, lessonTitle: "Writing for the Humanities", description: "Explore the different writing styles used in history, philosophy, and literature." },
            { lessonId: 33, lessonTitle: "Responding to a Prompt", description: "Techniques for dissecting a prompt and ensuring your essay answers the question fully." },
            { lessonId: 34, lessonTitle: "Using Evidence Effectively", description: "Strategies for choosing and integrating the best evidence to support your claims." },
            { lessonId: 35, lessonTitle: "Avoiding Logical Fallacies", description: "Learn to identify and avoid common errors in reasoning and argumentation." },
            { lessonId: 36, lessonTitle: "Writing a Response Paper", description: "How to summarize and respond to a text in a critical and analytical way." },
            { lessonId: 37, lessonTitle: "The Reflective Essay", description: "Writing about personal experiences and insights in a structured way." },
            { lessonId: 38, lessonTitle: "Writing a Case Study", description: "Learn to analyze a specific situation or event in a case study format." },
            { lessonId: 39, lessonTitle: "Mastering the Concluding Paragraph", description: "Beyond summarizing: strategies for making your conclusion memorable and impactful." },
            { lessonId: 40, lessonTitle: "Final Course Review and Feedback", description: "A comprehensive review of all topics with personalized feedback on a writing sample." },
            { lessonId: 41, lessonTitle: "Creating an Outline: A Deep Dive", description: "Advanced techniques for creating detailed outlines that streamline the writing process." },
            { lessonId: 42, lessonTitle: "Editing for Clarity and Conciseness", description: "Tools and strategies for making your writing clearer and more direct." },
            { lessonId: 43, lessonTitle: "Using Active and Passive Voice", description: "Understand when to use active versus passive voice for maximum impact." },
            { lessonId: 44, lessonTitle: "Introduction to Different Writing Styles", description: "A brief overview of different writing styles such as Chicago, Harvard, and more." },
            { lessonId: 45, lessonTitle: "Course Conclusion and Final Exam", description: "A final assessment to evaluate your mastery of academic writing principles." }
        ]
    },
    {
        id: 3,
        title: "Intermediate Spanish: Daily Conversation",
        image: images.spanish[1],
        price: "39.99",
        numberOfStudents: 950,
        rate: 4.7,
        numberOfLessons: 20,
        name: "Spanish",
        profileImage: image3,
        profileColor: "#ff81ad34",
        lessons: [
            { lessonId: 1, lessonTitle: "Greetings and Introductions", description: "Practice conversational greetings, asking how someone is, and introducing yourself in various social contexts." },
            { lessonId: 2, lessonTitle: "Ordering at a Restaurant", description: "Key phrases and vocabulary for navigating a restaurant menu, ordering food, and paying the bill." },
            { lessonId: 3, lessonTitle: "Asking for Directions", description: "Learn how to ask for and give directions, including common street names and landmarks." },
            { lessonId: 4, lessonTitle: "Talking about Your Day", description: "Discuss your daily routine using common verbs and time expressions." },
            { lessonId: 5, lessonTitle: "Expressing Likes and Dislikes", description: "Phrases and grammar for talking about things you like and dislike." },
            { lessonId: 6, lessonTitle: "Making Plans with Friends", description: "Vocabulary for inviting people out and coordinating schedules." },
            { lessonId: 7, lessonTitle: "Shopping for Groceries", description: "Essential vocabulary for buying food and asking for prices." },
            { lessonId: 8, lessonTitle: "Expressing Opinions and Feelings", description: "Practice using adjectives and verbs to express your thoughts and emotions." },
            { lessonId: 9, lessonTitle: "Describing People and Places", description: "Learn to use descriptive adjectives to talk about people and locations." },
            { lessonId: 10, lessonTitle: "Navigating Public Transportation", description: "Phrases for taking the bus, train, or a taxi." },
            { lessonId: 11, lessonTitle: "Talking about Hobbies and Interests", description: "Expand your conversational skills by discussing your hobbies." },
            { lessonId: 12, lessonTitle: "Common Idioms and Slang", description: "An introduction to popular Spanish idioms to sound more like a native speaker." },
            { lessonId: 13, lessonTitle: "Dealing with an Emergency", description: "Basic phrases for seeking help and describing an emergency situation." },
            { lessonId: 14, lessonTitle: "Making Phone Calls", description: "Learn the etiquette and phrases for making and receiving phone calls." },
            { lessonId: 15, lessonTitle: "Talking about the Weather", description: "Vocabulary for describing weather conditions and making small talk about them." },
            { lessonId: 16, lessonTitle: "At the Doctor's Office", description: "Phrases for describing symptoms and understanding a diagnosis." },
            { lessonId: 17, lessonTitle: "Talking about Past Events", description: "Practice using the preterite and imperfect tenses in conversation." },
            { lessonId: 18, lessonTitle: "Future Plans", description: "Learn to express what you will do or what you are going to do." },
            { lessonId: 19, lessonTitle: "Handling Social Situations", description: "Navigate parties and other social gatherings with confidence." },
            { lessonId: 20, lessonTitle: "Role-Playing a Conversation", description: "A final lesson where you role-play a full conversation to test your skills." }
        ]
    },
]
export default coursesData