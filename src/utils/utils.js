import { List } from "../pages/main/searchBar/Input.style";

export const checkWordBold = (key, compareWord, word) => {
  const reg = new RegExp(`(${compareWord})`, "g");
  const parts = word.split(reg);

  return (
    <List key={key}>
      {parts.map((part) =>
        part.match(reg) ? <p style={{ fontWeight: "600" }}>{part}</p> : part
      )}
    </List>
  );
};
