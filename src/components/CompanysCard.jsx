import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCompanyById } from '../service/companys/companys';
import { Container, Box, Typography, Card, Button, CircularProgress } from '@material-ui/core';

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
    <Container>
      <Box my={4}>
        <Card>
          {company.length === 0 ? (
            <CircularProgress />
          ) : (
            <>
              <Typography>ID: {company.id}</Typography>
              <Typography>Empresa: {company.nome}</Typography>
              <Typography>Tipo documento: {company.tipo_doc}</Typography>
              <Typography>Documento: {company.documento}</Typography>
              <Typography>Participantes: {company.participantes}</Typography>
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
            </>
          )}
        </Card>
      </Box>
      <Button onClick={handleHome} variant="contained" color="primary">
        Voltar para Home
      </Button>
    </Container>
  );
};

export default CompanysCard;
