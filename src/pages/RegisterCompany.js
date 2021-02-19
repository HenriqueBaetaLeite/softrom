import React, { useState } from 'react';

import { createCompany } from '../service/companys/companys';

const RegisterCompany = () => {
  const [name, setName] = useState('');
  const [docType, setDocType] = useState('');
  const [documento, setDocumento] = useState('');

  const handleRegisterCompany = async () => {
    await createCompany({
      id: '',
      nome: name,
      doc_type: docType,
      documento,
      gerar_nf: false,
      retem_iss: false,
      obs: 'string',
      agrupar_fatura_contrato: 'string',
    });
  };

  return (
    <div>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <input type="text" onChange={(event) => setDocType(event.target.value)} />

      <button type="button" onClick={handleRegisterCompany}>
        Clique
      </button>
    </div>
  );
};

export default RegisterCompany;
