import React from "react";
import LoginForm from "./components/authentication/Login/LoginForm";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <LoginForm/>
    </BrowserRouter>
  );
}

export default App;
