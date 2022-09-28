import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchSearch } from '../api/api';
import { createExtraReducers, reducerUtils } from '../common/utils/async.utill';

const searchAsync = createAsyncThunk('search/fetchSearch', async params => {
  const response = await fetchSearch(params);
  return response.json();
});

const searchSlice = createSlice({
  name: 'search',
  initialState: reducerUtils.initial(),
  extraReducers: createExtraReducers(searchAsync),
});

export { searchAsync };
export default searchSlice.reducer;
