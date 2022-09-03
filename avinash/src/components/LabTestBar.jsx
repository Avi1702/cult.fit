import { Box, Button } from '@mui/material';
import React from 'react';

export const LabTestBar=()=>{
    return(
        <Box
            variant="div"
            sx={{ width: "100%", backgroundColor: "rgb(57,58,59)" ,textAlign:"center",position:"sticky",top:0,position:"-webkit-sticky",zIndex:"10"}}
          >
            <Button
              variant="contained"
              sx={{
                color: "rgb(235,235,235)",
                backgroundColor: "rgb(29,29,33)",
                border: "none",
                textTransform: "none",
                margin: "10px",
                fontSize: "15px",
                cursor: "pointer",
                "&:hover": {
                  color: "#c2c0c0",
                  backgroundColor: "rgb(29,29,33)",
                  border: "none",
                },
              }}
            >
              Lab Tests
            </Button>
          </Box>
    );
}