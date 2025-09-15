// StartCard.jsx
// MUI 
import { useTheme } from '@emotion/react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const PriceCards = ({ name, price, features, icon: IconComponent, selected }) => {
    const theme = useTheme();
    const cardStyle = {
        height: "410px",
        padding: "50px",
        boxShadow: "10px 10px 10px 10px #8080801e",
        position: "relative",
        ...(selected ? { top: "-50px", boxShadow: "20px 20px 20px 20px #8080801e", height: "450px" } : {})
    }
    return (
        <section style={{ width: "400px", margin: "10px" }} className='card animate__animated animate__slideInDown'>
            <Card sx={cardStyle}>
                <IconComponent sx={{
                    padding: "10px", fontFamily: theme.typography.fontFamily, fontSize: "22px", fontWeight: "600",
                    borderRadius: "50%", background: "#0a5db027", color: theme.palette.primary.main
                }} />
                <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ color: theme.palette.primary.main, fontFamily: theme.typography.fontFamily, fontSize: "16px", fontWeight: "600" }}
                >
                    {name}
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: "Quicksand",
                        color: theme.palette.text.primary,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: "600"
                    }}>
                    {price}
                </Typography>
                <div className="features" style={{ marginTop: "20px" }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                            <CheckCircleIcon sx={{ color: theme.palette.secondary.main, fontSize: '18px', mr: 1 }} />
                            <Typography variant="body2" sx={{ fontFamily: "Quicksand", color: theme.palette.text.secondary, margin: "5px", fontFamily: theme.typography.fontFamily }}>
                                {feature}
                            </Typography>
                        </div>
                    ))}
                </div>
                <Button variant="contained" sx={{ marginTop: "20px", width: "100%", textTransform: "capitalize", fontFamily: "Quicksand" }}>Get Started</Button>
            </Card>
        </section >
    );
};

export default PriceCards;