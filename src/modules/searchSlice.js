import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSearchResults } from '../api/api';

const getSearchThunk = createAsyncThunk(
  'searchSlice/getSearchThunk',
  async (search) => await getSearchResults(search)
);

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    results: [],
    // search: [],
    // history: [],
    status: 'Loading',
  },
  reducers: {
    update: (state, action) => {
      state.results = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchThunk.pending, (state, action) => {
      state.status = 'Loading';
    });
    builder.addCase(getSearchThunk.fulfilled, (state, action) => {
      state.results = action.payload;
      state.status = 'Complete';
    });
    builder.addCase(getSearchThunk.rejected, (state, action) => {
      state.status = 'Fail';
    });
  },
});
export default searchSlice;
export { getSearchThunk };
