import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Cart } from '../components/Cart';
import Fitness from './Fitness/Fitness';
import { LabTest } from './LabTest';
import { Home } from './myHome';
import { TestDetailsPage } from './TestDetailsPage';
import {Profile} from "../components/Profile"
import FreeTrial from './Fitness/Slider/FreeTrial';
// import Fitness from "./Fintness/Fitness"

export const Pages=()=>{
    return(<div>
        <Routes>
            <Route path="/care/diagnostic-tests" element={<LabTest/>}></Route>
            <Route path="/fitness" element={<Fitness/>}></Route>
            <Route path="/care/diagnostic-tests/:name" element={<TestDetailsPage/>}></Route>
             <Route exact path="/" element={<Home/>}></Route>
             <Route exact path="/cart" element={<Cart/>}></Route>
             <Route exact path="/profile" element={<Profile/>}></Route>
             <Route exact path="/freetrial" element={<FreeTrial/>}></Route>
        </Routes>
    </div>)
}