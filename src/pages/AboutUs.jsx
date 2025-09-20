import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import AnimatedSection from "../components/AnimatedSection";

const About = () => {
    const theme = useTheme();
    const isMediumDown = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: theme.palette.background.default,
                py: { xs: 6, md: 10 },
            }}
        >
            <Container maxWidth="lg">
                <AnimatedSection animationClass="fadeInUp" delay={"0.1s"}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        textAlign="center"
                        color={theme.palette.primary.main}
                        gutterBottom
                    >
                        About Us
                    </Typography>
                </AnimatedSection>

                <AnimatedSection animationClass="fadeInUp" delay={"0.2s"}>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{
                            maxWidth: 700,
                            mx: "auto",
                            mb: 6,
                            color: theme.palette.text.secondary,
                        }}
                    >
                        Welcome to <b>Learnlan</b>, your trusted platform for online learning.
                        We are dedicated to providing high-quality courses and resources
                        to empower students, teachers, and lifelong learners.
                    </Typography>
                </AnimatedSection>

                <Grid
                    container
                    spacing={5}
                    direction={isMediumDown ? "column" : "row"}
                    justifyContent="center"
                >
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper
                            elevation={4}
                            sx={{
                                p: 4,
                                borderRadius: "16px",
                                background: theme.palette.background.paper,
                                height: "100%",
                            }}
                        >
                            <AnimatedSection animationClass="fadeInLeft" delay={"0.3s"}>
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    Who We Are
                                </Typography>
                            </AnimatedSection>
                            <AnimatedSection animationClass="fadeInLeft" delay={"0.4s"}>
                                <Typography color={theme.palette.text.secondary}>
                                    Learnlan is a collaborative platform built to connect students and teachers
                                    in a digital environment. Our goal is to make education accessible,
                                    engaging, and impactful for everyone.
                                </Typography>
                            </AnimatedSection>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper
                            elevation={4}
                            sx={{
                                p: 4,
                                borderRadius: "16px",
                                background: theme.palette.background.paper,
                                height: "100%",
                            }}
                        >
                            <AnimatedSection animationClass="fadeInRight" delay={"0.3s"}>
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    What We Do
                                </Typography>
                            </AnimatedSection>
                            <AnimatedSection animationClass="fadeInRight" delay={"0.4s"}>
                                <Typography color={theme.palette.text.secondary}>
                                    We provide interactive courses, resources, and tools that help learners
                                    achieve their goals. Teachers can create, share, and manage courses,
                                    while students enjoy a smooth and personalized learning experience.
                                </Typography>
                            </AnimatedSection>
                        </Paper>
                    </Grid>
                </Grid>

                {/* FAQ Accordion Section */}
                <Box mt={8}>
                    <AnimatedSection animationClass="fadeInUp" delay={"0.5s"}>
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            textAlign="center"
                            color={theme.palette.primary.main}
                            gutterBottom
                        >
                            Frequently Asked Questions
                        </Typography>
                    </AnimatedSection>

                    <Box maxWidth="md" mx="auto" mt={3}>
                        <AnimatedSection animationClass="fadeInUp" delay={"0.6s"}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                                    <Typography fontWeight="600">How do I enroll in a course?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color={theme.palette.text.secondary}>
                                        Simply sign in, browse available courses, and click "Enroll" to start learning right away.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </AnimatedSection>

                        <AnimatedSection animationClass="fadeInUp" delay={"0.7s"}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                                    <Typography fontWeight="600">Can teachers create their own courses?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color={theme.palette.text.secondary}>
                                        Yes! Teachers can easily create, manage, and publish their own courses directly on Learnlan.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </AnimatedSection>

                        <AnimatedSection animationClass="fadeInUp" delay={"0.8s"}>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                                    <Typography fontWeight="600">Is Learnlan free to use?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color={theme.palette.text.secondary}>
                                        Many resources are free, and premium courses are available at affordable rates.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </AnimatedSection>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default About;
