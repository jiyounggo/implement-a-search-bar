import React, { useCallback, useState } from "react";
import useSearchApi from "../../hooks/useSearchApi";
import Input from "./serachBar/Input";

function Main() {
  const [searchValue, setSearchValue] = useState("");
  const [searchedData, loading] = useSearchApi(searchValue);
  const handleChange = useCallback((e) => {
    setSearchValue(e.target.value);
  });

  return <Input searchValue={searchValue} handleChange={handleChange} />;
}

export default Main;
