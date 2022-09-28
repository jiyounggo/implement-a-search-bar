import React, { memo } from 'react';
import boldText from '../util/boldText';

const Results = memo(({ result, inputRef }) => {
  return <li>{boldText(result.sickNm, inputRef)}</li>;
});

export default Results;
