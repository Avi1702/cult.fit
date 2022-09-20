import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import TestModal from "./TestModal";
export const TestCard = ({ test,testData }) => {
  const [open,setOpen]=useState(false);
  
  return (
  <Box variant="div" sx={{maxWidth:"150px",textAlign:"center",cursor:"pointer"}} onClick={()=>setOpen(!open)}>
    <Box variant="div" sx={{width:"130px",textAlign:"center", marginLeft:"auto",marginRight:"auto",padding:"15px 0px",boxShadow:"0px 2px 6px #e1e1e1"}}>
    <img  
        width="50"  
        height="50"
        src={test.image}
        alt={test.name}
    />
    </Box>
    
    <Typography color="text.secondary" sx={{fontSize:"13px",marginTop:"5px",textAlign:"left",marginLeft:"6px"}}>
{test.name}
    </Typography>

    <TestModal  open={open} setOpen={setOpen}   testData={testData}/>

  </Box>
  );
};
