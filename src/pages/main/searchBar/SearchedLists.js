import React from "react";
import { List, Ul } from "./Input.style";

function SearchedLists({ searchedData, isInputFocused }) {
  return (
    searchedData.length > 0 &&
    isInputFocused && (
      <Ul>
        {searchedData.map((data) => (
          <List key={data.sickCd}>{data.sickNm}</List>
        ))}
      </Ul>
    )
  );
}

export default SearchedLists;
