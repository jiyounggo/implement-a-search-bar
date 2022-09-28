import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import searchSlice from './searchSlice';

const logger = createLogger();

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
