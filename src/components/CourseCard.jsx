// MUI 
import { useTheme } from '@emotion/react';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import StarRateIcon from '@mui/icons-material/StarRate';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const CourseCard = ({ name, title, image, price, rate, numberOfStudents, numberOfLessons }) => {
    const theme = useTheme()
    return (
        <section className='courseCard' style={{ width: "350px", marginTop: "50px", height: "420px" }}>
            <Card style={{ border: "none", boxShadow: "none", position: "relative", cursor: "pointer", borderRadius: "20px" }}>
                <Link to={`/courses/${name}`} style={{ textDecoration: "none" }}>
                    <CardMedia
                        style={{ borderRadius: "20px", width: "100%", height: "250px", objectFit: "cover", objectPosition: "center" }}
                        component="img"
                        height="300"
                        image={image}
                        alt="course image"
                        loading='lazy'
                    />
                    <div className="rating" style={{ position: "absolute", top: "10px", left: "10px", color: "white", display: "flex", justifyContent: "center", alignItems: "center", background: "#0c0c0cb9", width: "15%", gap: "5px", borderRadius: "20px", padding: "5px 10px", fontWeight: "600" }}>
                        <StarRateIcon style={{ fontSize: "24px", color: "gold" }} />
                        {rate}
                    </div>
                    <CardContent style={{ padding: "10px" }}>
                        <p style={{ color: "black", fontWeight: "700", fontSize: "20px", margin: "0px" }}>
                            <span style={{ color: theme.palette.primary.main }}>{name}</span> : {title}
                        </p>
                        <div className="icons" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                            <div className="numberOfLessons" style={{ display: "flex", justifyContent: "start", alignItems: "start", color: "#505050b9" }}>
                                <BookmarkBorderOutlinedIcon style={{ color: theme.palette.primary.main, marginRight: "5px" }} />
                                {numberOfLessons}
                            </div>
                            <div className="numberOfStudents" style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "#505050b9" }}>
                                <PeopleAltOutlinedIcon style={{ color: theme.palette.primary.main, marginRight: "5px" }} />
                                {numberOfStudents}
                            </div>
                        </div>
                        <hr style={{ border: "1px solid #8080801e" }} />
                        <CardActions disableSpacing style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px", padding: "0px" }}>
                            <div className="price" style={{ fontWeight: "600", color: theme.palette.primary.main }}>
                                ${price}
                            </div>
                            <div className="icons">
                                <IconButton aria-label="share" style={{ padding: "0px", outline: "none", marginRight: "18px" }}>
                                    <ShareOutlinedIcon style={{ fontSize: "20px" }} />
                                </IconButton>
                                <IconButton aria-label="add to favorites" style={{ padding: "0px", outline: "none" }}>
                                    <FavoriteBorderOutlinedIcon style={{ fontSize: "20px" }} />
                                </IconButton>
                            </div>
                        </CardActions>
                    </CardContent>
                </Link>
                <CardActions>
                    <Button component={Link} variant="contained">Add to cart</Button>
                </CardActions>
            </Card>
        </section >
    )
}

export default CourseCard