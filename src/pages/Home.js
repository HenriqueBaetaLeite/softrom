import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
  Container,
  Box,
  Card,
  Button,
} from '@material-ui/core';

import { getAllCompanys } from '../service/companys/companys';

const TableCompanys = () => {
  const [companys, setCompanys] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getAllCompanys().then((response) => setCompanys(response));
  }, []);

  const handleCompanybyID = (event, id) => {
    event.preventDefault();
    history.push({
      pathname: `/empresas/${id}`,
      state: { id: id },
    });
  };

  return (
    <Container>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Box>
          <h2>Boas vindas ao App Soft-Rom Sistemas</h2>
          <h5>22 anos de experiência no mercado</h5>
        </Box>
        <img
          height="40px"
          alt="softrom logo"
          src="https://softrom.com.br/wp-content/uploads/2020/01/softrom1x1.png"
        />
      </Box>
      <Card>
        <h2>Tabela de empresas</h2>

        {companys.length === 0 ? (
          <CircularProgress />
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Nome</TableCell>
                <TableCell align="center">Tipo Documento</TableCell>
                <TableCell align="center">Documento</TableCell>
                <TableCell align="center">Gerar NF</TableCell>
                <TableCell align="center">Retém ISS</TableCell>
                <TableCell align="center">Observação</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companys.map((company) => (
                <TableRow key={company.id}>
                  <TableCell align="center" scope="company">
                    {company.nome}
                  </TableCell>
                  <TableCell align="center">{company.tipo_doc}</TableCell>
                  <TableCell align="center">{company.documento}</TableCell>
                  <TableCell align="center">{company.gerar_nf ? 'yes' : 'no'}</TableCell>
                  <TableCell align="center">{company.retem_iss ? 'yes' : 'no'}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={(event) => handleCompanybyID(event, company.id)}
                    >
                      Detalhes
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </Card>
    </Container>
  );
};

export default TableCompanys;
