import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const auth = localStorage.getItem("blogToken");
  return auth != null ? children : <Navigate to="/admin/login" />;
}

export default PrivateRoute;
