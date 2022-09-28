import { useState, useEffect } from "react";
import { get } from "../api/api";

function useSearchApi(searchValue) {
  const [searchedData, setSearchedData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await get(searchValue);
        data.length >= 7
          ? setSearchedData(data.slice(0, 7))
          : setSearchedData(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    searchValue ? fetchData() : setSearchedData([]);
  }, [searchValue]);

  return [searchedData, loading];
}

export default useSearchApi;
