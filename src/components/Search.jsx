import React, { useState } from 'react';
import Results from './Results';
import NoResult from './NoResult';
import { Container, SearchInput, ResultsBox } from './Search.style';
import { getSearchResults } from '../api/api';

const Search = () => {
  const [results, setResults] = useState({});
  const [timer, setTimer] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isOpen, SetIsOpen] = useState(false);

  const inputChange = (e) => {
    setSearchKeyword(e.target.value);
    const search = e.target.value;

    clearTimeout(timer);

    const newTimer = setTimeout(async () => {
      setToggle(false);

      if (results[search]) return;

      let result = await getSearchResults(search);
      result = result.slice(0, 10);
      if (search === '') {
        // setResults({});
        return;
      }
      if (e.target.value !== '' && result.length < 1) {
        setToggle(true);
        return;
      }

      setResults((prev) => ({
        ...prev,
        [search]: result,
      }));
    }, 500);

    setTimer(newTimer);
  };

  // console.log(results);

  return (
    <Container>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h2>
      <SearchInput
        value={searchKeyword}
        type='text'
        onChange={inputChange}
        onFocus={() => {
          SetIsOpen(true);
        }}
        onBlur={() => SetIsOpen(false)}
        placeholder='질환명을 입력해 주세요'
      />

      {/* <button>검색</button> */}
      {/* <ul>
        {results.flag === true ? (
          <NoResult />
        ) : (
          results[searchKeyword].map((result) => (
            <Results key={result.sickCd} result={result} />
          ))
        )}
      </ul> */}
      <ul>
        {toggle === true ? (
          <NoResult />
        ) : isOpen === false ? null : (
          <ResultsBox>
            {results[searchKeyword] &&
              results[searchKeyword].map((result) => (
                <Results
                  key={result.sickCd}
                  result={result}
                  input={searchKeyword}
                />
              ))}
          </ResultsBox>
        )}
      </ul>
    </Container>
  );
};

export default Search;
