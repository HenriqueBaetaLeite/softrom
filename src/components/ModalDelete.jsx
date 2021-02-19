import React, { useState } from 'react';
import { Modal, Box, Typography } from '@material-ui/core';

const ModalDelete = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box>
          <Typography>Tem certeza que deseja deletar o registro desta empresa?</Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalDelete;
