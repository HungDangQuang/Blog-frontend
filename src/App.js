import React from "react";
import { Login } from './Pages/Login'
import { Routes,BrowserRouter, Route } from 'react-router-dom';
import { history } from './Redux/_helpers';
import { Register } from "./Pages/Register";


const App = () =>  {
    return (                
        <BrowserRouter history={history}>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;