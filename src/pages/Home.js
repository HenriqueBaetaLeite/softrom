import React, { useState, useEffect, useContext } from 'react';

import CompanyProvider from '../context/index';

import { useHistory } from 'react-router-dom';

import { CircularProgress, Container, Box, Card, Typography } from '@material-ui/core';

import CustomTable from '../components/CustomTable';

const TableCompanys = () => {
  const history = useHistory();
  const { companysAPI } = useContext(CompanyProvider);
  const [updateCompany, setUpdateCompany] = useState(null);

  useEffect(() => {
    setUpdateCompany(companysAPI);
  }, [companysAPI]);

  const handleCompanybyID = (event, id) => {
    event.preventDefault();
    history.push({
      pathname: `/empresas/${id}`,
      state: { id: id },
    });
  };

  return (
    <Container maxWidth="md">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h4">Soft-Rom Sistemas</Typography>
          <Typography variant="h6">22 anos de experiência no mercado</Typography>
        </Box>
        <img
          height="40px"
          alt="softrom logo"
          src="https://softrom.com.br/wp-content/uploads/2020/01/softrom1x1.png"
        />
      </Box>
      <Card>
        <Box m={2}>
          <Typography variant="h5">Tabela de empresas</Typography>
        </Box>

        {companysAPI.length === 0 ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          <CustomTable dataTable={companysAPI} handleFunction={handleCompanybyID} />
        )}
      </Card>
    </Container>
  );
};

export default TableCompanys;
