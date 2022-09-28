import { useEffect, useState } from "react";
import { MAX_DATA } from "../utils/constant";

function useKeyUpDown(checkDataLength) {
  const [curIndex, setCurIndex] = useState(0);

  const handleKey = ({ key }) => {
    switch (key) {
      case "ArrowUp":
        setCurIndex((cur) => {
          return cur === 0 ? MAX_DATA - 1 : cur - 1;
        });
        break;
      case "ArrowDown":
        setCurIndex((cur) => {
          return cur === MAX_DATA - 1 ? 0 : cur + 1;
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (checkDataLength === 0) return;
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [checkDataLength]);

  return [curIndex, setCurIndex];
}

export default useKeyUpDown;
