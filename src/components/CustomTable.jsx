import React from 'react';

import { Table, TableBody, TableRow, TableCell, Button } from '@material-ui/core';

import TableHeader from './TableHeader';

const CustomTable = ({ dataTable, handleFunction }) => {
  return (
    <Table>
      <TableHeader />
      <TableBody>
        {dataTable.map((company) => (
          <TableRow key={company.id}>
            <TableCell align="center" scope="company">
              {company.nome}
            </TableCell>
            <TableCell align="center">{company.tipo_doc}</TableCell>
            <TableCell align="center">{company.documento}</TableCell>
            <TableCell align="center">{company.gerar_nf ? 'sim' : 'não'}</TableCell>
            <TableCell align="center">{company.retem_iss ? 'sim' : 'não'}</TableCell>
            <TableCell align="center">{company.obs}</TableCell>
            <TableCell align="center">
              <Button
                variant="outlined"
                color="primary"
                onClick={(event) => handleFunction(event, company.id)}
              >
                Detalhes
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
