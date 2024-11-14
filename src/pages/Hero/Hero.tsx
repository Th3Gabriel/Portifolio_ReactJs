import styled from "@emotion/styled";
import Avatar from "../../assets/img/Avatar_Gabriel.jpeg";
import { Box, Container, Grid, Typography } from "@mui/material";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import StyledButton from "../../components/StylledButton/StyledButton";
import { AnimatedBackground } from "../../components/AnimatedBackground/AnimatedBackGround";

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main, // Corrigido de 'constrastText' para 'contrastText'
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }));

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText} `
    }));

    return (
        <StyledHero>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2} >Gabriel Martins</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Engineer</Typography> {/* Corrigido de 'Enginner' para 'Engineer' */}
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                <StyledButton>
                                    <DownloadRoundedIcon />
                                    <Typography>
                                        DOWNLOAD CV
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                <StyledButton>
                                    <ConnectWithoutContactRoundedIcon />
                                    <Typography>
                                        CONTACT ME
                                    </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;
