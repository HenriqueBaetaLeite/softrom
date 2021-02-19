import { api } from '../api';

const URL = '/empresa';

export const getAllCompanys = async () => {
  const companys = await api
    .get(URL)
    .then((response) => response.data)
    .catch((err) => err);

  return companys;
};
