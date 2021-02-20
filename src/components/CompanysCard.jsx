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
  TextField,
} from '@material-ui/core';

import { deleteCompany, updateCompany } from '../service/companys/companys';

import { randomPhoto } from '../utils/randomImages';

const CompanysCard = (props) => {
  const history = useHistory();
  const [company, setCompany] = useState([]);
  const [companyId, setCompanyId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [nome, setNome] = useState(null);
  const [tipo, setTipo] = useState(null);
  const [doc, setDoc] = useState(null);
  const [obs, setObs] = useState(null);

  useEffect(() => {
    const { id } = props.location.state;
    setCompanyId(id);
    getCompanyById(id)
      .then((resp) => setCompany(resp))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    const { id, value } = event.target;

    switch (id) {
      case 'nome':
        setNome(value);
        break;
      case 'tipo':
        setTipo(value);
        break;
      case 'doc':
        setDoc(value);
        break;
      default:
        setObs(value);
        break;
    }
  };

  const handleHome = () => {
    history.push('/home');
  };

  const handleDelete = async () => {
    await deleteCompany(companyId);
    setTimeout(() => {
      history.push('/home');
    }, 1000);
  };

  const handleEdit = async () => {
    await updateCompany(companyId, { nome, tipo, doc, obs });
    setTimeout(() => {
      history.push('/home');
    }, 1000);
  };

  const handleOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const dialogDeleteBox = (
    <Dialog
      open={openDelete}
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
        <Button onClick={handleCloseDelete} color="primary" autoFocus>
          Cancelar
        </Button>
        <Button onClick={handleDelete} color="primary">
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  );

  const dialogEditBox = (
    <Dialog open={openEdit} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Editar {company.nome}</DialogTitle>
      <DialogContent>
        <DialogContentText>Deseja alterar ou corrigir algum dado da empresa?</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="nome"
          label="Nome da empresa"
          type="text"
          fullWidth
        />
        <TextField
          margin="dense"
          id="tipo"
          label="Tipo de documento"
          type="text"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="doc"
          label="Documento"
          type="text"
          fullWidth
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          id="obs"
          label="Observação"
          type="text"
          fullWidth
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseEdit} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleEdit} color="primary">
          Editar
        </Button>
      </DialogActions>
    </Dialog>
  );

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
                <Button variant="outlined" type="button" onClick={handleOpenEdit}>
                  editar
                </Button>
                {openEdit ? dialogEditBox : null}
                <Button
                  variant="outlined"
                  color="secondary"
                  type="button"
                  onClick={handleOpenDelete}
                >
                  remover
                </Button>
                {openDelete ? dialogDeleteBox : null}
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
