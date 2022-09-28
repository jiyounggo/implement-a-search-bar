const server = process.env.REACT_APP_SERVER_API;
const get = async (query) => {
  const res = await fetch(`${server}?q=${query}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("검색 결과를 가져오는데 실패 했습니다.");
  }

  return res.json();
};

export { get };
