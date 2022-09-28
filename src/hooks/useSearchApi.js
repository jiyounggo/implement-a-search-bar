import React, { useState, useEffect } from "react";
import { get } from "../api/api";

function useSearchApi(searchValue) {
  const [searchedData, setSearchedData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await get(searchValue);
      setSearchedData(data);
      setLoading(false);
    };
    fetchData();
  }, [searchValue]);

  return [searchedData, loading];
}

export default useSearchApi;
