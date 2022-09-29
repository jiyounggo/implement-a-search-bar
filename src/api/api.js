import axios from 'axios';

export const getSearchResults = async (search) => {
  const res = await axios.get(`http://localhost:4000/sick?q=${search}`);
  console.info('calling api 😎');
  return res.data;
};
