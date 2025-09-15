import { useTheme } from "@emotion/react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Button, Card, CardActions, CardContent, CardMedia, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useCourses } from "../Context/CoursesContext";

const CourseCard = ({ id, name, title, image, price, rate, numberOfStudents, numberOfLessons }) => {
    const theme = useTheme();
    const { savedCourses, toggleSaveCourse, cart, addToCart } = useCourses();

    const isSaved = savedCourses.some((c) => c.id === id);
    const isInCart = cart.some((c) => c.id === id);

    return (
        <Card sx={{ width: 300, borderRadius: 2, boxShadow: 3, overflow: "hidden", position: "relative" }}>
            {/* Image */}
            <Link to={`/courses/${name}`}>
                <CardMedia component="img" height="180" image={image} alt={title} />
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

            <CardContent>
                <p style={{ fontWeight: 700, fontSize: "16px" }}>
                    <span style={{ color: theme.palette.primary.main }}>{name}</span> : {title}
                </p>

                {/* Stats row */}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
                    <IconButton
                        onClick={() =>
                            toggleSaveCourse({ id, name, title, image, price, rate, numberOfStudents, numberOfLessons })
                        }
                    >
                        {isSaved ? <BookmarkIcon color="primary" /> : <BookmarkBorderOutlinedIcon color="primary" />}
                    </IconButton>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <PeopleAltOutlinedIcon style={{ marginRight: 5 }} />
                        {numberOfStudents}
                    </div>
                </div>

                <hr style={{ margin: "10px 0" }} />

                {/* Price + Cart */}
                <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ fontWeight: 600, color: theme.palette.primary.main }}>${price}</div>
                    <Button
                        variant="contained"
                        size="small"
                        disabled={isInCart}
                        onClick={() =>
                            addToCart({ id, name, title, image, price, rate, numberOfStudents, numberOfLessons })
                        }
                    >
                        {isInCart ? "In Cart" : "Add to Cart"}
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default CourseCard;
