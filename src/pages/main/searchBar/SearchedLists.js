import React from "react";
import { List, Ul } from "./Input.style";

function SearchedLists({ searchedData, isInputFocused, loading }) {
  return (
    searchedData.length > 0 &&
    isInputFocused && (
      <Ul>
        {loading ? (
          <List>검색중...</List>
        ) : (
          searchedData.map((data) => (
            <List key={data.sickCd}>{data.sickNm}</List>
          ))
        )}
      </Ul>
    )
  );
}

export default SearchedLists;
