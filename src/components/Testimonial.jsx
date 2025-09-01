import CompentesHeader from './CompentesHeader';

// material ui imports

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Rating from '@mui/material/Rating';


// images imports
import Button from '@mui/material/Button';
import student from "../assets/images/student.jpg";
import studentGirl from "../assets/images/studentgirl.jpg";
import studentGirl2 from "../assets/images/studentgirl2.jpg";

const itemData = [
    {
        img: studentGirl,
        title: "Social Networking",
        author: 'Mera',
        value: 5
    },
    {
        img: student,
        title: "Buisness Strategy",
        author: 'Mohanad',
        value: 4
    },
    {
        img: studentGirl2,
        title: "Software Developer",
        author: 'Esraa',
        value: 3
    },
];

const Testimonial = () => {
    return (
        <section style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <CompentesHeader title="Testimonial" head="Over 1000+ students trust us" />
            <div className='animate__animated animate__slideInDown' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexFlow: "wrap", gap: "70px", padding: "50px 0px" }}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} style={{ width: "25%", height: "300px", cursor: "pointer" }}>
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{ borderRadius: "10px" }}
                        />
                        <ImageListItemBar
                            title={item.author}
                            subtitle={item.title}
                            style={{
                                backgroundColor: "transparent", fontSize: "18px",
                                fontWeight: "600", display: "flex", justifyContent: "center",
                                alignItems: "start", flexDirection: "column",
                                boxShadow: "0px 10px 10px 10px #8080801e", padding: "0px", margin: "0px"
                            }}
                            actionIcon={
                                <Rating name="read-only" value={item.value} readOnly style={{ fontSize: "18px", fontWeight: "600", paddingLeft: "15px" }} />
                            }
                        />
                    </ImageListItem>
                ))}
            </div>
            <CompentesHeader title="Become an instructor" head="You can join with LearnLang as an instrutor?" />
            <Button variant="contained">Learn More</Button>
        </section>
    )
}

export default Testimonial