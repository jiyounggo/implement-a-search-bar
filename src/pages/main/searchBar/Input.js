import React, { useCallback, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import useSearchApi from "../../../hooks/useSearchApi";
import { InputWrapper, SearchInput } from "./Input.style";
import SearchedList from "./SearchedLists";

function Input() {
  const [searchValue, setSearchValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const debouncedSearchValue = useDebounce(searchValue, 200);
  const [searchedData, loading] = useSearchApi(debouncedSearchValue);

  const handleChange = useCallback((e) => {
    setSearchValue(e.target.value);
  });
  return (
    <InputWrapper>
      <SearchInput
        placeholder="질환명을 입력해 주세요."
        onChange={handleChange}
        value={searchValue}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
      <SearchedList
        searchedData={searchedData}
        isInputFocused={isInputFocused}
      />
    </InputWrapper>
  );
}

export default Input;
