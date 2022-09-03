import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import testSvg from "../components/logo/tests.svg";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { LabTestBar } from "../components/LabTestBar";
import { TestCard } from "../components/TestCard";
import { Questions } from "../components/Questions";
import { useState } from "react";
import { AddPeopleModel } from "../components/AddPeopleModel";

export const TestDetailsPage = () => {
  const testData = JSON.parse(localStorage.getItem("labTest"));
  const [openPModel,setOpenPModel]=useState(false);
 
  return (
    <Box variant="div">
      <LabTestBar />
      <Box
        variant="div"
        sx={{
          width: "90%",
          display: "flex",
          gap: "30px",
          margin: "auto",
          marginTop: "50px",
        }}
      >
        <Box variant="div" sx={{ width: "40%", marginLeft: "40px" }}>
          <Card sx={{ maxWidth: "500px", boxShadow: "0 3px 5px #d3d3d3" }}>
            <CardMedia
              component="img"
              height="auto"
              image={testData.coverImage}
              alt={testData.title}
              sx={{ objectFit: "fill" }}
            />
          </Card>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Box
            sx={{
              textAlign: "left",
              color: "rgb(136,142,158)",
              display: "flex",
              justifyItems: "center",
            }}
          >
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                cursor: "pointer",
                fontWeight: "100",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              Home
            </Typography>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "23px", justifyItems: "center" }}
            />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                cursor: "pointer",
                fontWeight: "100",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              Care
            </Typography>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "23px", justifyItems: "center" }}
            />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                cursor: "pointer",
                fontWeight: "100",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              Diagnostic Tests
            </Typography>
            <KeyboardArrowRightIcon
              sx={{ fontSize: "23px", justifyItems: "center" }}
            />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                color: "rgb(0,0,82)",
                fontWeight: "100",
                fontSize: "14px",
                letterSpacing: "0.5px",
              }}
            >
              {testData.title}
            </Typography>
          </Box>
          <Box variant="div" sx={{ marginTop: "20px" }}>
            <Card
              sx={{
                minWidth: 275,
                textAlign: "left",
                boxShadow: "0px 3px 6px 2px #d3d3d3",
              }}
            >
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "700", letterSpacing: "1px" }}
                >
                  {testData.title}
                </Typography>
                <Box variant="div" sx={{ display: "flex" }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "400",
                      color: "#6f737d",
                      letterSpacing: "1.2px",
                      textDecoration: "line-through",
                    }}
                  >
                    {"\u20B9"}
                    {testData.price}
                  </Typography>
                  &nbsp;
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "700" }}
                  >
                    {"\u20B9"} {testData.offerPrice}
                  </Typography>
                </Box>
              </CardContent>
              <CardContent sx={{ marginTop: "-8px" }}>
                <Typography sx={{}} color="text.secondary">
                  {testData.Details}
                </Typography>
              </CardContent>
              <CardContent
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box sx={{}}>
                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <img src={testSvg} width="16px" alt="testsvg" />

                    <Typography sx={{}}>{testData.test.length} Tests</Typography>
                  </Box>
                  <Box
                    sx={{
                      color: "text.secondary",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <AccessTimeIcon sx={{ fontSize: "16px" }} />

                    <Typography>Report ready in {testData.report}</Typography>
                  </Box>
                </Box>
                <CardActions>
                  <Button
                    variant="contained"
                    onClick={()=>setOpenPModel(!openPModel)}
                    sx={{
                      backgroundColor: "rgb(251,58,89)",
                      borderRadius: "30px",
                      fontSize: "16px",
                      fontWeigth: "800",
                      padding: "5px 30px",
                      "&:hover": {
                        backgroundColor: "rgb(251,58,89)",
                      },
                    }}
                  >
                    ADD
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Box>
          <Box
            variant="div"
            sx={{
              backgroundColor: "rgb(235,243,255)",
              border: "1px solid rgb(201,221,255)",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px",
              borderRadius: "10px",
              marginTop: "50px",
            }}
          >
            <LocalOfferIcon />
            <Typography sx={{}} color="text.secondary">
              Get extra 10% instant discount using card during payment
            </Typography>
            <Typography
              variant="div"
              sx={{ textDecoration: "underline", cursor: "pointer" }}
            >
              T&C
            </Typography>
          </Box>

          <Box variant="div" sx={{ textAlign: "left", marginTop: "40px" }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "18px",
                fontWeight: "700",
                letterSpacing: "0.5px",
              }}
            >
              Tests Included
            </Typography>
            <Box
              variant="div"
              sx={{ display: "flex", gap: "20px", marginTop: "20px" }}
            >
              {testData.test.map((ele) => (
                <TestCard test={ele} key={ele.name} testData={testData.test}/>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box variant="div" sx={{width:"90%",backgroundColor:"rgb(23,26,38)", columnCount:"2", padding:"5%",columnGap:"50px",marginTop:"40px"}}>
           {
            testData.questions.map((ele)=><Questions que={ele} key={Object.keys(ele)}/>)
           }     

      </Box>

      <AddPeopleModel open={openPModel} setOpen={setOpenPModel}/>
    </Box>
  );
};
