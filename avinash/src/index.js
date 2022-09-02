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
import { Home } from './pages/Home';

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
    </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
