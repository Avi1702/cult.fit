import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
//new store setup
import {reducer} from "./redux/Auth/reducer";
import {createStore} from 'redux';

const store= createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
    <Provider store={store}>
    <App></App>
    </Provider>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
