import axios from 'axios';
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { getcartDoError, getcartDoSuccess, getcartLoading, gettestError, gettestLoading, gettestSuccess } from '../store/actions';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Button } from '@mui/material';
import '../styles/cart.css'
export const Cart = () => {
    
    const {cart,grandtotal} = useSelector((state) => state.cart)
    const {test,Test_Grandtotal} = useSelector((state) => state.tests);
    let sum=grandtotal+Test_Grandtotal;
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
    let getTests=()=>{
      dispatch(gettestLoading());
    axios({
    method: "get",
    url: "http://localhost:7000/gettest",
    headers: {
      authtoken:token,
    },
    }).then((res) => {
      dispatch(gettestSuccess(res.data));
    })
    .catch((err) => {
      dispatch(gettestError());
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
        let testRemove = (a,b) => {
          axios({
                  method: "delete",
                  url: "http://localhost:7000/removetest",
                  data: {
                    test_name:a,
                    patient_name:b
                  },
                  headers: {
                    authtoken:token,
                  },
                })
                  .then((res) => {
                    getTests();
                  })
                  .catch((err) => console.log(err));
        } 
     useEffect(() => {
      getCart();
      getTests();
     }, []);

  return (
  <div>
  <div style={{color:"white",textAlign:"center", width:"100%",backgroundColor:"black",padding:"10px",marginTop:"60px",display:"flex",overflow:"auto"}}>
    <p style={{width:"50%",marginTop:"0px",marginBottom:"0px"}}>PRODUCTS</p>
    <p style={{width:"50%",marginTop:"0px",marginBottom:"0px"}}>LAB TESTS</p>
  </div>
  <div style={{
  borderRight:"2px solid silver",
  width:"50%",
  height:"70vh",
  marginLeft:"0px",
  marginRight:"0px",
  marginTop:"0px",
  overflowY:"auto",
  overflowX:"hidden",
  }}>
  
  
    {cart.map((el)=>{return<>
    <div style={{border:"2px solid silver",width:"80%",marginLeft:"auto",marginRight:"auto",marginTop:"10px",color:"white",display:"flex",padding:".5vw"}}>
      <div
      style={{height:"85px"}}>
        <img 
        style={{height:"100%",aspectRatio:"4/5"}}
        alt=''
        src={el.product_image}
        />
      </div>
      <div style={{paddingLeft:"2vw",marginTop:"0px",width:"100%"}}>
        <p style={{marginTop:"0px",marginBottom:"0px"}}>{el.product_name}</p>
        <p style={{marginTop:"0px",marginBottom:"0px"}}>Price: ₹{el.price}</p>
        <p style={{marginTop:"0px",marginBottom:"0px"}}>Total: ₹{el.price*el.quantity}</p>
        {/* <p style={{marginTop:"0px"}}>Quantity: {el.quantity}</p> */}
        <div style={{paddingLeft:"0",marginTop:"0px",marginBottom:"0px",display:"flex",width:"100%"}}>
        <IndeterminateCheckBoxOutlinedIcon
        sx={{
          color:"white",
          height:"2vw",
          cursor:"pointer"
        }}
        onClick={() => {
          handleDecrement(el.quantity,el.product_name);
        }}
        />
        <Button 
        sx={{
          color:"white",
          height:"2vw",
          border:"1px solid silver",
          fontSize:"1vw",
          marginRight:"1vw",
          marginLeft:"1vw",
          '&:hover':{
            color:"white"
          }
        }}
        variant="solid"
        
        >Quantity: {el.quantity}</Button>
        <AddBoxOutlinedIcon
         onClick={() => {
          handleIncrement(el.quantity,el.product_name);
        }}
        sx={{
          color:"white",
          height:"2vw",
          cursor:"pointer"
        }}
        />
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
<div style={{
  width:"50%",
  height:"70vh",
  marginLeft:"auto",
  marginRight:"0px",
  marginTop:"-69.95vh",
  overflowY:"auto",
  overflowX:"hidden",
  }}>
  
    {test.map((el)=>{return<>
    <div style={{border:"2px solid silver",width:"80%",marginLeft:"auto",marginRight:"auto",marginTop:"10px",color:"white",display:"flex",padding:".5vw"}}>
      <div
      style={{height:"120px"}}>
        <img 
        style={{height:"100%",aspectRatio:"4/5"}}
        alt=''
        src={el.test_image}
        />
      </div>
      <div style={{paddingLeft:"2vw",marginTop:"0px",width:"100%"}}>
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
          margin:"5px",
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
</div>
<div style={{borderTop:"3px solid silver",padding:"20px",textAlign:"center",marginLeft:"auto",marginRight:"auto",marginTop:"0px",color:"white",display:"flex"}}>
<div >
<p>Total for Products: ₹{grandtotal}</p>
<p>Total for Lab Tests: ₹{Test_Grandtotal}</p>
</div>
<div
style={{
  marginRight:"50px",
  marginLeft:"auto"
  }}>
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
>Checkout</Button>
</div>
</div>

{/* </>):(<>
    <h2 style={{textAlign:"center"}}>PLEASE LOGIN FIRST.</h2>
    </>)} */}
    </div>
  )
}
