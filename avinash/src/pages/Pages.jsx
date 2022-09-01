import React from 'react';
import { Route, Routes } from "react-router-dom";
import { LabTest } from './LabTest';
import { TestDetailsPage } from './TestDetailsPage';

export const Pages=()=>{
    return(<div>
        <Routes>
            <Route path="care/diagnostic-tests" element={<LabTest/>}></Route>
            <Route path="care/diagnostic-tests/:name" element={<TestDetailsPage/>}></Route>
        </Routes>
    </div>)
}