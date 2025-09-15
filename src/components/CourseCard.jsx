// MUI 
import { useTheme } from "@emotion/react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Button, Card, CardActions, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { useCourses } from "../Context/CoursesContext";

const CourseCard = ({
    id,
    name,
    title,
    image,
    price,
    rate,
    numberOfStudents,
    numberOfLessons,
}) => {
    const theme = useTheme();
    const { savedCourses, toggleSaveCourse, addToCart } = useCourses();
    const isSaved = savedCourses.includes(id);

    return (
        <section
            className="courseCard"
            style={{ width: "100%", marginTop: "50px", height: "440px" }}
        >
            <Card
                style={{
                    border: "none",
                    boxShadow: "none",
                    position: "relative",
                    cursor: "pointer",
                    borderRadius: "10px",
                    height: "100%",
                }}
            >
                {/* Image */}
                <Link to={`/courses/${name}`} style={{ textDecoration: "none", width: "100%" }}>
                    <CardMedia
                        style={{
                            borderRadius: "10px 10px 0 0",
                            width: "100%",
                            height: "250px",
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                        component="img"
                        image={image}
                        alt="course image"
                        loading="lazy"
                    />
                </Link>

                {/* Rating badge */}
                <div
                    style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        color: theme.palette.background.paper,
                        display: "flex",
                        alignItems: "center",
                        background: "#0c0c0cb9",
                        gap: "5px",
                        borderRadius: "20px",
                        padding: "5px 10px",
                        fontWeight: "600",
                    }}
                >
                    <StarRateIcon style={{ fontSize: "20px", color: "gold" }} />
                    {rate}
                </div>

                <CardContent style={{ padding: "25px" }}>
                    <p
                        style={{
                            color: theme.palette.text.primary,
                            fontWeight: "700",
                            fontSize: "18px",
                            margin: "0px",
                        }}
                    >
                        <span style={{ color: theme.palette.primary.main }}>{name}</span> : {title}
                    </p>

                    {/* Stats row */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "10px",
                            color: "#505050b9",
                        }}
                    >
                        <div
                            className="numberOfLessons"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                                color: "#505050b9",
                            }}
                        >
                            {isSaved ? (
                                <BookmarkIcon style={{ color: theme.palette.primary.main }} />
                            ) : (
                                <BookmarkBorderOutlinedIcon style={{ color: theme.palette.primary.main }} />
                            )}

                            {numberOfLessons}
                        </div>


                        <div style={{ display: "flex", alignItems: "center" }}>
                            <PeopleAltOutlinedIcon
                                style={{ color: theme.palette.primary.main, marginRight: "5px" }}
                            />
                            {numberOfStudents}
                        </div>
                    </div>

                    <hr style={{ border: "1px solid #8080801e", margin: "15px 0" }} />

                    {/* Price + Cart */}
                    <CardActions
                        disableSpacing
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "0px",
                        }}
                    >
                        <div style={{ fontWeight: "600", color: theme.palette.primary.main }}>
                            ${price}
                        </div>
                        <Button
                            variant="contained"
                            onClick={() => addToCart(id)}
                            sx={{ fontSize: "12px" }}
                        >
                            Add to cart
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </section>
    );
};

export default CourseCard;
