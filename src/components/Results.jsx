import React, { memo } from "react";
import boldText from "../util/boldText";
import { Li } from "./Results.style";
import { FaSearch } from "react-icons/fa";
import useKeyUpDown from "../hooks/useKeyUpDown";

const Results = memo(({ result, index, input, dataLength }) => {
  const [curIndex] = useKeyUpDown(dataLength);

  return (
    <Li isFocus={curIndex === index}>
      <FaSearch />
      {boldText(result.sickNm, input)}
    </Li>
  );
});

export default Results;
