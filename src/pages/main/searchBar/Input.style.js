import styled from "styled-components";
export const InputWrapper = styled.div`
  width: 30rem;
  height: 30rem;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 4rem;
  padding: 0.5rem 1rem;
  border-radius: 3rem;
  font-size: 1rem;
  border: none;
  &:focus {
    outline: 1px solid blue;
  }
`;

export const Ul = styled.ul`
  width: 100%;
  background-color: #fff;
  border-radius: 2rem;
  margin-top: 0.5rem;
  padding: 1.5rem 0 1.5rem 0;
`;

export const List = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2rem;
  padding-left: 2rem;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
  background-color: ${(props) => (props.isFocus ? "lightgray" : "#fff")};
`;
