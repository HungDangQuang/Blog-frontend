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

const getTokenAdmin = (token) => {
  return localStorage.setItem("adminToken", JSON.stringify(token));
};

const getAccessTokenAdmin = () => {
  const token = JSON.parse(localStorage.getItem("adminToken"));
  return token;
};

export {
  getAccessToken,
  getToken,
  getID,
  getAccessID,
  getTokenAdmin,
  getAccessTokenAdmin,
};
