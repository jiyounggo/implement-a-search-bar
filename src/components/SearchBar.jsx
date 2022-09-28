import React, { useState, useRef } from 'react';
import Results from './Results';
import NoResult from './NoResult';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchThunk } from '../modules/searchSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.search.results);
  const inputRef = useRef();
  const [timer, setTimer] = useState(null);

  const inputChange = (e) => {
    const search = inputRef.current.value;
    clearTimeout(timer);

    const newTimer = setTimeout(async () => {
      if (search === '') {
        // console.log('첫번째');
        dispatch({ type: 'searchSlice/update', payload: [] });
        return;
      }
      dispatch(getSearchThunk(search));
    }, 500);

    setTimer(newTimer);
  };

  // const onKeyDown = (e) =>{
  //   if(results.length>0){
  //     switch (e.key){
  //       case ArrowDown:

  //     }
  //   }
  // }

  return (
    <div style={{ marginTop: '4rem', textAlign: 'center' }}>
      <input ref={inputRef} type='text' onChange={inputChange} />
      <button>검색</button>
      <ul>
        {inputRef.current?.value?.length > 0 && results.length < 1 ? (
          <NoResult />
        ) : (
          results.map((result) => (
            <Results
              key={result.sickCd}
              result={result}
              inputRef={inputRef.current.value}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
