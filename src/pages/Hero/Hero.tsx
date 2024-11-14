import styled from "@emotion/styled";
import Avatar from "../../assets/img/Avatar_Gabriel.jpeg";
import { Button, Container, Grid, Typography } from "@mui/material";
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main, // Corrigido de 'constrastText' para 'contrastText'
        height: "100vh",
    }));

    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "50%",
    }));

    return (
        <StyledHero>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <StyledImg src={Avatar} alt="Avatar" />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center">Gabriel Martins</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a Software Engineer</Typography> {/* Corrigido de 'Enginner' para 'Engineer' */}
                        <Grid container>
                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                <Button color="secondary">
                                    <DownloadRoundedIcon />
                                    DOWNLOAD CV
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                <Button color="secondary">
                                    <ConnectWithoutContactRoundedIcon />
                                    CONTACT ME
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;
