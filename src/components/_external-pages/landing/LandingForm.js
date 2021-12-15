import draftToHtml from 'draftjs-to-html';
import emailjs from 'emailjs-com';
import { convertToRaw } from 'draft-js';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// material
import { Stack, TextField, Typography, FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import { DraftEditor } from '../../editor';
//
import { FormSchema, defaultValues } from './form';

// ----------------------------------------------------------------------



export default function LandingForm(props) {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty }
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(FormSchema),
    defaultValues
  });

  // const onSubmit = async (data) => {
  //   await new Promise((resolve) => setTimeout(resolve, 500));
  //   alert(
  //     JSON.stringify(
  //       {
  //         ...data,
  //         draftEditor: draftToHtml(convertToRaw(data.draftEditor.getCurrentContent()))
  //       },
  //       null,
  //       2
  //     )
  //   );
  //   reset();
  //   props.onClose(false)
  // };



  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };



  const onSubmit = (e) => {
    // e.preventDefault();

    console.log(e.target, "the arget")
    let data = {
      fullname: e.fullName,
      email: e.email, 
      draftEditor: draftToHtml(convertToRaw(e.draftEditor.getCurrentContent()))
    }
    console.log(data)


    emailjs.sendForm("service_41mjh6b", "template_bwx31in", data, "user_2zG6im6TENNbVxBlXKG77")
    .then((result) => {
      console.log(result.text);
      alert(
        JSON.stringify({...data}, null, 2)
        )
    }).catch(error => {
      console.log(error.text);
    });
    
    reset();
    props.onClose(false)
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Controller
            name="fullName"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField {...field} label="Nombre" error={Boolean(error)} helperText={error?.message} />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField {...field} label="Email" error={Boolean(error)} helperText={error?.message} />
            )}
          />
          <div>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} gutterBottom>
              Pedidos y comentarios...
            </Typography>
            <Controller
              name="draftEditor"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <DraftEditor editorState={field.value} onEditorStateChange={field.onChange} error={Boolean(error)} />
              )}
            />
            {Boolean(errors.draftEditor) && (
              <FormHelperText error sx={{ px: 2, textTransform: 'capitalize' }}>
                {errors.draftEditor?.message}
              </FormHelperText>
            )}
          </div>
          <LoadingButton
            fullWidth
            color="info"
            size="medium"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            disabled={!isDirty}
          >
            Enviar
          </LoadingButton>
        </Stack>
      </form>
    </>
  );
}
