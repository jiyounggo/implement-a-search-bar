import { Box, Container } from '@mui/material';
import { useState } from 'react';
import SearchInput from './SearchInput';
import SearchSuggestions from './SearchSuggestions';

const Search = () => {
  const [query, setQuery] = useState('');
  const [target, setTarget] = useState(-1);

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          background: '#ddd',
        }}
      >
        <Container maxWidth={false}>
          <SearchInput onChange={setQuery} setTarget={setTarget} />
          {query && (
            <Box sx={{ mt: 1 }}>
              <SearchSuggestions query={query} target={target} />
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Search;
