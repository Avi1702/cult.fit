import React, { useEffect } from 'react'
import{NavLink}from "react-router-dom";
import { Loginmodal } from './LoginModal'
import { Signupmodal } from './Signupmodal'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const {token} = useSelector((state) => state.login)
  let tok=window.localStorage.getItem("culttoken")
  return (
    <>
    <div style={{maxHeight:"60px",backgroundColor:"#15171C",maxWidth:"100vw",display:"flex",paddingTop:"15px",paddingBottom:"15px",paddingRight:"30px",paddingLeft:"30px"}}>
    <img 
    style={{height:"30px",width:"120px"}}
    alt=''
    src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png'/>
   <div style={{marginLeft:'auto',marginRight:'20px',display:'flex'}}>
    
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
