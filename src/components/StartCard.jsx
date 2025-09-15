// StartCard.jsx
// MUI 
import { useTheme } from '@emotion/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const StartCard = ({ title, description, language, image, bottom, backgroundColor, textAlign, color, polygonClipPath, fontSize, height, instructorBackground }) => {
    const theme = useTheme();
    return (
        <section style={{ width: "250px", position: "relative", bottom: bottom, margin: "10px", padding: "20px", cursor: "pointer" }} className='card animate__animated animate__bounceIn'>
            <Card sx={{ height: height, boxShadow: "none", border: "none", backgroundColor: instructorBackground }}>
                <div style={{
                    background: backgroundColor,
                    clipPath: polygonClipPath,
                    WebkitClipPath: polygonClipPath,
                    height: height ? "300px" : "200px",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "10px"
                }}>
                    <CardMedia
                        component="img"
                        loading='lazy'
                        image={image}
                        alt={title}
                        sx={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            bottom: 0,
                        }}
                    />
                </div>
                <CardContent sx={{ textAlign: textAlign, padding: "20px" }}>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                            fontWeight: "600",
                            fontSize: "17px",
                            fontFamily: "Quicksand"
                        }}>
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontSize: fontSize || "12px",
                            fontWeight: "600",
                            fontFamily: "Quicksand",
                            color: theme.palette.text.secondary
                        }}>
                        <span style={{ color: color }}>{language}</span>{" "}{description}
                    </Typography>
                </CardContent>
            </Card>
        </section >
    );
};

export default StartCard;