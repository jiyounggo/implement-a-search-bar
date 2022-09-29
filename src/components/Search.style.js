import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(202, 233, 254);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
`;

export const SearchInput = styled.input`
  width: 50%;
  height: 40px;
  border: none;
  border-radius: 2rem;
  font-size: 1rem;
  padding: 0 1rem 0 1rem;
`;

export const ResultsBox = styled.div`
  width: 450px;
  height: 100%;
  padding: 1.2rem;
  margin: 2rem;
  border-radius: 2rem;
  /* text-align: center; */
  background-color: white;
`;
