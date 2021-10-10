import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App.js';
import Navbar from "./components/Navbar.jsx";

ReactDOM.render(
    <BrowserRouter>
        <Navbar />
        <App /> 
    </BrowserRouter>,
    document.querySelector('#root')        
)