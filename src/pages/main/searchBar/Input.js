import React, { useCallback, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import useSearchApi from "../../../hooks/useSearchApi";
import SearchedList from "./SearchedLists";
import { InputWrapper, SearchInput } from "./Input.style";

function Input() {
  const [searchValue, setSearchValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const debouncedSearchValue = useDebounce(searchValue, 200);
  const [searchedData, loading] = useSearchApi(debouncedSearchValue);

  const handleChange = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

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
        searchValue={searchValue}
        searchedData={searchedData}
        isInputFocused={isInputFocused}
        loading={loading}
      />
    </InputWrapper>
  );
}

export default Input;
