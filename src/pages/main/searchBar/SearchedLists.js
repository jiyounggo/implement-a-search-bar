import React from "react";
import { checkWordBold } from "../../../utils/utils";
import { List, Ul } from "./Input.style";

function SearchedLists({ searchValue, searchedData, isInputFocused, loading }) {
  return (
    searchedData.length > 0 &&
    isInputFocused && (
      <Ul>
        {loading ? (
          <List>검색중...</List>
        ) : (
          searchedData.map((data) =>
            checkWordBold(data.sickCd, searchValue, data.sickNm)
          )
        )}
      </Ul>
    )
  );
}

export default SearchedLists;
