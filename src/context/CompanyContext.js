import React, { useState, useEffect } from 'react';

import Company from './index';

import { getAllCompanys } from '../service/companys/companys';

const CompanyContext = ({ children }) => {
  const [companys, setCompanys] = useState([]);

  useEffect(() => {
    getAllCompanys().then(async (resp) => {
      setCompanys(resp).catch((err) => console.log(err));
    });
  }, []);

  const context = { companys };

  return <Company.Provider value={context}>{children}</Company.Provider>;
};

export default CompanyContext;
