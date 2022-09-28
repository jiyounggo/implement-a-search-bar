import React from "react";

function Input({ searchValue, handleChange }) {
  return (
    <input
      placeholder="질환명을 입력해 주세요."
      onChange={handleChange}
      value={searchValue}
    />
  );
}

export default Input;
