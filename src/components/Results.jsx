import React, { memo } from 'react';

const Results = memo(({ result }) => {
  return <li>{result.sickNm}</li>;
});

export default Results;
