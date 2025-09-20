import { useTheme } from "@emotion/react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useCourses } from "../Context/CoursesContext";

const CourseCard = ({ id, name, title, image, price, rate, numberOfStudents, numberOfLessons }) => {
    const theme = useTheme();
    const { savedCourses, toggleSaveCourse, cart, addToCart } = useCourses();

    const isSaved = savedCourses.some((c) => c.id === id);
    const isInCart = cart.some((c) => c.id === id);

    return (
        <Card
            sx={{
                borderRadius: 2,
                boxShadow: 3,
                overflow: "hidden",
                position: "relative",
                display: "grid",
                minWidth: "278px",
                maxWidth: "278px",
                gridTemplateRows: "auto 1fr auto",
            }}
        >
            {/* Image */}
            <Link to={`/courses/${name}`} sx={{ gridRow: 1 }}>
                <CardMedia
                    component="img"
                    height="180"
                    image={image}
                    alt={title}
                    sx={{ objectFit: "cover", width: "100%" }}
                />
            </Link>
            <Box
                sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    bgcolor: "rgba(12,12,12,0.7)",
                    color: theme.palette.background.paper,
                    borderRadius: 2,
                    px: 1.5,
                    py: 0.5,
                    fontWeight: 600,
                    fontSize: 14
                }}
            >
                <StarRateIcon sx={{ fontSize: 20, color: "gold" }} />
                {rate}
            </Box>

            <CardContent sx={{ flexGrow: 1, gridRow: 2, display: "grid", gridTemplateRows: "auto auto 1fr auto" }}> {/* Assign to grid row 2, and make content a nested grid */}
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                    <Box component="span" sx={{ color: theme.palette.primary.main }}>{name}</Box>: {title}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <IconButton onClick={() => toggleSaveCourse({ id, name, title, image, price, rate, numberOfStudents, numberOfLessons })}>
                        {isSaved ? <BookmarkIcon color="primary" /> : <BookmarkBorderOutlinedIcon color="primary" />}
                    </IconButton>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <PeopleAltOutlinedIcon fontSize="small" />
                        {numberOfStudents}
                    </Box>
                </Box>

                <hr style={{ margin: "10px 0" }} />
                <CardActions sx={{ display: "flex", justifyContent: "space-between", p: 0 }}>
                    <Typography sx={{ fontWeight: 600, color: theme.palette.primary.main }}>${price}</Typography>
                    <Button
                        variant="contained"
                        size="small"
                        disabled={isInCart}
                        onClick={() => addToCart({ id, name, title, image, price, rate, numberOfStudents, numberOfLessons })}
                    >
                        {isInCart ? "In Cart" : "Add to Cart"}
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default CourseCard;