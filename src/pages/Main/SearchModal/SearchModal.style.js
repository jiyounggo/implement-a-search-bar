import styled from 'styled-components';

export const SearchContainer = styled.div`
  max-width: 490px;
  margin: 0 auto;
  display: flex;
  background-color: white;
  border: 2px solid;
  border-color: ${props => props.border_color};
  border-radius: 42px;

  .search-write-box {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 410px;
    height: 75px;
    padding-left: 20px;

    .search-write {
      width: 100%;
      padding: 30px 10px 20px 24px;
      border: none;

      &:focus {
        outline: none;
      }

      &::placeholder {
        font-size: 1.2rem;
      }
    }
  }

  .search-click-wrap {
    display: flex;
    justify-content: center;
    align-items: center;

    .search-click-box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      border: 0;
      border-radius: 100%;
      background-color: #007be9;
      cursor: pointer;
    }
  }
`;
