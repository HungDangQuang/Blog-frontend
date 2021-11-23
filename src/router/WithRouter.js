import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register.jsx";
import Blog from "../pages/Blog.jsx";
import Create from "../pages/Create.jsx";
import View from "../pages/View";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import Update from "../pages/Update";

const WithRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<Create />} />
      <Route path="/details/:id" element={<View />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
};

export default WithRouter;
