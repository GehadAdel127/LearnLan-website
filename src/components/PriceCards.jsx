import { useTheme } from "@emotion/react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCourses } from "../Context/CoursesContext";

const PriceCards = ({ name, price, features, icon: IconComponent, selected }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { addToCart } = useCourses();

    const handleSelectPlan = () => {
        const plan = {
            id: name.toLowerCase().replace(/\s+/g, "-"), // unique id
            name,
            title: `${name} Plan`,
            price: price.replace(/[^0-9.]/g, ""), // strip non-numeric
            quantity: 1,
            features,
        };

        addToCart(plan);
        navigate("/cart");
    };

    return (
        <section
            style={{ width: "295px" }}
            className="card animate__animated animate__slideInDown"
        >
            <Card
                sx={{
                    p: 4,
                    boxShadow: selected
                        ? "0px 8px 24px rgba(0,0,0,0.15)"
                        : "4px 4px 12px rgba(0,0,0,0.08)",
                    border: "1px solid transparent",
                    borderRadius: "16px",
                    position: "relative",
                    top: selected ? { xs: 0, md: "-20px" } : 0,
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    height: "100%",
                }}
            >
                <IconComponent
                    sx={{
                        p: 1,
                        fontSize: "32px",
                        borderRadius: "50%",
                        background: `${theme.palette.primary.main}15`,
                        color: theme.palette.primary.main,
                        mb: 2,
                    }}
                />

                <Typography
                    variant="h6"
                    sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        mb: 1,
                    }}
                >
                    {name}
                </Typography>

                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        mb: 3,
                    }}
                >
                    {price}
                </Typography>

                <div className="features" style={{ marginBottom: "auto" }}>
                    {features.map((feature, index) => (
                        <div
                            key={`${name}-feature-${index}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "10px",
                            }}
                        >
                            <CheckCircleIcon
                                sx={{
                                    color: theme.palette.secondary.main,
                                    fontSize: "18px",
                                    mr: 1,
                                }}
                            />
                            <Typography
                                variant="body2"
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                {feature}
                            </Typography>
                        </div>
                    ))}
                </div>

                <Button
                    variant={selected ? "contained" : "outlined"}
                    sx={{
                        mt: 3,
                        width: "100%",
                        textTransform: "capitalize",
                        fontWeight: 600,
                    }}
                    onClick={handleSelectPlan}
                >
                    {selected ? "Get Started" : "Choose Plan"}
                </Button>
            </Card>
        </section>
    );
};

export default PriceCards;
