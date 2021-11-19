import React from "react";
import Login from "./pages/Login.jsx";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import history from "./helper/history";
import Register from "./pages/Register.jsx";
import Blog from "./pages/Blog.jsx";

const App = () => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
