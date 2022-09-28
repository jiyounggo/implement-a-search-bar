const server = process.env.REACT_APP_SERVER_API;
const get = async (query) => {
  const res = await fetch(`${server}?q=${query}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
};

export { get };
