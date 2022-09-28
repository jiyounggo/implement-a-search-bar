export const checkWordBold = (compareWord, word) => {
  const reg = new RegExp(`(${compareWord})`, "g");
  const parts = word.split(reg);

  return parts.map((part) =>
    part.match(reg) ? <p style={{ fontWeight: "600" }}>{part}</p> : part
  );
};
