// Import necessary components and modules from MUI
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Define the modal style
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// TransitionsModal component that accepts isOpen and setIsOpen props
const TransitionsModal = ({ isOpen, setIsOpen }) => {
  // Open the modal
  const handleOpen = () => setIsOpen(true);
  
  // Close the modal
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      {/* Button to open the modal */}
      <Button onClick={handleOpen}>Open modal</Button>
      
      {/* The modal component */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen} // Use the isOpen prop to control the modal's visibility
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* Content inside the modal */}
        <Fade in={isOpen}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal;
