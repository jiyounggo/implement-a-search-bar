export const reducerUtils = {
  initial: (data = null) => ({
    loading: false,
    data,
    error: null,
  }),
  loading: (preveState = null) => ({
    data: preveState,
    loading: true,
    error: null,
  }),
  success: data => ({
    data,
    loading: false,
    error: null,
  }),
  error: error => ({
    data: null,
    loading: false,
    error,
  }),
};

const handleAsyncState = (state, { type, payload }) => {
  const { data, loading, error } = reducerUtils[type](payload);
  state.data = data;
  state.loading = loading;
  state.error = error;
};

export const createExtraReducers = fetch => builder => {
  builder.addCase(fetch.pending, state => {
    handleAsyncState(state, { type: 'loading' });
  });
  builder.addCase(fetch.fulfilled, (state, { payload }) => {
    handleAsyncState(state, { type: 'success', payload });
  });
  builder.addCase(fetch.rejected, (state, { payload }) => {
    handleAsyncState(state, { type: 'error', payload });
  });
};
