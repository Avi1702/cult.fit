import { Box, Typography } from '@mui/material';
import React from 'react';
export const Questions=({que})=>{
    const keys=Object.keys(que)
    const value=Object.values(que)
    return (<Box variant="div" sx={{marginTop:"30px", textAlign:"left"}}>
        <Typography variant='h6' component="h2" sx={{color:"rgb(162,163,156)",lineHeight:"30px"}}>
    {keys}
        </Typography><br/>
        <Typography variant="div" component="p" sx={{color:"rgb(89,95,104)",lineHeight:"25px"}}>
            {value}
        </Typography>

    </Box>)
}