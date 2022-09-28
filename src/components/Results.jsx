import React, { memo } from 'react';
import boldText from '../util/boldText';
import { Li } from './Results.style';
import { FaSearch } from 'react-icons/fa';

const Results = memo(({ result, input }) => {
  return (
    <Li>
      <FaSearch />
      {boldText(result.sickNm, input)}
    </Li>
  );
});

export default Results;
