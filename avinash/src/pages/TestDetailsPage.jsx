import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export const TestDetailsPage=()=>{
    const {test}=useSelector((state)=>state.labTest)
    
    
    console.log(test)
    return(<div>
    
    </div>)
}