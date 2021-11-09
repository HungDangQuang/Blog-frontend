import React from "react";
import { Login } from './Pages/Login'
import { Routes,BrowserRouter, Route } from 'react-router-dom';
import { history } from './Redux/_helpers';


const App = () =>  {
    return (                
        <BrowserRouter history={history}>
            <Routes>
                <Route path="/" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;