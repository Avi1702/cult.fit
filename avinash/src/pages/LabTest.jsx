import React, { useEffect, useState } from "react";
import loadingimage from '../loading.gif';
import { Box, Button, Typography } from "@mui/material";
import { AdsSlider } from "../components/AdsSlider";
import { useDispatch, useSelector } from "react-redux";
import {
  ErrorLabTest,
  getLabTest,
  loadingLabTest,
} from "../redux/LabTest/action";
import axios from "axios"
import { LabTestCard } from "../components/LabTestCard";
export const LabTest = () => {
  const { loading, error, LabTest } = useSelector((state) => state.labTest);
  const [senior, setSenior]=useState([]);
//   let seniorMale,seniorFemale
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingLabTest());
    axios({
      method: "get",
      url: "http://localhost:8080/labTest",
    })
      .then((res) => dispatch(getLabTest(res.data)))
      .catch((error) => dispatch(ErrorLabTest()));
      
  }, [dispatch]);


  return (

    <div>
        {
            
        loading? <img src={loadingimage} alt="loading" width="10%" style={{marginTop:"15%"}}/>: <div style={{ overflow: "hidden" }}>
        {/* <img src={loading} alt="loading"/> */}
  
        <Box
          variant="div"
          sx={{ width: "100%", backgroundColor: "rgb(57,58,59)" }}
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
        <img
          width="100%"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_1360:150/dpr_2/image/vm/470a6641-25c1-4bf5-9efd-a9b6713d5f29.png"
          alt="ads"
        />
        <AdsSlider />
        <Box variant="div" sx={{marginTop:"60px", textAlign:"left",width:"85%",margin:"auto"}}>
            <Typography variant='h6' component='h2' sx={{fontWeight:"600",fontSize:"23px"}}>
            Lab Tests
            </Typography>
            <Typography variant='caption' display="block" gutterBottom sx={{color:"rgb(144,142,142)",fontSize:"15px"}}>
            Assess and monitor your health from the comfort of your home now.
            </Typography>

            <Box variant="div" sx={{width:"100%",display:"flex", flexWrap:"wrap",gap:"20px",marginTop:"30px",rowGap:"50px"}}>
                {
                    LabTest.map((ele)=><LabTestCard labTest={ele}/>)
                }

            </Box>
          

        </Box>
        {
            console.log(senior)
        }
        
       {/* <Box variant="div" sx={{marginTop:"60px", textAlign:"left",width:"85%",margin:"auto"}}>
            <Typography variant='h6' component='h2' sx={{fontWeight:"600",fontSize:"23px"}}>
            Tests for Senior Citizen
            </Typography>
            <Box variant="div" sx={{width:"100%",display:"flex", flexWrap:"wrap",gap:"20px",marginTop:"30px",rowGap:"50px"}}>
            
                   <LabTestCard labTest={seniorMale}/>
                
            </Box>

        </Box> */}

      </div>
    
        }
    </div>
   
  );
};
