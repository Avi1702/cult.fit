import React, { useEffect } from 'react'
import{NavLink}from "react-router-dom";
import { Loginmodal } from './LoginModal'
import { Signupmodal } from './Signupmodal'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

export const Navbar = () => {
  const {token} = useSelector((state) => state.login)
  let tok=window.localStorage.getItem("culttoken")
  return (
    <>
    <div style={{maxHeight:"60px",backgroundColor:"#15171C",background:"transparent",maxWidth:"100%",display:"flex",overflow:"auto",paddingTop:"15px",paddingBottom:"15px",paddingRight:"30px",paddingLeft:"30px"}}>
    <img 
    style={{height:"30px",width:"120px"}}
    alt=''
    src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png'/>
    <div 
    style={{
      width:"fitContent",
      marginLeft:"auto",
      marginRight:"auto"
    }}
    >
      <NavLink to="/fitness"
      style={{textDecoration:"none"}}
      >
      <Button
      variant="solid"
      sx={{
        color:"lightgrey",
        fontSize:"17px",
        fontWeight:"600",
        backgroundColor:"transparent",
        padding:"0px",
        marginTop:"0px",
        marginBottom:"0px",
        marginLeft:"2vw",
        marginRight:"2vw",
        '&:hover':{
          color:"#f9f9f9",
          backgroundColor:"transparent"
        }
      }}
      >
        Fitness
      </Button>
      </NavLink>
      <NavLink to="/care/diagnostic-tests">
      <Button
      variant="solid"
      sx={{
        color:"lightgrey",
        fontSize:"100%",
        fontWeight:"600",
        backgroundColor:"transparent",
        padding:"0px",
        marginTop:"0px",
        marginBottom:"0px",
        marginLeft:"2vw",
        marginRight:"2vw",
        '&:hover':{
          color:"#f9f9f9",
          backgroundColor:"transparent"
        }
      }}
      >
        Care
      </Button>
      </NavLink>
      <Button
      variant="solid"
      sx={{
        color:"lightgrey",
        fontSize:"100%",
        fontWeight:"600",
        backgroundColor:"transparent",
        padding:"0px",
        marginTop:"0px",
        marginBottom:"0px",
        marginLeft:"2vw",
        marginRight:"2vw",
        '&:hover':{
          color:"#f9f9f9",
          backgroundColor:"transparent"
        }
      }}
      >
        Mind
      </Button>
      <Button
      variant="solid"
      sx={{
        color:"lightgrey",
        fontSize:"100%",
        fontWeight:"600",
        backgroundColor:"transparent",
        padding:"0px",
        marginTop:"0px",
        marginBottom:"0px",
        marginLeft:"2vw",
        marginRight:"2vw",
        '&:hover':{
          color:"#f9f9f9",
          backgroundColor:"transparent"
        }
      }}
      >
        Store
      </Button>
    </div>
   <div style={{marginLeft:'auto',marginRight:'1vw',display:'flex'}}>
    
     {!token&&!tok? (<>
     <Signupmodal/>
     <Loginmodal/>
    
    </>):(<>
    <NavLink to="/profile" >
    <AccountCircleOutlinedIcon
     sx={{
        color:"white",
        fontSize:"30px",
        marginRight:'25px'
      }}
     />
    </NavLink>
    <NavLink to="/cart" >
    <AddShoppingCartIcon
    sx={{
        color:"white",
        fontSize:"30px"
        }}
    />
    </NavLink>
    </>)} 
    </div>
    </div>
    </>
  )
}
