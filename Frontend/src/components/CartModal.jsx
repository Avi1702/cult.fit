import * as React from "react";
import Box from "@mui/material/Box";
import { Avatar, Button, Divider, Typography } from "@mui/material";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
// import { PersonalDetailsModel } from "./PersonalDetailsModel";
import { useEffect } from "react";
import axios from "axios";
// import { Button } from '@mui/material';
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getcartDoError,
  getcartDoSuccess,
  getcartLoading,
  gettestError,
  gettestLoading,
  gettestSuccess,
} from "../store/actions";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import { Link } from "react-router-dom";
import Payment from "../pages/Payment";

const style = {
  position: "fixed",
  top: "65px",
  right: "0.5%",
  width: "350px",
  height: "78vh",
  padding: "10px",
  backgroundColor: "rgb(23,26,38)",
  boxShadow: 24,
  zIndex: "3",
  color: "white",
};

export const CartModel = ({ open, setOpen }) => {
  
  const { cart, grandtotal } = useSelector((state) => state.cart);
  const { test, Test_Grandtotal } = useSelector((state) => state.tests);
  let sum = grandtotal + Test_Grandtotal;
  const token = window.localStorage.getItem("culttoken");
  const dispatch = useDispatch();
  let getCart = () => {
    dispatch(getcartLoading());
    axios({
      method: "get",
      url: "http://localhost:7000/cart",
      headers: {
        authtoken: token,
      },
    })
      .then((res) => {
        dispatch(getcartDoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getcartDoError());
      });
  };
  let getTests = () => {
    dispatch(gettestLoading());
    axios({
      method: "get",
      url: "http://localhost:7000/gettest",
      headers: {
        authtoken: token,
      },
    })
      .then((res) => {
        dispatch(gettestSuccess(res.data));
      })
      .catch((err) => {
        dispatch(gettestError());
      });
  };
  let handleIncrement = (a, b) => {
    axios({
      method: "post",
      url: "http://localhost:7000/updatequantity",
      data: {
        product_name: b,
        quantity: a + 1,
      },
      headers: {
        authtoken: token,
      },
    })
      .then((res) => {
        getCart();
      })
      .catch((err) => console.log(err));
  };

  let handleDecrement = (a, b) => {
    axios({
      method: "post",
      url: "http://localhost:7000/updatequantity",
      data: {
        product_name: b,
        quantity: a - 1,
      },
      headers: {
        authtoken: token,
      },
    })
      .then((res) => {
        getCart();
      })
      .catch((err) => console.log(err));
  };
  let handleRemove = (a) => {
    axios({
      method: "delete",
      url: "http://localhost:7000/removefromcart",
      data: {
        product_name: a,
      },
      headers: {
        authtoken: token,
      },
    })
      .then((res) => {
        getCart();
      })
      .catch((err) => console.log(err));
  };
  let testRemove = (a, b) => {
    axios({
      method: "delete",
      url: "http://localhost:7000/removetest",
      data: {
        test_name: a,
        patient_name: b,
      },
      headers: {
        authtoken: token,
      },
    })
      .then((res) => {
        getTests();
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCart();
    getTests();
  }, []);
  console.log(Test_Grandtotal);

  return (
    <div>
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" component="h1" sx={{ fontWeight: "500" }}>
            Your Cart
          </Typography>
          <ClearRoundedIcon
            onClick={() => {setOpen(!open)}}
            sx={{ cursor: "pointer" }}
          />
        </Box>

        <Box
          variant="div"
          sx={{
            display: "flex",
            marginTop: "15px",
            gap: "10px",
            borderBottom: "1px solid #696a6e",
            paddingBottom: "5px",
          }}
        >
          <Typography variant="h7" component="h4" sx={{ fontWeight: "700" }}>
            Lab Tests
          </Typography>
        </Box>
  
        {/* {test.map((el)=>{return<>
    <div style={{border:"1px solid silver",
    cursor:"pointer",
    width:"85%",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:"10px",
    color:"white",
    display:"flex",
    padding:".5vw"
    }}>
      <div
      style={{height:"103px"}}>
        <img 
        style={{height:"100%",aspectRatio:"4/5"}}
        alt=''
        src={el.test_image}
        />
      </div>
      <div style={{paddingLeft:"0.5vw",marginTop:"0px",width:"100%"}}>
        <p style={{marginTop:"0px",marginBottom:"0px"}}>{el.test_name}</p>
        <p style={{marginTop:"0px",marginBottom:"0px"}}>For: {el.patient_name}</p>
        <p style={{marginTop:"0px",marginBottom:"0px"}}>Date: {el.schedule_date}</p>
        <p style={{marginTop:"0px",marginBottom:"0px"}}>Price: ₹{el.price}</p>
        <div style={{paddingLeft:"0",marginTop:"0px",marginBottom:"0px",display:"flex",width:"100%"}}>
        <Button 
        sx={{
          color:"white",
          height:"2vw",
          border:"1px solid silver",
          fontSize:"1vw",
          marginLeft:"auto",
          marginRight:"0px",
          '&:hover':{
            color:"white"
          }
        }}
        variant="solid"
        onClick={() => {
          testRemove(el.test_name, el.patient_name);
        }}
        >Remove</Button>
        </div>
      </div>
    </div>
        </>
    })}
<div style={{borderTop:"1px solid silver",padding:"10px",textAlign:"center",marginLeft:"auto",marginRight:"auto",marginTop:"10px",color:"white"}}>
<p>Grand Total: ₹{sum}</p>
<Button
sx={{
  color:"white",
  height:"2vw",
  border:"1px solid silver",
  fontSize:"1vw",
  marginRight:"0px",
  marginLeft:"auto",
  '&:hover':{
    color:"white"
  }
}}
variant="solid"
>Checkout</Button> */}
{/* </div> */}

        <Box
          variant="div"
          sx={{ overflowY: "auto", height: "360px", paddingRight: "5px" }}
        >
          {test.map((el) => (
            <Box variant="div">
              <Box
                sx={{
                  width: "90%",
                  border: "1px solid rgb(106,106,106)",
                  padding: "8px",
                  margin: "auto",
                  marginTop: "20px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <PermIdentityRoundedIcon
                    sx={{
                      borderRadius: "30px",
                      border: "1px solid rgb(106,106,106)",
                      color: "rgb(106,106,106)",
                      padding: "5px",
                      fontSize: "15px",
                    }}
                  />
                  <Typography
                    variant="h7"
                    component="h5"
                    sx={{
                      fontWeight: "500",
                      letterSpacing: "1px",
                      fontSize: "14px",
                    }}
                  >
                    {el.patient_name}
                  </Typography>
                </Box>

                <Typography
                  variant="div"
                  sx={{
                    fontSize: "13px",
                    marginRight: "10px",
                    letterSpacing: "1px",
                    color: "#696a6e",
                  }}
                >
                  {el.gender}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h7"
                  component="h5"
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    letterSpacing: "1px",
                    width: "70%",
                    padding: "20px",
                  }}
                >
                  Vitamin Screening (VitB12,VitD)
                </Typography>
                <ClearRoundedIcon
                  onClick={() => {testRemove(el.test_name, el.patient_name);}}
                  sx={{
                    cursor: "pointer",
                    marginRight: "10px",
                    fontSize: "20px",
                  }}
                />
              </Box>
              <Box
                variant="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "5px 18px",
                }}
              >
                <Typography
                  variant="span"
                  sx={{
                    fontWeight: "500",

                    color: "#8f8f8f",
                  }}
                >
                  Price
                </Typography>
                <Box
                  variant="span"
                  sx={{
                    display: "flex",
                    fontSize: "15px",
                    gap: "10px",
                  }}
                >
                 
                  <Typography
                    variant=""
                    sx={{ fontWeight: "600", color: "white" }}
                  >
                    {"\u20B9"} {el.price}
                  </Typography>
                </Box>
              </Box>

              <Divider
                sx={{ border: "1px solid #696a6e", margin: "10px 0px" }}
              />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            color: "rgb(240,96,85)",
            textAlign: "center",
            position: "absolute",
            width: "97%",
            bottom: "15px",
          }}
        >
          {Test_Grandtotal == 0 ? (
            <Link to="/care/diagnostic-tests" style={{textDecoration:"none"}}>
            <Button
              sx={{
                backgroundColor: "white",
                color: "rgb(240,96,85)",
                fontSize: "15px",
                fontWeight: "700",
                width: "90%",
                marginBottom:"200px",
                "&:hover": { backgroundColor: "white", color: "black" },
              }}
            >
              BOOK TEST ON CARE.FIT
            </Button></Link>
          ) : (
          <>
            {/* <Button
              sx={{
                backgroundColor: "white",
                color: "rgb(240,96,85)",
                fontSize: "15px",
                fontWeight: "700",
                width: "90%",
                "&:hover": { backgroundColor: "white", color: "black" },
              }}
            >
              TOTAL {"\u20B9"} {Test_Grandtotal} PROCEED
            </Button> */}
          
            <Payment
            data={Test_Grandtotal}
            />
  
          </>
          )}
        </Box>
      </Box>
    </div>
  );
};
