import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import testSvg from "../components/logo/tests.svg";
export const TestDetailsCard=({test})=>{

    return (<Box>
        <Card sx={{width:"400px",borderRadius:"20px", height:"500px"}}>
            <CardContent sx={{display:"flex",alignItems:"center",gap:"20px"}}>
                <CardMedia
                 component="img"
                 height="auto"
                 image={test.image}
                 alt={test.name}
                 sx={{ objectFit: "fill" ,width:"80px"}}
                />
                <Box variant="div">
            <Typography
                  variant="h7"
                  component="h7"
                  sx={{ fontWeight: "700", letterSpacing: "1px" }}
                >
                  {test.name}
                </Typography>
                <Box sx={{}}>
                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <img src={testSvg} width="15px" alt="testsvg" />

                    <Typography sx={{fontSize:"14px"}}>1 Tests</Typography>
                  </Box>
                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <AccessTimeIcon sx={{ fontSize: "15px" }} />

                    <Typography sx={{fontSize:"14px"}}>{test.report}</Typography>
                  </Box>
                </Box>

            </Box>
           
            
            </CardContent>
            <CardContent>
            <Typography sx={{padding:"0px 15px",fontSize:"15px"}} color="black">
                  {test.details}
                </Typography>
            </CardContent>
            
        </Card>

    </Box>)
}