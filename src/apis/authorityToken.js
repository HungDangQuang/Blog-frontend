const getToken = (token) => {
  return localStorage.setItem("blogToken", JSON.stringify(token));
};

const getAccessToken = () => {
  const token = JSON.parse(localStorage.getItem("blogToken"));
  return token;
};

export { getAccessToken, getToken };
