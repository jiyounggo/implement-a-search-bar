import { ListItem, ListItemIcon, ListItemText, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchSuggestionItem = ({ sickNm, className }) => {
  return (
    <SearchListItem className={className}>
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <ListItemText>{sickNm}</ListItemText>
    </SearchListItem>
  );
};

export default SearchSuggestionItem;

const SearchListItem = styled(ListItem)`
  &.active {
    background: #eee;
  }
`;
