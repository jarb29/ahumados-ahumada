import { motion } from "framer-motion";

// material
import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack } from "@mui/material";
// routes
//
import {
  varFadeIn,
  varFadeInUp,
  varWrapEnter,
  varFadeInRight,
} from "../../animate";
import LandingScrollDialog from "./LandingScrollDialog";
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up("md")]: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    position: "fixed",
    alignItems: "center",
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    maxWidth: 520,
    margin: "auto",
    textAlign: "center",
    position: "relative",
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.up("md")]: {
      margin: "unset",
      textAlign: "left",
    },
  })
);

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 8,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: "100%",
  margin: "auto",
  position: "absolute",
  [theme.breakpoints.up("lg")]: {
    right: "0%",
    width: "75%",
    height: "100%",
  },
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle
          alt="overlay"
          src="/static/overlay.svg"
          variants={varFadeIn}
        />

        <HeroImgStyle
          alt="hero"
          src="/static/ahumados/foto1.jpg"
          variants={varFadeInUp}
        />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h2" sx={{ color: "common.white" }}>
                Ahumados
                <Typography
                  component="span"
                  variant="h2"
                  sx={{ color: "primary.main" }}
                >
                  &nbsp;Ahumada
                </Typography>
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h7" sx={{ color: "common.white" }}>
                Cocción artesanal al humo, envasada al vacío para que puedas
                disfrutar de las bondades que esta ofrece, en la comodidad de su
                casa y sin complicaciones.
              </Typography>
              <motion.div variants={varFadeInRight}>
                <Typography
                  component="span"
                  variant="h6"
                  sx={{ color: "primary.main" }}
                >
                  Disfruta del sabor en tu hogar.
                </Typography>
              </motion.div>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <LandingScrollDialog num={0} />
            </motion.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: "100vh" } }} />
    </>
  );
}
