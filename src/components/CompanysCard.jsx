import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCompanyById } from '../service/companys/companys';
import {
  Container,
  Box,
  Typography,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';

import { deleteCompany } from '../service/companys/companys';

const imgURLExample = 'https://picsum.photos/250/450';

const photos = [
  'https://i.picsum.photos/id/1/250/450.jpg?hmac=E8t3kigun_RlWVq-U1gz1uuoA8yai5Z0NIEAwWtXO8U',
  'https://i.picsum.photos/id/0/250/450.jpg?hmac=N9UA7eXUtlLIZmP9TQly48SvOy5PVOGyPuPSFP1qSHM',
  'https://i.picsum.photos/id/983/250/450.jpg?hmac=6QaeY1BqIVzFjw3SwgNEvSrT6hx-bJhjTUiVzqJh9PU',
  'https://i.picsum.photos/id/283/250/450.jpg?hmac=wuv7U77nW4wzmBRSMTesWzmPIi0fWPxEXYgilfosE1U',
  'https://i.picsum.photos/id/137/250/450.jpg?hmac=kt93NfVj9miJ0WHtfoENBpnMi0HdxVO1T4H2RyfFhpk',
];

const randomPhoto = photos[Math.round(Math.random() * 4)];

const photo1 =
  'https://i.picsum.photos/id/0/250/450.jpg?hmac=N9UA7eXUtlLIZmP9TQly48SvOy5PVOGyPuPSFP1qSHM';

const CompanysCard = (props) => {
  const history = useHistory();
  const [company, setCompany] = useState([]);
  const [danger, setDanger] = useState('');
  const [companyId, setCompanyId] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const { id } = props.location.state;
    setCompanyId(id);
    getCompanyById(id)
      .then((resp) => setCompany(resp))
      .catch((err) => setDanger(err));
  }, []);

  const handleHome = () => {
    history.push('/home');
  };

  const handleDelete = async () => {
    await deleteCompany(companyId);
    setTimeout(() => {
      history.push('/home');
    }, 1000);
  };

  const openDeleteModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dialogDeleteBox = (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Deletar empresa {company.nome}?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Ao confirmar esta ação não será possível reverter o resultado.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Cancelar
        </Button>
        <Button onClick={handleDelete} color="primary">
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  );

  console.log('Id da empresa', companyId);

  return (
    <Container maxWidth="sm">
      {company.length === 0 ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box display="flex" alignItems="center" mt={5}>
            <Box mr={4} width="70%">
              <img src={randomPhoto} alt="random img" />
            </Box>
            <Box>
              <Box m={2}>
                <Typography variant="caption">ID: {company.id}</Typography>
                <Typography variant="h4">{company.nome.toUpperCase()}</Typography>
                <Typography variant="h6">{company.tipo_doc}</Typography>
                <Typography variant="subtitle2">Documento: {company.documento}</Typography>
                <Typography>Endereço(s): </Typography>
                <Typography variant="caption">Total: {company.enderecos.length}</Typography>
                {company.enderecos
                  ? company.enderecos.map((end) => (
                      <Box key={end.id} m={1}>
                        <Typography variant="body2">Id do Endereço: {end.id}</Typography>
                        <Typography>CEP: {end.cep}</Typography>
                      </Box>
                    ))
                  : null}
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button variant="outlined">editar</Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  type="button"
                  onClick={openDeleteModal}
                >
                  remover
                </Button>
                {open ? dialogDeleteBox : null}
              </Box>
            </Box>
          </Box>
        </>
      )}
      <Box my={2}>
        <Button onClick={handleHome} variant="contained" color="primary">
          Voltar para Home
        </Button>
      </Box>
    </Container>
  );
};

export default CompanysCard;
