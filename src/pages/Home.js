import React, { useState, useEffect } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Card,
} from '@material-ui/core';

import { getAllCompanys } from '../service/empresas/empresas';

const Home = () => {
  const [companys, setCompanys] = useState([]);

  useEffect(() => {
    getAllCompanys().then((response) => setCompanys(response));
  }, []);

  console.log(companys.map((empresa) => console.log(empresa.id)));
  return (
    <div>
      <img
        alt="softrom logo"
        src="https://softrom.com.br/wp-content/uploads/2020/01/softrom1x1.png"
      />
      
        <Card>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Nome</TableCell>
                <TableCell align="center">Tipo de Documento</TableCell>
                <TableCell align="center">Documento</TableCell>
                <TableCell align="center">Gerar NF</TableCell>
                <TableCell align="center">Retem INSS</TableCell>
                <TableCell align="center">Observação</TableCell>
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
                  <TableCell align="center">{company.obs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      
    </div>
  );
};

export default Home;
