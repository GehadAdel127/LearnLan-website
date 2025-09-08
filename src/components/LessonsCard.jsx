import { useTheme } from "@emotion/react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"

const LessonsCard = ({ image, title, lessonTitle, description, height, link }) => {
    const theme = useTheme();
    return (
        <Link to={link} style={{ textDecoration: "none" }}>
            <Card
                style={{
                    width: "100%",
                    height: height + 300 || "380px",
                    border: "none",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    borderRadius: "15px",
                    cursor: "pointer",
                    overflow: "hidden"
                }}
            >
                <CardMedia
                    component="img"
                    height={height || "200px"}
                    image={image}
                    alt={title}
                    loading='lazy'
                />
                <CardContent style={{ padding: "16px" }}>
                    <Typography
                        variant="body2"
                    >
                        Online
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        style={{ fontWeight: "bold", marginTop: "8px" }}
                    >
                        {lessonTitle}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="p"
                        component="div"
                        style={{ fontWeight: "normal", marginTop: "8px" }}
                    >
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Link>

    )
}

export default LessonsCard