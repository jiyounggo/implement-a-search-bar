import React, { useState } from "react";
import Results from "./Results";
import NoResult from "./NoResult";
import { getSearchResults } from "../api/api";
import { MAX_DATA } from "../util/constant";
import { Container, SearchInput, ResultsBox } from "./Search.style";

const Search = () => {
  const [results, setResults] = useState({});
  const [timer, setTimer] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
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

      if (search === "") {
        return;
      }
      if (e.target.value !== "" && result.length < 1) {
        setToggle(true);
        return;
      }

      if (result.length >= MAX_DATA) {
        result = result.slice(0, MAX_DATA);
      }

      setResults((prev) => ({
        ...prev,
        [search]: result,
      }));
    }, 500);

    setTimer(newTimer);
  };

  return (
    <Container>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h2>
      <SearchInput
        value={searchKeyword}
        type="text"
        onChange={inputChange}
        onFocus={() => {
          SetIsOpen(true);
        }}
        onBlur={() => SetIsOpen(false)}
        placeholder="질환명을 입력해 주세요"
      />

      <ul>
        {toggle === true ? (
          <NoResult />
        ) : isOpen === false ? null : (
          <ResultsBox>
            {results[searchKeyword] &&
              results[searchKeyword].map((result, index) => (
                <Results
                  key={result.sickCd}
                  result={result}
                  index={index}
                  dataLength={results[searchKeyword].length}
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
