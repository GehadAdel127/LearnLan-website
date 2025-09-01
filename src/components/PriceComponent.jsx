import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import { useEffect, useRef, useState } from 'react';
import CompentesHeader from './CompentesHeader';
import PriceCards from './PriceCards';

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
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    // Disconnect after the first time it becomes visible
                    observer.disconnect();
                }
            },
            {
                root: null, // Use the viewport as the root
                rootMargin: '0px',
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);
    return (
        <section style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "70px", width: "100%" }}>
            <CompentesHeader title="Pricing Plans" head="Simple,easy pricing" />
            <div className="cards" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginTop: "70px" }}>
                {plans.map((plan) => (
                    <PriceCards name={plan.name} price={plan.price} features={plan.features} icon={plan.icon} key={plan.id} selected={plan.selected} inView={inView} />
                ))}
            </div>
        </section>
    )
}

export default PriceComponent