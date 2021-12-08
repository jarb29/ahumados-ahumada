// material
import { styled } from '@mui/material/styles';
import { Grid, Card, Container, CardHeader, CardContent } from '@mui/material';
// routes
// components
import { CarouselCenterMode } from '../../carousel';
import Page from '../../Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

export default function LandingCarouselCenter() {
  return (
    <RootStyle title="Components: Carousel | Minimal-UI">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Aprende Sobre Nuestros Productos" />
              <CardContent>
                <CarouselCenterMode />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
