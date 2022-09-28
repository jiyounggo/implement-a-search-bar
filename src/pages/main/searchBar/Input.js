import React, { useCallback, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import useSearchApi from "../../../hooks/useSearchApi";

function Input() {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 200);
  const [searchedData, loading] = useSearchApi(debouncedSearchValue);

  const handleChange = useCallback((e) => {
    setSearchValue(e.target.value);
  });
  return (
    <input
      placeholder="질환명을 입력해 주세요."
      onChange={handleChange}
      value={searchValue}
    />
  );
}

export default Input;
