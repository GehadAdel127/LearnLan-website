// StartCard.jsx
// MUI 
import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const StartCard = ({ title, description, language, image, bottom, backgroundColor, textAlign, color, polygonClipPath, fontSize, height, instructorBackground }) => {
    const theme = useTheme();
    return (
        <Box sx={{ width: "100%", position: "relative", bottom: { xs: "0", md: bottom }, cursor: "pointer", minWidth: "300px", maxWidth: "300px", }} className='card'>
            <Card sx={{ height: height || "400px", boxShadow: "none", border: "none", backgroundColor: instructorBackground }}>
                <div style={{
                    background: backgroundColor,
                    clipPath: polygonClipPath,
                    WebkitClipPath: polygonClipPath,
                    height: height ? "350px" : "250px",
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
                            objectFit: "fit",
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
        </ Box>
    );
};

export default StartCard;