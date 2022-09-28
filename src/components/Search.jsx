import React, { useState } from 'react';
import Results from './Results';
import axios from 'axios';
import NoResult from './NoResult';

const Search = () => {
  const [results, setResults] = useState({});
  const [timer, setTimer] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [toggle, setToggle] = useState(false);

  const inputChange = (e) => {
    setSearchKeyword(e.target.value);
    const search = e.target.value;

    clearTimeout(timer);

    const newTimer = setTimeout(async () => {
      setToggle(false);

      if (results[search]) return;

      const result = await axios.get(`http://localhost:4000/sick?q=${search}`);
      if (search === '') {
        // setResults({});
        return;
      }
      if (e.target.value !== '' && result.data.length < 1) {
        setToggle(true);
        return;
      }

      setResults((prev) => ({
        ...prev,
        [search]: result.data,
      }));
      console.info('calling api 😇');
    }, 500);

    setTimer(newTimer);
  };

  console.log(results);

  return (
    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
      <input value={searchKeyword} type='text' onChange={inputChange} />
      <button>검색</button>
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
        ) : (
          results[searchKeyword] &&
          results[searchKeyword].map((result) => (
            <Results key={result.sickCd} result={result} />
          ))
        )}
      </ul>
    </div>
  );
};

export default Search;
