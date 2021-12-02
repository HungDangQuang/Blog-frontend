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
import ManagerUpdate from "../pages/Update";
import CommentPage from "../pages/CommentPage.jsx";
import User from "../pages/User";
import LoginA from "../pages/LoginA.jsx";

import PrivateRoute from "./PrivateRouter";
const WithRouter = () => {
  console.log(`Token of admin : ${localStorage.getItem("adminToken")} `);
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route path="/admin/login" element={<LoginA />} />
      <Route
        path="/user"
        element={
          <PrivateRoute>
            <User />
          </PrivateRoute>
        }
      />
      <Route
        path="/comment"
        element={
          <PrivateRoute>
            <CommentPage />
          </PrivateRoute>
        }
      />

      <Route exact path="/" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<Create />} />
      <Route path="/details/:id" element={<View />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/update/:id" element={<ManagerUpdate />} />
    </Routes>
  );
};

export default WithRouter;
