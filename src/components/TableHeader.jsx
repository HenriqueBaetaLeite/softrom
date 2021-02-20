import React from 'react';

import { TableCell, TableHead, TableRow } from '@material-ui/core';

const TableHeader = () => {
  return (
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
  );
};

export default TableHeader;
