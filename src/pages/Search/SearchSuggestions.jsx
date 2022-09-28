import { Box, Card, List } from '@mui/material';
import SearchNotFound from './SearchNotFound';
import SearchSuggestionItem from './SearchSuggestionItem';
import { isSameString } from '../../common/utils/field.utill';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { searchAsync } from '../../modules/searchSlice';
import { useEffect } from 'react';

const highlightResult = (sickNm, query) => {
  const splitedSickNm = sickNm.split(new RegExp(`(${query})`, 'gi'));
  return splitedSickNm.map((str, index) =>
    isSameString(str, query) ? <strong key={index}>{query}</strong> : str
  );
};

const SearchSuggestions = ({ query, target }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.search);

  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(searchAsync({ q: query }));
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [query]);

  if (error) return <Error />;

  return (
    <Card>
      <Box sx={{ minWidth: 1050 }}>
        {loading && <Loading />}
        {data && (
          <List sx={{ overflowY: 'scroll', maxHeight: 330 }}>
            {data.length > 0 ? (
              data.map(({ sickCd, sickNm }, index) => (
                <SearchSuggestionItem
                  key={sickCd}
                  sickNm={highlightResult(sickNm, query)}
                  className={target === index ? 'active' : null}
                />
              ))
            ) : (
              <SearchNotFound />
            )}
          </List>
        )}
      </Box>
    </Card>
  );
};

export default SearchSuggestions;
