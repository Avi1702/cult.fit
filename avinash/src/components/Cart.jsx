import axios from 'axios';
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getcartDoError, getcartDoSuccess, getcartLoading } from '../store/actions';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Button } from '@mui/material';
import '../styles/cart.css'
export const Cart = () => {
    
    const {cart,grandtotal} = useSelector((state) => state.cart)
    const token=window.localStorage.getItem("culttoken");
    const dispatch=useDispatch();
    let getCart=()=>{
      dispatch(getcartLoading());
    axios({
    method: "get",
    url: "http://localhost:7000/cart",
    headers: {
      authtoken:token,
    },
    }).then((res) => {
      dispatch(getcartDoSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getcartDoError());
    });
    }
    let handleIncrement = (a,b) => {
      axios({
              method: "post",
              url: "http://localhost:7000/updatequantity",
              data: {
                product_name:b,
                quantity: a+1
              },
              headers: {
                authtoken:token,
              },
            })
              .then((res) => {
                getCart();
              })
              .catch((err) => console.log(err));
    }

       let handleDecrement = (a,b) => {
        axios({
                method: "post",
                url: "http://localhost:7000/updatequantity",
                data: {
                  product_name:b,
                  quantity: a-1
                },
                headers: {
                  authtoken:token,
                },
              })
                .then((res) => {
                  getCart();
                })
                .catch((err) => console.log(err));
         }
         let handleRemove = (a) => {
          axios({
                  method: "delete",
                  url: "http://localhost:7000/removefromcart",
                  data: {
                    product_name:a
                  },
                  headers: {
                    authtoken:token,
                  },
                })
                  .then((res) => {
                    getCart();
                  })
                  .catch((err) => console.log(err));
        } 
     useEffect(() => {
      getCart();
     }, []);
console.log(cart);
  return (
    <>
    {token?(<>
  <div style={{
  borderRight:"2px solid silver",
  width:"50%",
  height:"90vh",
  marginLeft:"3vw",
  marginRight:"auto",
  marginTop:"0px",
  overflow:"auto"
  }}>
    {cart.map((el)=>{return<>
    <div style={{border:"2px solid silver",width:"90%",marginLeft:"auto",marginRight:"auto",marginTop:"20px",color:"black",display:"flex",padding:"1vw"}}>
      <div
      style={{height:"150px"}}>
        <img 
        style={{height:"100%",aspectRatio:"4/5"}}
        alt=''
        src={el.product_image}
        />
      </div>
      <div style={{paddingLeft:"2vw",marginTop:"0px",width:"100%"}}>
        <p style={{marginTop:"0px"}}>{el.product_name}</p>
        <p style={{marginTop:"0px"}}>Price: ₹{el.price}</p>
        <p style={{marginTop:"0px"}}>Total: ₹{el.price*el.quantity}</p>
        {/* <p style={{marginTop:"0px"}}>Quantity: {el.quantity}</p> */}
        <div style={{paddingLeft:"0",marginTop:"0px",marginBottom:"0px",display:"flex",overflow:"auto",width:"100%"}}>
        <IndeterminateCheckBoxOutlinedIcon
        sx={{
          color:"black",
          height:"2vw",
          cursor:"pointer"
        }}
        onClick={() => {
          handleDecrement(el.quantity,el.product_name);
        }}
        />
        <Button 
        sx={{
          color:"black",
          height:"2vw",
          border:"1px solid silver",
          fontSize:"1vw",
          marginRight:"1vw",
          marginLeft:"1vw"
        }}
        variant="solid"
        
        >Quantity: {el.quantity}</Button>
        <AddBoxOutlinedIcon
         onClick={() => {
          handleIncrement(el.quantity,el.product_name);
        }}
        sx={{
          color:"black",
          height:"2vw",
          cursor:"pointer"
        }}
        />
        <Button 
        sx={{
          color:"black",
          height:"2vw",
          border:"1px solid silver",
          fontSize:"1vw",
          marginRight:"0px",
          marginLeft:"auto"
        }}
        variant="solid"
        onClick={() => {
          handleRemove(el.product_name);
        }}
        >Remove</Button>
        </div>
      </div>
    </div>
        </>
    })}
</div>
<div style={{width:"30%",border:"2px solid silver",padding:"20px",borderRadius:"5px",textAlign:"center",marginLeft:"auto",marginRight:"7vw",marginTop:"-87.25vh",color:"black",position:"sticky",overflow:"auto"}}>
<p>Grand Total: ₹{grandtotal}</p>
<Button
sx={{
  color:"black",
  height:"2vw",
  border:"1px solid silver",
  fontSize:"1vw",
  marginRight:"0px",
  marginLeft:"auto"
}}
variant="solid"
>Checkout</Button>
</div>

</>):(<>
    <h2 style={{textAlign:"center"}}>PLEASE LOGIN FIRST.</h2>
    </>)}
    </>
  )
}
