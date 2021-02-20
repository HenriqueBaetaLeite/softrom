import { api } from '../api';

const URL = '/empresa';

export const getAllCompanys = async () => {
  const companys = await api
    .get(URL)
    .then((response) => response.data)
    .catch((err) => err);

  return companys;
};

export const getCompanyById = async (id) => {
  const company = await api
    .get(URL + `/${id}`)
    .then((response) => response.data)
    .catch((err) => err);

  return company;
};

export const createCompany = async (data) => {
  const company = await api
    .post(URL, data)
    .then((response) => response)
    .catch((err) => err);

  return company;
};

export const deleteCompany = async (id) =>
  api
    .delete(URL + `/${id}`)
    .then((response) => response.data)
    .catch((err) => err);

export const updateCompany = async (id) => {
  const updatedCompany = await api
    .put(URL + `/${id}`)
    .then((response) => response.data)
    .catch((err) => err);

  return updatedCompany;
};
