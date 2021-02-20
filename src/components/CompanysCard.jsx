import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCompanyById } from '../service/companys/companys';
import { Container, Box, Typography, Card, Button, CircularProgress } from '@material-ui/core';

const imgURLExample = 'https://picsum.photos/450/450';

const CompanysCard = (props) => {
  const history = useHistory();
  const [company, setCompany] = useState([]);
  const [danger, setDanger] = useState('');

  useEffect(() => {
    const { id } = props.location.state;
    getCompanyById(id)
      .then((resp) => setCompany(resp))
      .catch((err) => setDanger(err));
  }, []);

  const handleHome = () => {
    history.push('/home');
  };

  return (
    <Container maxWidth="sm">
      {company.length === 0 ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box display="flex" alignItems="center">
            <Box mr={2}>
              <img
                src="https://i.picsum.photos/id/0/250/450.jpg?hmac=N9UA7eXUtlLIZmP9TQly48SvOy5PVOGyPuPSFP1qSHM"
                alt="random img"
              />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="flex-end">
              <Typography>ID: {company.id}</Typography>
              <Typography variant="h4">{company.nome.toUpperCase()}</Typography>
              <Typography>{company.tipo_doc}</Typography>
              <Typography>Documento: {company.documento}</Typography>
              <Typography>Endereço(s): </Typography>
              <Typography>Total: {company.enderecos.length}</Typography>
              {company.enderecos
                ? company.enderecos.map((end) => (
                    <Box key={end.id}>
                      <Typography>Id do Endereço: {end.id}</Typography>
                      <Typography>CEP: {end.cep}</Typography>
                    </Box>
                  ))
                : null}
              <Box m={4}>
                <Button variant="outlined">edit</Button>
                <Button variant="outlined">remove</Button>
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
