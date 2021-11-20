import React from "react";
import Login from "./pages/Login.jsx";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import history from "./helper/history";
import Register from "./pages/Register.jsx";
import Blog from "./pages/Blog.jsx";
import Create from "./pages/Create.jsx";
import ViewDetail from "./components/detail/ViewDetail.jsx";
import About from "./components/about/Index";
import Contact from "./components/contact/index";
const App = () => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Blog />} />
        <Route path="/create-post" element={<Create />} />
        <Route path="/detail" element={<ViewDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
