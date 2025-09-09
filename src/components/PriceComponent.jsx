import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import CompentesHeader from './CompentesHeader';
import PriceCards from './PriceCards';

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
            "Offline course access"
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
        <section style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "70px", width: "100%" }}>
            <CompentesHeader title="Pricing Plans" head="Simple,easy pricing" />
            <AnimatedSection animationClass="fadeInDown">
                <div className="priceCards" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: "70px" }}>
                    {plans.map((plan, index) => (
                        <AnimatedSection key={plan.id} animationClass="fadeInDown" delay={`${index * 0.3}s`}>
                            <PriceCards name={plan.name} price={plan.price} features={plan.features} icon={plan.icon} key={plan.id} selected={plan.selected} />
                        </AnimatedSection>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    )
}

export default PriceComponent