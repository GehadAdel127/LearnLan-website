// src/pages/Contact.jsx
import { Email, LocationOn, Phone } from "@mui/icons-material";
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

const Contact = () => {
    const theme = useTheme();
    const isMediumDown = useMediaQuery(theme.breakpoints.down("md"));

    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_g4u5mmb",
                "template_e8qhc3q",
                formRef.current,
                "LHt47TrM5vh5xtEji"
            )
            .then(
                () => {
                    setSuccess(true);
                    setLoading(false);
                    e.target.reset();
                },
                (error) => {
                    setSuccess(false);
                    setLoading(false);
                    console.error(error.text);
                }
            );
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: theme.palette.background.default,
                py: { xs: 6, md: 10 },
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <AnimatedSection animationClass="fadeInUp" delay={"0.1s"}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        textAlign="center"
                        color={theme.palette.primary.main}
                        gutterBottom
                    >
                        Contact Us
                    </Typography>
                </AnimatedSection>

                <AnimatedSection animationClass="fadeInUp" delay={`0.2s`}>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        sx={{
                            maxWidth: 600,
                            mx: "auto",
                            mb: 6,
                            color: theme.palette.text.secondary,
                        }}
                    >
                        Have questions or need help? We’d love to hear from you. Fill out the
                        form below or reach out directly using our contact information.
                    </Typography>
                </AnimatedSection>

                <Grid
                    container
                    spacing={5}
                    direction={isMediumDown ? "column" : "row"}
                    justifyContent={"center"}
                >
                    <Grid item xs={12} md={7} width={"100%"}>
                        <Paper
                            elevation={4}
                            sx={{
                                p: 4,
                                borderRadius: "16px",
                                background: theme.palette.background.paper,
                            }}
                        >
                            <AnimatedSection animationClass="fadeInLeft" delay={`0.1s`}>
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    Send us a message
                                </Typography>
                            </AnimatedSection>

                            <form ref={formRef} onSubmit={handleSubmit}>
                                <Stack spacing={3}>
                                    <AnimatedSection animationClass="fadeInLeft" delay={`0.2s`}>
                                        <TextField
                                            name="name"
                                            label="Full Name"
                                            fullWidth
                                            variant="outlined"
                                            required
                                        />
                                    </AnimatedSection>

                                    <AnimatedSection animationClass="fadeInRight" delay={`0.3s`}>
                                        <TextField
                                            name="email"
                                            label="Email Address"
                                            fullWidth
                                            variant="outlined"
                                            required
                                        />
                                    </AnimatedSection>

                                    <AnimatedSection animationClass="fadeInLeft" delay={`0.4s`}>
                                        <TextField
                                            name="message"
                                            label="Your Message"
                                            fullWidth
                                            variant="outlined"
                                            multiline
                                            minRows={4}
                                            required
                                        />
                                    </AnimatedSection>

                                    <AnimatedSection animationClass="fadeInRight" delay={`0.5s`}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            disabled={loading}
                                            sx={{
                                                textTransform: "capitalize",
                                                fontWeight: "600",
                                                alignSelf: "flex-start",
                                            }}
                                        >
                                            {loading ? "Sending..." : "Send Message"}
                                        </Button>
                                    </AnimatedSection>

                                    {success === true && (
                                        <AnimatedSection animationClass="fadeInLeft" delay={`0.6s`}>
                                            <Typography color="green">
                                                ✅ Message sent successfully!
                                            </Typography>
                                        </AnimatedSection>
                                    )}

                                    {success === false && (
                                        <AnimatedSection animationClass="fadeInRight" delay={`0.6s`}>
                                            <Typography color="red">
                                                ❌ Failed to send message. Try again later.
                                            </Typography>
                                        </AnimatedSection>
                                    )}
                                </Stack>
                            </form>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={5} width={"100%"}>
                        <Paper
                            elevation={4}
                            sx={{
                                p: 4,
                                borderRadius: "16px",
                                background: theme.palette.background.paper,
                            }}
                        >
                            <AnimatedSection animationClass="fadeInUp" delay={`0.1s`}>
                                <Typography variant="h5" fontWeight="bold" gutterBottom>
                                    Get in touch
                                </Typography>
                            </AnimatedSection>

                            <Stack spacing={3} sx={{ mt: 2 }}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Email color="primary" />
                                    <AnimatedSection animationClass="fadeInLeft" delay={`0.2s`}>
                                        <Typography color={theme.palette.text.secondary}>
                                            support@learnlan.com
                                        </Typography>
                                    </AnimatedSection>
                                </Stack>

                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Phone color="primary" />
                                    <AnimatedSection animationClass="fadeInRight" delay={`0.3s`}>
                                        <Typography color={theme.palette.text.secondary}>
                                            +1 (234) 567-890
                                        </Typography>
                                    </AnimatedSection>
                                </Stack>

                                <Stack direction="row" spacing={2} alignItems="center">
                                    <LocationOn color="primary" />
                                    <AnimatedSection animationClass="fadeInLeft" delay={`0.4s`}>
                                        <Typography color={theme.palette.text.secondary}>
                                            123 Learnlan St, Knowledge City, World
                                        </Typography>
                                    </AnimatedSection>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
