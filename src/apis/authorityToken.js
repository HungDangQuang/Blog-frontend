const getToken = (token) => {
  return localStorage.setItem("blogToken", JSON.stringify(token));
};

const getAccessToken = () => {
  const token = JSON.parse(localStorage.getItem("blogToken"));
  return token;
};

const getID = (id) => {
  return localStorage.setItem("blogID", id);
};

const getAccessID = () => {
  const id = localStorage.getItem("blogID");
  return id;
};

export { getAccessToken, getToken, getID, getAccessID };
