import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.theme.maxWidth};
  background-color: ${(props) => props.theme.background};
  border: 1px solid black;
  margin: 3rem auto;
  text-align: center;
`;
