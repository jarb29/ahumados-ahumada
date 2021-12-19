// material
import { styled } from '@mui/material/styles';
// components

import Page from '../components/Page';
// components
// import CarouselCenter from './components-overview/extra/CarouselCenter';

import {
  LandingHero,
  LandingMinimal,
  LandingAdvertisement,
  // LandingCleanInterfaces,
  LandingHugePackElements,
  LandingCarouselCenter
} from '../components/_external-pages/landing';

// import CarouselCenterMode from '../components/carousel/CarouselCenterMode';
// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="The starting point for your next project | Minimal-UI" id="move_top">
      <LandingHero />
      <ContentStyle>
        <LandingMinimal />
        <LandingHugePackElements />
        <br />
        <LandingAdvertisement />
        {/* <LandingCleanInterfaces /> */}
        <LandingCarouselCenter />
      </ContentStyle>
    </RootStyle>
  );
}
