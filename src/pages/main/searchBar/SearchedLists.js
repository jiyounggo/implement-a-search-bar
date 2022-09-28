import React from "react";
import useKeyUpDown from "../../../hooks/useKeyUpDown";
import { checkWordBold } from "../../../utils/utils";
import { List, Ul } from "./Input.style";

function SearchedLists({ searchValue, searchedData, isInputFocused, loading }) {
  const [curIndex, setCurIndex] = useKeyUpDown(searchedData?.length);

  return (
    searchedData.length > 0 &&
    isInputFocused && (
      <Ul>
        {loading ? (
          <List>검색중...</List>
        ) : (
          searchedData.map((data, index) => (
            <List
              key={data.sickCd}
              isFocus={curIndex === index}
              onMouseEnter={() => setCurIndex(index)}
            >
              {checkWordBold(searchValue, data.sickNm)}
            </List>
          ))
        )}
      </Ul>
    )
  );
}

export default SearchedLists;
