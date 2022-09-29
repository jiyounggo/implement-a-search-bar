import React, { useEffect } from 'react';
import { useState } from 'react';
import { SearchContainer } from './SearchModal.style';
import SearchIcon from '../../../styles/img/SearchIcon.png';
import useInput from '../../../hooks/useInput';

const SearchModal = () => {
  const [clickSearchInput, setClickSearchInput] = useState(false);
  const [searchInput, setSearchInput] = useInput(null);

  const handleClickOpenModal = () => {
    setClickSearchInput(prev => !prev);
  };

  const cache = {};

  async function getData(url) {
    const currentTime = new Date();
    if (searchInput === '') {
      return;
    } else if (cache[url] !== undefined) {
      if (currentTime - cache[url].time < 60000 * 5) return cache[url].value;
      delete cache[url];
      //   console.info('delete cache');
    }
    await fetch(url)
      .then(response => response.json())
      .then(json => (cache[url] = { time: currentTime, value: json }));
    // console.info('캐시 콜');
    return cache[url].value;
  }

  //   console.info('cachecachecache', cache[`http://localhost:4000/sick?q=담낭`]);

  //   console.info(caches.open(name));

  useEffect(() => {
    const debounce = setTimeout(() => {
      getData(`http://localhost:4000/sick?q=${searchInput}`).then(data => console.info(data));
    }, 1000);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchInput]);

  return (
    <SearchContainer border_color={clickSearchInput ? 'rgb(0, 123, 233)' : 'white'}>
      <div className="search-write-box">
        {clickSearchInput ? (
          <>
            <input
              className="search-write"
              onBlur={handleClickOpenModal}
              name="inputData"
              autoFocus
              onChange={setSearchInput}
            />
          </>
        ) : (
          <div onClick={handleClickOpenModal}>질환명을 입력해 주세요.</div>
        )}
      </div>
      <div className="search-click-wrap">
        <button className="search-click-box">
          <img src={SearchIcon} alt="search" />
        </button>
      </div>
    </SearchContainer>
  );
};

export default SearchModal;
