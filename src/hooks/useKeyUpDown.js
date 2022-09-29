import { useEffect, useState } from "react";

function useKeyUpDown(dataLength) {
  const [curIndex, setCurIndex] = useState(0);

  const handleKey = ({ key }) => {
    switch (key) {
      case "ArrowUp":
        setCurIndex((cur) => {
          return cur === 0 ? dataLength - 1 : cur - 1;
        });
        break;
      case "ArrowDown":
        setCurIndex((cur) => {
          return cur === dataLength - 1 ? 0 : cur + 1;
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (dataLength === 0) return;
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [dataLength]);

  return [curIndex, setCurIndex];
}

export default useKeyUpDown;
