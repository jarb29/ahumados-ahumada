import { useState } from 'react';
import * as Yup from 'yup';
// material
import { styled } from '@mui/material/styles';
import { Box, Switch, Container, FormControlLabel } from '@mui/material';

// components
import Page from '../../Page';
import HeaderBreadcrumbs from '../../HeaderBreadcrumbs';
//

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

// ----------------------------------------------------------------------

export const defaultValues = {
  fullName: '',
  email: '',
  draftEditor: ''
};

export const FormSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Nombre es requerido')
    .min(6, 'Minimo de 6 caracteres')
    .max(30, 'Maximo 30 caracteres'),
  email: Yup.string().required('Email es requerido').email('email invalido'),

  draftEditor: Yup.mixed().test(
    'max text',
    'Debe tener mas de 25 caracteres',
    (value) => value && value.getCurrentContent().getPlainText('\u0001').length > 25
  )
});

export default function FormValidation() {
  const [openDevTool, setOpenDevTool] = useState(false);

  const handleChange = (event) => {
    setOpenDevTool(event.target.checked);
  };

  return (
    <RootStyle title="Form Validation | Minimal-UI">
      <Box
        sx={{
          pt: 6,
          pb: 1,
          bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Form Validation"
            links={[{ name: 'Components' }, { name: 'Form Validation' }]}
            moreLink={['https://formik.org/', 'https://react-hook-form.com/', 'https://github.com/jquense/yup']}
          />
        </Container>
      </Box>

      <Container sx={{ mt: 10 }}>
        <Box sx={{ mb: 5, display: 'flex', justifyContent: 'flex-end' }}>
          <FormControlLabel control={<Switch checked={openDevTool} onChange={handleChange} />} label="Open Dev Tool" />
        </Box>
      </Container>
    </RootStyle>
  );
}
