import React, { useRef } from 'react';
import emailjs from 'emailjs-com';



import { Stack, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import { DraftEditor } from '../../editor';
//





export default function ContactUs(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target, "the target")



    emailjs.sendForm("service_41mjh6b", "template_bwx31in", e.target, "user_2zG6im6TENNbVxBlXKG77")
    .then((result) => {
      console.log(result.text);
      alert(
        JSON.stringify({...result.text}, null, 2)
        )
    }).catch(error => {
      console.log(error.text);
    });

    props.onClose(false)
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="fullName" />
    //   <label>Email</label>
    //   <input type="email" name="email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <form ref={form} onSubmit={sendEmail}>
          <Stack spacing={3}>
            <TextField type="text" name="fullName" />
            <TextField type="email" name="email" />
            <div>
              <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} gutterBottom>
                Pedidos y comentarios...
              </Typography>
              <DraftEditor  />
              
            </div>
            <LoadingButton
              fullWidth
              color="info"
              size="medium"
              type="submit"
              variant="contained"
            >
              Enviar
            </LoadingButton>
          </Stack>
        </form>
  );
};