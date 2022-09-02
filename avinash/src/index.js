<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { Profile } from './components/Profile';
import { Home } from './pages/myHome';
import { LabTest } from './pages/LabTest';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Navbar/>
    <Routes>
       <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
        <Route exact path="/profile" element={<Profile/>}></Route>
        <Route exact path="/labtest" element={<LabTest/>}></Route>
    </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
>>>>>>> 9f2b111 (.)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
