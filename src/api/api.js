import axios from 'axios';

export const getSearchResults = async (search) => {
  const res = await axios.get(`http://localhost:4000/sick?q=${search}`);
  return { data: res.data };
};
