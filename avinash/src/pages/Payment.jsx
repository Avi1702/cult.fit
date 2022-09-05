import React from 'react'
import "../styles/Payment.css"
// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    height:"500px",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const Payment=({data})=>{
    const [open, setOpen] = React.useState(false);
    const token = window.localStorage.getItem("culttoken");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
let handlepay=()=>{
  axios({
    method: "post",
    url: "http://localhost:7000/checkout",
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
}
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
        onClick={handleOpen}>
          TOTAL {"\u20B9"} {data} PROCEED
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          
<div className="container">
<div className="row">
<div className="col-xs-12 col-md-4">

<div className="panel panel-default credit-card-box">
<div className="panel-heading display-table" >
<div className="row display-tr">
<h3 className="panel-title display-td">Payment Details</h3>
<div className="display-td" >                            
<img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"/>
</div>
</div>                    
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
required autoFocus 
/>
<span className="input-group-addon"><i className="fa fa-credit-card"></i></span>
</div>
</div>                            
</div>
</div>
<div className="row">
<div className="col-xs-7 col-md-7">
<div className="form-group">
<label htmlFor="cardExpiry"><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline">EXP</span> DATE</label>
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
{/* <div className="form-group">
<label htmlFor="couponCode">COUPON CODE</label>
<input type="text" className="form-control" name="couponCode" />
</div> */}
</div>                        
</div>
<div className="row">
<div className="col-xs-12">
<button className="btn btn-success btn-lg btn-block" type="submit" onClick={handlepay}>Pay Now</button>
</div>
</div>
<div className="row" style={{display:"none"}}>
<div className="col-xs-12">
<p className="payment-errors"></p>
</div>
</div>
</form>
</div>
</div>            

</div>            
</div>
</div>

          </Box>
        </Modal>
</div>
    );
  }


export default Payment