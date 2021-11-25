import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register.jsx";
import Blog from "../pages/Blog.jsx";
import Create from "../pages/Create.jsx";
import View from "../pages/View";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import Update from "../pages/Update";
import CommentPage from "../pages/CommentPage.jsx";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
const WithRouter = () => {
  const user = useSelector((state) => state.user);

  return (
    <Routes>
      <Route
        path="/admin "
        render={() => {
          return user.isLogin ? <Admin /> : <Navigate to="/login" />;
        }}
      />

      <Route exact path="/home" element={<Blog />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<Create />} />
      <Route path="/home/details/:id" element={<View />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="/comment" element={<CommentPage />} />
    </Routes>
  );
};

export default WithRouter;
