import React, { useState } from 'react';
import Results from './Results';
import axios from 'axios';
import NoResult from './NoResult';

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [timer, setTimer] = useState(null);

  const inputChange = (e) => {
    const search = e.target.value;

    clearTimeout(timer);

    const newTimer = setTimeout(async () => {
      const result = await axios.get(`http://localhost:4000/sick?q=${search}`);
      if (search === '') {
        setResults([]);
        return;
      }
      if (e.target.value !== '' && result.data.length < 1) {
        setResults({ flag: true });
        return;
      }
      setResults(result.data);
      console.info('calling api', result.data);
    }, 500);

    setTimer(newTimer);
  };

  return (
    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
      <input type='text' onChange={inputChange} />
      <button>검색</button>
      <ul>
        {results.flag === true ? (
          <NoResult />
        ) : (
          results.map((result) => (
            <Results key={result.sickCd} result={result} />
          ))
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
