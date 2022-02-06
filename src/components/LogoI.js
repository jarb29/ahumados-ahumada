import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';
//

// ----------------------------------------------------------------------

LogoI.propTypes = {
  sx: PropTypes.object
};

export default function LogoI({ sx }) {


  return (

    <Box sx={{ width: 5, height: 60, ...sx }}>
        <LogoImage />
    </Box>
  );
}


// ----------------------------------------------------------------------
const ImgStyle = styled('img')(({ theme }) => ({
  top: 1,
  width: '95%',
  height: '95%',
  objectFit: 'fill',
  position: 'center',
  transition: theme.transitions.create('all')
}));

// ----------------------------------------------------------------------

function LogoImage() {

  return (
    <Paper
      sx={{
        mx: -11,
        height: 45,
        borderRadius: 1,
        overflow: 'hidden',
        paddingTop: 'calc(0.3/9 * 100%)',
        position: 'relative',
        '&:hover img': {
          width: '100%',
          height: '100%'
        }
      }}
    >
         <ImgStyle alt={"Logo"} src="/static/ahumados/logoI.png" />
    </Paper>
  );
}

