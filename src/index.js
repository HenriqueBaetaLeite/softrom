import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import CompanyContext from './context/CompanyContext';

ReactDOM.render(
  <BrowserRouter>
    <CompanyContext>
      <App />
    </CompanyContext>
  </BrowserRouter>,
  document.getElementById('root'),
);
