import { Card, CardContent, InputAdornment, SvgIcon, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ onChange, setTarget }) => {
  const changeHandler = ({ target: { value } }) => {
    onChange(value);
    setTarget(-1);
  };
  const keyDownHandler = ({ key }) => {
    switch (key) {
      case 'ArrowUp':
        setTarget(state => {
          if (state === 0) return state;
          return state - 1;
        });
        break;
      case 'ArrowDown':
        setTarget(state => {
          //TODO 마지막 index에 대한 처리
          return state + 1;
        });
        break;
      default:
        break;
    }
  };

  return (
    <Card>
      <CardContent>
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon color="action" fontSize="small">
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            ),
          }}
          placeholder="질환명을 입력해 주세요."
          variant="outlined"
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
        />
      </CardContent>
    </Card>
  );
};

export default SearchInput;
