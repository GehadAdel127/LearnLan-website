import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import CompentesHeader from './CompentesHeader';
import PriceCards from './PriceCards';

// MUI
import { Box, Stack } from '@mui/material'; // Import Box and Stack for better layout control

// custom hook
import AnimatedSection from './AnimatedSection';

const plans = [
    {
        id: 1,
        name: "Basic Plan",
        price: "$10/mth",
        features: [
            "Access to all basic features",
            "Standard Customer Support",
            "Limited Assessments And Quizzes",
            "Mobile And Desktop Access",
            "monthly progress reports"
        ],
        icon: BoltOutlinedIcon
    },
    {
        id: 2,
        name: "Pro Plan",
        price: "$30/mth",
        features: [
            "Unlimited access to all courses",
            "Priority Customer Support",
            "Full Assessments And Quizzes",
            "Interactive Assignments And Projects",
            "Monthly progress reports",
        ],
        icon: LayersOutlinedIcon,
        selected: true // This plan is marked as selected
    },
    {
        id: 3,
        name: "Premium Plan",
        price: "$40/mth",
        features: [
            "Early access to new courses",
            "One-on-one tutoring sessions",
            "Exclusive Webinars And Events",
            "Detailed Monthly Progress Report",
            "Certificate of completion for each course"
        ],
        icon: LayersOutlinedIcon
    }
];


const PriceComponent = () => {
    return (
        <Box
            component="section"
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: { xs: 5, md: 9 }, // Responsive margin-top
                width: "100%",
                px: { xs: 2, sm: 3, md: 0 } // Add horizontal padding for smaller screens
            }}
        >
            <CompentesHeader title="Pricing Plans" head="Simple,easy pricing" />
            <Stack
                className="priceCards"
                direction={{ xs: 'column', md: 'row' }} // Stack vertically on small, row on medium and up
                spacing={{ xs: 3, md: 2 }} // Responsive spacing
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    mt: { xs: 3, md: 8 }, // Responsive margin-top
                    maxWidth: 'lg', // Limit width on very large screens
                    marginBottom: "50px"
                }}
            >
                {plans.map((plan, index) => (
                    <AnimatedSection key={plan.id} animationClass="fadeInUp" delay={`${index * 0.1}s`} >
                        {/* Conditionally apply sx prop for selected plan */}
                        <PriceCards
                            name={plan.name}
                            price={plan.price}
                            features={plan.features}
                            icon={plan.icon}
                            selected={plan.selected}
                        />
                    </AnimatedSection>
                ))}
            </Stack>
        </Box>
    )
}

export default PriceComponent;