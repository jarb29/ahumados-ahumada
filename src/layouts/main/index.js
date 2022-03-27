import { Link as ScrollLink } from "react-scroll";
import { useLocation, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
// material
// components
import LogoI from "../../components/LogoI";
//
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";
import {
  Box,
  Link,
  Container,
  Typography,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";

// import twitterFill from "@iconify/icons-eva/twitter-fill";
import facebookFill from "@iconify/icons-eva/facebook-fill";
// import linkedinFill from "@iconify/icons-eva/linkedin-fill";
import instagramFilled from "@iconify/icons-ant-design/instagram-filled";

// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: "Facebook",
    icon: <Icon icon={facebookFill} width={20} height={20} color="#1877F2" />,
    link: "https://www.facebook.com/ahumadosAhumada/?ref=pages_you_manage",
  },
  {
    name: "Instagram",
    icon: (
      <Icon icon={instagramFilled} width={20} height={20} color="#D7336D" />
    ),
    link: "https://www.instagram.com/ahumadosahumada/",
  },
  // {
  //   name: "Linkedin",
  //   icon: <Icon icon={linkedinFill} width={20} height={20} color="#006097" />,
  // },
  // {
  //   name: "Twitter",
  //   icon: <Icon icon={twitterFill} width={20} height={20} color="#1C9CEA" />,
  // },
];
export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>

      {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: "center",
            position: "relative",
            bgcolor: "background.default",
          }}
        >
          <Container maxWidth="lg">
            <ScrollLink to="move_top" spy smooth>
              <LogoI sx={{ mb: 1, mx: "auto", cursor: "pointer" }} />
            </ScrollLink>

            <Typography variant="caption" component="p">
              <br /> © Ahumados &nbsp;
              <Link href="https://raizadelishop.vercel.app/Home">Ahumada</Link>
              <Stack
                spacing={3.5}
                direction="row"
                justifyContent={{ xs: "center" }}
                sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
              >
                {SOCIALS.map((social) => (
                  <Tooltip key={social.name} title={social.name}>
                    <IconButton href={social.link}>
                      {social.icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Stack>
            </Typography>
          </Container>
        </Box>
      )}
    </>
  );
}
