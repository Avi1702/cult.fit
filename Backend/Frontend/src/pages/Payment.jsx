import React from "react";
import "../styles/Payment.css";
// import * as React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: "350px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius:"20px",
  p: 3,
};

const Payment = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const token = window.localStorage.getItem("culttoken");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let handlepay = () => {
    axios({
      method: "post",
      url: "/checkout",
      headers: {
        authtoken: token,
      },
    })
      .then((res) => {
        alert(res.data.message);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Button
        sx={{
          backgroundColor: "white",
          color: "rgb(240,96,85)",
          fontSize: "15px",
          fontWeight: "700",
          width: "90%",
          "&:hover": { backgroundColor: "white", color: "black" },
        }}
        onClick={handleOpen}
      >
        TOTAL {"\u20B9"} {data} PROCEED
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 style={{ fontWeight: "800", color: "tomato", marginTop:"-5px" }}>
            TOTAL &nbsp;&nbsp; {"\u20B9"} {data}
          </h2>

          <Box variant="div" sx={{color: "rgb(128,128,128)",}}>
            <h3
              style={{
                textAlign: "left",
                color: "#3e3e3e",
                fontSize: "24px",
                letterSpacing: "2px",
                fontWeight: "700",
                marginLeft:"30px"
              }}
            >
              Payment Details
            </h3>

            <Box variant="div" sx={{ width: "80%", marginLeft: "20px" }}>
              <Box
                variant="div"
                sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
              >
                <div
                  htmlFor="cardNumber"
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    marginLeft: "15px",
                  }}
                >
                  Card Number
                </div>
                <input
                  type="tel"
                  name="cardNumber"
                  placeholder="Valid Card Number"
                  autoComplete="cc-number"
                  required
                  autoFocus
                  style={{
                    padding: "10px",
                    fontSize: "14px",
                    borderRadius: "20px",
                  }}
                />
              </Box>
              <Box
                variant="div"
                sx={{
                  display: "flex",
                  gap: "20px",
                  width: "100%",
                  justifyContent: "left",
                }}
              >
                <Box
                  variant="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "25px",
                    width: "40%",
                  }}
                >
                  <div
                    htmlFor="cardNumber"
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      marginLeft: "15px",
                    }}
                  >
                    Valid Upto
                  </div>
                  <input
                    type="tel"
                    name="cardExpiry"
                    placeholder="MM / YY"
                    autoComplete="cc-exp"
                    required
                    style={{
                      padding: "10px",
                      fontSize: "14px",
                      borderRadius: "20px",
                    }}
                  />
                </Box>

                <Box
                  variant="div"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginTop: "25px",
                    width: "40%",
                  }}
                >
                  <div
                    htmlFor="cardNumber"
                    style={{
                      fontSize: "15px",
                      fontWeight: "700",
                      marginLeft: "15px",
                    }}
                  >
                    CVC Code
                  </div>
                  <input
                    type="tel"
                    className="form-control"
                    name="cardCVC"
                    placeholder="CVC"
                    autoComplete="cc-csc"
                    required
                    style={{
                      padding: "10px",
                      fontSize: "14px",
                      borderRadius: "20px",
                    }}
                  />
                </Box>
              </Box>
              <Box sx={{ width: "100%", textAlign: "center" }}>
                <Link to="/" style={{textDecoration:"none"}}>
                <Button
                  onClick={handlepay}
                  sx={{
                    backgroundColor: "rgb(240,96,85)",
                    color: "white",
                    borderRadius: "20px",
                    fontSize: "15px",
                    fontWeight: "700",
                    width: "100%",
                    marginTop: "30px",
                    "&:hover": {
                      backgroundColor: "rgb(240,96,85)",
                      color: "black",
                    },
                  }}
                >
                  Pay NOw
                </Button>
                </Link>
              </Box>
            </Box>
          </Box>
          {/* <div style={{ marginTop: "0px" }}>
            <div style={{ width: "100%" }}></div>
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <div className="panel panel-default credit-card-box">
                  <div className="panel-heading display-table">
                    <div style={{ width: "100%", textAlign: "center" }}></div>
                  </div>
                  <div className="panel-body">
                    <form role="form" id="payment-form">
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="form-group">
                            <label htmlFor="cardNumber">CARD NUMBER</label>
                            <div className="input-group">
                              <input
                                type="tel"
                                className="form-control"
                                name="cardNumber"
                                placeholder="Valid Card Number"
                                autoComplete="cc-number"
                                required
                                autoFocus
                              />
                              <span className="input-group-addon">
                                <i className="fa fa-credit-card"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-7 col-md-7">
                          <div className="form-group">
                            <label htmlFor="cardExpiry">
                              <span className="hidden-xs"></span>
                              <span className="visible-xs-inline">
                                EXP
                              </span>{" "}
                              DATE
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              name="cardExpiry"
                              placeholder="MM / YY"
                              autoComplete="cc-exp"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-xs-5 col-md-5 pull-right">
                          <div className="form-group">
                            <label for="cardCVC">CV CODE</label>
                            <input
                              type="tel"
                              className="form-control"
                              name="cardCVC"
                              placeholder="CVC"
                              autoComplete="cc-csc"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="form-group">
<label htmlFor="couponCode">COUPON CODE</label>
<input type="text" className="form-control" name="couponCode" />
</div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12">
                          <button
                            className="btn btn-success btn-lg btn-block"
                            type="submit"
                          >
                            Pay Now
                          </button>
                        </div>
                      </div>
                      <div className="row" style={{ display: "none" }}>
                        <div className="col-xs-12">
                          <p className="payment-errors"></p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </Box>
      </Modal>
    </div>
  );
};

export default Payment;
