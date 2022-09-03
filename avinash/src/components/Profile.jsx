import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { logOut, getloginToDoError, getloginToDoLoading, getloginToDoSuccess} from '../redux/Auth/actions';
import { Navigate } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import { textAlign } from '@mui/system';
import axios from 'axios';

export const Profile = () => {
    const {user} = useSelector((state) => state.profile);
    const token=window.localStorage.getItem("culttoken");
    
    const dispatch=useDispatch();
    let handleLoggedin=()=>{
      dispatch(getloginToDoLoading());
    axios({
    method: "get",
    url: "http://localhost:7000/loggeduser",
    headers: {
      authtoken:token,
    },
    }).then((res) => {
      
      dispatch(getloginToDoSuccess(res.data));
      localStorage.setItem("cultuser", JSON.stringify(res.data));
    })
    .catch((err) => {
      alert(err.response.data.message);
      dispatch(getloginToDoError());
    });
    }
    let logout=()=>{
        
        window.localStorage.removeItem("culttoken");
        window.localStorage.removeItem("cultuser");
        window.localStorage.removeItem("isLoggedin");
        dispatch(logOut());
    }
    useEffect(() => {
        handleLoggedin();
       }, []);
    let verify=user.isVerified;
    if(!token){
        return <Navigate to="/" /> 
      }
  return (
<div style={{display:"flex",backgroundColor:"#fff"}}>
    <div style={{width:"25vw",borderRight:"2px solid silver",height:"100vh"}}>
    <div style={{width:"100%",height:"15vh",display:"flex"}}>
    <PersonOutlineOutlinedIcon
     sx={{
        color:"black",
        fontSize:"60px",
        marginRight:'25px',
        marginTop:"auto",
        marginBottom:"auto",
        marginLeft:"3vw",
      }}
     />
     <div style={{height:"48%", marginTop:"auto",marginBottom:"auto",cursor:"pointer"}}>
     <p style={{fontSize:"20px",marginTop:"auto",marginBottom:"0px"}}>{user.name}</p>
     <p style={{fontSize:"15px",marginTop:"0px",marginBottom:"auto",color:"#e75480"}}>VIEW PROFILE</p>
    </div>
    </div>

    <div style={{width:"100%",height:"7vh",display:"flex",paddingLeft:"30px",cursor:"pointer"}}>
     <div style={{height:"48%", marginTop:"auto",marginBottom:"auto"}}>
     <p style={{fontSize:"15px",marginTop:"auto",marginBottom:"0px"}}>Orders</p>
    </div>
    <div style={{height:"48%", marginTop:"auto",marginBottom:"auto",marginLeft:"auto",marginRight:"75px"}}>
         <ShoppingCartOutlinedIcon
         sx={{fontSize:"20px",marginTop:"auto",marginBottom:"0px"}}
         />
    </div>
    </div>

    <div style={{width:"100%",height:"7vh",display:"flex",paddingLeft:"30px",cursor:"pointer"}}>
     <div style={{height:"48%", marginTop:"auto",marginBottom:"auto"}}>
     <p style={{fontSize:"15px",marginTop:"auto",marginBottom:"0px"}}>Medical Records</p>
    </div>
    <div style={{height:"48%", marginTop:"auto",marginBottom:"auto",marginLeft:"auto",marginRight:"75px"}}>
         <VolunteerActivismOutlinedIcon
         sx={{fontSize:"20px",marginTop:"auto",marginBottom:"0px"}}
         />
    </div>
    </div>

    <div style={{width:"100%",height:"7vh",display:"flex",paddingLeft:"30px",cursor:"pointer"}}>
     <div style={{height:"48%", marginTop:"auto",marginBottom:"auto"}}>
     <p style={{fontSize:"15px",marginTop:"auto",marginBottom:"0px"}}>Active Packs and Subscription</p>
    </div>
    <div style={{height:"48%", marginTop:"auto",marginBottom:"auto",marginLeft:"auto",marginRight:"75px"}}>
         <CreateNewFolderOutlinedIcon
         sx={{fontSize:"20px",marginTop:"auto",marginBottom:"0px"}}
         />
    </div>

    </div>
    <div style={{width:"100%",height:"7vh",display:"flex",paddingLeft:"30px",cursor:"pointer"}}>
     <div style={{height:"48%", marginTop:"auto",marginBottom:"auto"}}>
     <p style={{fontSize:"15px",marginTop:"auto",marginBottom:"0px"}}>Redeem Voucher</p>
    </div>
    <div style={{height:"48%", marginTop:"auto",marginBottom:"auto",marginLeft:"auto",marginRight:"75px"}}>
         <LoyaltyOutlinedIcon
         sx={{fontSize:"20px",marginTop:"auto",marginBottom:"0px"}}
         />
    </div>
    </div>

    <div style={{width:"100%",height:"7vh",display:"flex",paddingLeft:"30px",cursor:"pointer"}}>
     <div style={{height:"48%", marginTop:"auto",marginBottom:"auto"}}>
     <p style={{fontSize:"15px",marginTop:"auto",marginBottom:"0px"}}>Account</p>
    </div>
    <div style={{height:"48%", marginTop:"auto",marginBottom:"auto",marginLeft:"auto",marginRight:"75px"}}>
         <SettingsOutlinedIcon
         sx={{fontSize:"20px",marginTop:"auto",marginBottom:"0px"}}
         />
    </div>
    </div>

    <div style={{width:"100%",height:"7vh",display:"flex",paddingLeft:"30px",cursor:"pointer"}}>
     <div style={{height:"48%", marginTop:"auto",marginBottom:"auto"}}>
     <p style={{fontSize:"15px",marginTop:"auto",marginBottom:"0px"}}>Support</p>
    </div>
    <div style={{height:"48%", marginTop:"auto",marginBottom:"auto",marginLeft:"auto",marginRight:"75px"}}>
         <SupportAgentOutlinedIcon
         sx={{fontSize:"20px",marginTop:"auto",marginBottom:"0px"}}
         />
    </div>
    </div>

    <div 
    onClick={logout}
    style={{width:"100%",height:"7vh",display:"flex",paddingLeft:"30px",cursor:"pointer"}}>
     <div style={{height:"48%", marginTop:"auto",marginBottom:"auto"}}>
     <p style={{fontSize:"15px",marginTop:"auto",marginBottom:"0px"}}>Logout</p>
    </div>
    <div style={{height:"48%", marginTop:"auto",marginBottom:"auto",marginLeft:"auto",marginRight:"75px"}}>
         <LogoutOutlinedIcon
         sx={{fontSize:"20px",marginTop:"auto",marginBottom:"0px"}}
         />
    </div>
    </div>
</div>
<div
style={{
    width:"100%",
}}
>
<div style={{
    marginLeft:"auto",
    marginTop:"10vh",
    marginRight:"auto",
    width:"100px",
}}>
<PersonOutlineOutlinedIcon
sx={{
    fontSize:"100px",
    color:"gray"
}}/>
</div>
<p
style={{marginTop:"0px",fontSize:"30px",fontWeight:"700",width:"100%",textAlign:"center",color:"gray"}}
>PROFILE</p>
<div
style={{
    width:"55%",
    marginLeft:"auto",
    marginTop:"40px",
    marginRight:"auto",
    display:"flex",
    fontSize:"20px"
}}
>
<div>
<div style={{marignTop:"auto",marginBotton:"0px",borderBottom:"3px solid black",}}>Name: {user.name}</div>
</div>
<div style={{marginLeft:"auto",marginRight:"5px"}}>
{verify?(<>
<VerifiedUserOutlinedIcon
sx={{
    color:"green",
    fontSize:"50px"
}}
/>
</>):(<>
    <VerifiedUserOutlinedIcon
    sx={{
    color:"red",
    fontSize:"50px"
}}
/>
</>)}
</div>
</div>
<div
style={{
    width:"55%",
    marginLeft:"auto",
    marginTop:"40px",
    marginRight:"auto",
    display:"flex",
    fontSize:"20px"
}}
>
<div
style={{
    borderBottom:"3px solid black"
}}
>
Email: {user.email}
</div>
<div style={{marginLeft:"auto",marginRight:"5px",borderBottom:"3px solid black"}}>
Mobile: +91 {user.mobile_number}
</div>
</div>
</div>
</div>
  )
}
