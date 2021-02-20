import React, { useState, useEffect } from 'react';

import CompanyProvider from './index';

import { getAllCompanys } from '../service/companys/companys';

const CompanyContext = ({ children }) => {
  const [companysAPI, setCompanysAPI] = useState([]);

  useEffect(() => {
    getAllCompanys()
      .then(async (resp) => {
        setCompanysAPI(resp);
      })
      .catch((err) => console.log(err));
  }, []);

  const context = { companysAPI };

  return <CompanyProvider.Provider value={context}>{children}</CompanyProvider.Provider>;
};

export default CompanyContext;
