import React, { useEffect, useState } from "react";
import loadingimage from "../loading.gif";
import { Box, Button, Divider, Typography } from "@mui/material";
import { AdsSlider } from "../components/AdsSlider";
import { useDispatch, useSelector } from "react-redux";
import {
  ErrorLabTest,
  getLabTest,
  loadingLabTest,
} from "../redux/LabTest/action";
import axios from "axios";
import { LabTestCard } from "../components/LabTestCard";
import { Faqs } from "../components/jsonfiles/Faqs";
import {Faq} from "../components/Faq"
import { senior } from "../components/jsonfiles/senior";
import { LabTestBar } from "../components/LabTestBar";
import { LabTestFaq } from "../components/jsonfiles/LabTestFaq";
import { Questions } from "../components/Questions";
export const LabTest = () => {
  const { loading, error, LabTest} = useSelector(
    (state) => state.labTest
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingLabTest());
    axios({
      method: "get",
      url: "http://localhost:8058/labTest",
    })
      .then((res) => dispatch(getLabTest(res.data)))
      .catch((error) => dispatch(ErrorLabTest()));
  }, [dispatch]);
  return (
    <div style={{backgroundColor:"white"}}>
      {loading ? (
        <img
          src={loadingimage}
          alt="loading"
          width="10%"
          style={{ marginTop: "15%" }}
        />
      ) : (
        <div style={{ overflow: "hidden" }}>
          {/* <img src={loading} alt="loading"/> */}

          <LabTestBar/>
          <img
            width="100%"
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_1360:150/dpr_2/image/vm/470a6641-25c1-4bf5-9efd-a9b6713d5f29.png"
            alt="ads"
          />
          <AdsSlider />
          <Box
            variant="div"
            sx={{
              marginTop: "60px",
              textAlign: "left",
              width: "80%",
              margin: "auto",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontWeight: "600", fontSize: "23px" }}
            >
              Lab Tests
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{ color: "rgb(144,142,142)", fontSize: "15px" }}
            >
              Assess and monitor your health from the comfort of your home now.
            </Typography>

            <Box
              variant="div"
              sx={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "auto auto auto auto auto",
                gap: "20px",
                marginTop: "30px",
                rowGap: "50px",
                
              }}
            >
              {LabTest.map((ele) => (
                <LabTestCard labTest={ele} key={ele._id} />
              ))}
            </Box>
            <Divider sx={{marginTop:"20px"}}/>
            <Typography
              variant="h6"
              component="h2"
              sx={{ fontWeight: "600", fontSize: "23px", marginTop: "30px" }}
            >
              Tests for Senior Citizen
            </Typography>
            <Box
              variant="div"
              sx={{
                width: "100%",
                display: "flex",
                gap: "20px",
                marginTop: "30px",
                rowGap: "50px",
                marginBottom:"20px"
              }}
            >
              {senior.map((ele) => (
                <LabTestCard labTest={ele} key={ele.id}/>
              ))}
            </Box>
          </Box>
        <Box variant="div" sx={{width:"100%", backgroundColor:"rgb(23,26,38)"}}>
            <Box variant="div" sx={{width:"80%",margin:"auto",display:"flex",alignItem:"center",justifyContent:"space-between"}}>
            <Typography
              variant="h3"
              component="h2"
              sx={{ fontWeight: "600", marginTop: "30px",color:"white" }}
            >
              FAQS
            </Typography>
            <Typography
              variant="div"
              sx={{ fontWeight: "600", fontSize:"20px",marginTop: "30px",color:"white" }}
            >
              SEE ALL
            </Typography>
            </Box>    
            <Box variant="div" sx={{width:"80%",margin:"auto"}}>
                {
                  Faqs.map((ele)=><Faq faqs={ele} key={ele.id}/>)
                }
            </Box>


        </Box>

        <Box>
          <Typography variant="h1" sx={{color:"rgb(110,110,110)",fontWeight:"700"}}>
          THE BEST
          </Typography>
          <Typography variant="h2" sx={{color:"rgb(204,204,204)",fontWeight:"700"}}>
          DOCTOR GIVES
          </Typography>
          <Typography variant="h3" sx={{color:"rgb(204,204,204)",fontWeight:"700"}}>
          THE LEAST MEDICINE
          </Typography>
        </Box>

        <Box variant="div" sx={{width:"90%",backgroundColor:"rgb(23,26,38)", columnCount:"2", padding:"5%",columnGap:"50px",marginTop:"40px"}}>
           {
            LabTestFaq.map((ele)=><Questions que={ele} key={Object.keys(ele)}/>)
           }     

      </Box>


        </div>
      )}
    </div>
  );
};
