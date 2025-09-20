import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import CompentesHeader from './CompentesHeader';
import PriceCards from './PriceCards';

// MUI
import { Box, Stack } from '@mui/material';

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
        selected: true
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
                mt: { xs: 5, md: 9 },
                width: "100%",
                px: { xs: 2, sm: 3, md: 0 }
            }}
        >
            <CompentesHeader title="Pricing Plans" head="Simple,easy pricing" />
            <AnimatedSection animationClass="fadeInUp" delay="0.2s" >
                <Stack
                    className="priceCards"
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={{ xs: 3, md: 2 }}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        mt: { xs: 3, md: 8 },
                        maxWidth: 'lg',
                        marginBottom: "50px"
                    }}
                >
                    {plans.map((plan, index) => (
                        <PriceCards
                            key={plan.id}
                            name={plan.name}
                            price={plan.price}
                            features={plan.features}
                            icon={plan.icon}
                            selected={plan.selected}
                        />
                    ))}
                </Stack>
            </AnimatedSection>
        </Box>
    )
}

export default PriceComponent;