import { useState, useRef, useEffect } from 'react';
// material

import { Button, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
// import LandingForm from './LandingForm';
import ContactUs from './ContactUs'
// ----------------------------------------------------------------------
export default function LandingScrollDialog(props) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseComponent = (val) => {
    console.log(val)
    setOpen(val);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  const words = ['Encargos', 'Pedidos', 'Contactanos'];
  return (
    <div>
      <Button onClick={handleClickOpen('paper')} size="large" variant="contained">
        {
          // eslint-disable-next-line
        words[props.num]
        }
      </Button>

      <Dialog open={open} onClose={handleClose} scroll={scroll}>
        <DialogTitle sx={{ pb: 2 }}>Pedidos</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}>
            {/* <LandingForm onClose = {handleCloseComponent}/> */}
            <ContactUs />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
