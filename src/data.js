export const data = {
  site_name: "LinguaLearn",
  language: "English",
  theme: "Vibrant & Modern",
  animation_style:
    "Subtle and fluid animations on hover and scroll to enhance user experience.",
  pages: [
    {
      page_name: "Home Page",
      route: "/",
      sections: [
        {
          section_name: "Hero Section",
          headline: "Unlock Your World with New Languages.",
          description:
            "Discover engaging courses designed by native speakers. Start your journey to fluency today, whether for travel, career, or personal growth.",
          cta_button: {
            text: "Start Learning Now",
            link: "/courses",
          },
          animation: "Elements fade in and slide up on page load.",
        },
        {
          section_name: "Featured Courses",
          title: "Popular Courses",
          animation: "Cards slide in from the side as the user scrolls down.",
          cards: [
            {
              course_name: "Beginner's Spanish: Travel Essentials",
              instructor: "María Rodríguez",
              rating: 4.9,
              animation: "Card scales up slightly on hover.",
            },
            {
              course_name: "Conversational French: Café & Culture",
              instructor: "Jean-Luc Dubois",
              rating: 4.8,
              animation: "Card scales up slightly on hover.",
            },
          ],
        },
      ],
    },
    {
      page_name: "Courses Page",
      route: "/courses",
      sections: [
        {
          section_name: "Filter & Search Bar",
          animation: "Search bar and dropdowns fade in.",
          search_placeholder: "Search for courses...",
          filters: ["Category", "Difficulty Level", "Rating"],
        },
        {
          section_name: "Courses Grid",
          animation:
            "Course cards appear with a subtle spring-like effect as they enter the viewport.",
        },
      ],
    },
    {
      page_name: "Course Details Page",
      route: "/courses/:id",
      sections: [
        {
          section_name: "Course Header",
          title: "Beginner's Spanish: Travel Essentials",
          description:
            "Embark on an exciting journey to learn Spanish with our comprehensive beginner's course...",
          animation: "Image and text slide in from opposite directions.",
        },
        {
          section_name: "Course Outline",
          title: "What You'll Learn",
          modules: [
            "Module 1: Greetings & Introductions",
            "Module 2: Eating Out",
            "Module 3: Getting Around",
          ],
        },
      ],
    },
    {
      page_name: "Student Dashboard",
      route: "/dashboard",
      sections: [
        {
          section_name: "Dashboard Header",
          greeting: "Welcome back, [Student Name]!",
          stats: ["Courses Completed", "Hours Studied", "Current Streak"],
          animation: "Stats boxes count up from zero on load.",
        },
        {
          section_name: "My Courses",
          animation: "Progress bars fill up with a smooth transition.",
          courses: [
            {
              name: "Beginner's Spanish",
              progress: "75%",
            },
          ],
        },
      ],
    },
    {
      page_name: "Login & Signup",
      route: "/auth",
      sections: [
        {
          section_name: "Authentication Forms",
          animation: "Forms have a slight glowing effect on input focus.",
          login_form: {
            headline: "Welcome Back!",
            fields: ["Email", "Password"],
          },
          signup_form: {
            headline: "Join LinguaLearn Today!",
            fields: ["Full Name", "Email", "Password", "Confirm Password"],
          },
        },
      ],
    },
  ],
};
