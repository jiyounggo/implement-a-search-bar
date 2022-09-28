const { default: axios } = require('axios');

const API_URL = `${process.env.REACT_APP_API_URL}`;

const api = axios.create({
  baseURL: `${API_URL}`,
});

const searchSick = async params => await api.get(`/sick`, { params });

export { searchSick };
