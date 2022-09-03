import React, { useState } from 'react'
import {Button} from '@mui/material'
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import {signupToDoError, signupToDoLoading, signupToDoSuccess, verifyToDoError, verifyToDoLoading, verifyToDoSuccess } from '../store/actions';

export const Signupmodal = () => {
    const inputfieldmail={
            width:"90%",
            height:"30px",
            marginLeft:"20px",
            marginRight:"20px",
            marginTop:"25px",
            color:"white",
            backgroundColor:"rgb(0, 0, 0)",
            outline:"none",
            borderTop:"none",
            borderLeft:"none",
            borderRight:'none',
            borderBottom:'2.5px solid white',
            opacity:'85%',
            fontSize:"22.5px",
            textAlign:'center',
            
        
    }
    const customStyles = {
        content: {
          width:'402px',
          display:"flex",
          overflow:"auto",
          flexDirection:"column",
          backgroundColor:'rgb(0, 0, 0)',
          borderRadius:'6px',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-60%',
          transform: 'translate(-50%, -50%)',
        },
      };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [name, setName]=useState('');
  const [email,setEmail]=useState('');
  const [mobile,setMobile]=useState('');
  const [password, setPassword]=useState('');
  const [otp, setOtp]=useState('');
  const dispatch=useDispatch();
  
  let handleSignUp=()=>{
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  var mailformat= /.@/;
  if(name.length<2){
    dispatch(signupToDoError());
    alert("Please Enter Name.");
  }
  else if(mailformat.test(email)===false){
    dispatch(signupToDoError());
    alert("Please enter a valid email.");
  }
  else if(mobile.length!==10){
    dispatch(signupToDoError());
    alert("Invalid mobile Number.");
  }
  else if(password.length<8){
    dispatch(signupToDoError());
    alert("Password can't be less then 8 characters.");
  }
  else if(format.test(password)===false){
    dispatch(signupToDoError());
    alert("Please include atleast one special character in password.");
  }
  else{
  dispatch(signupToDoLoading());
  axios({
  method: "post",
  url: "http://localhost:7000/register",
  data: {
    name:name,
    email:email,
    mobile_number:mobile,
    password:password
  },
}).then((res) => {
    alert(res.data.message);
    let data=res.data.data;
    dispatch(signupToDoSuccess(data));
  })
  .catch((err) => {
    alert(err.response.data.message);
    dispatch(signupToDoError());
  });
}
}
const {signtoken} = useSelector((state) => state.signup);
let handleVerify=()=>{
  dispatch(verifyToDoLoading());
axios({
method: "post",
url: "http://localhost:7000/verify",
data: {
  email:email,
  OTP:otp,
},
}).then((res) => {
  alert(res.data.message);
  dispatch(verifyToDoSuccess(res));
  closeModal();
})
.catch((err) => {
  alert(err.response.data.message);
  dispatch(verifyToDoError());
});
}
  return (
    <div>
    <SubscriptionsOutlinedIcon
    onClick={openModal}
    sx={{
      color:"white",
      fontSize:"27.5px",
      marginLeft:'25px',
      marginRight:'25px'
    }}
    />
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <CloseIcon 
      sx={{
        marginLeft:"auto",
        marginRight:"5px",
        position:"relative",
        color:"white",
        '&:hover': {
            color: "gray",
          }
        }}  
        onClick={closeModal}
       />
       
      <img 
      style={{maxWidth:"75px",marginLeft:"auto",marginRight:"auto",marginTop:"10px"}} 
      alt=""
      src='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_75,ar_1,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg'/>
      
      <img 
      alt=""
      style={{maxWidth:"135px",marginLeft:"auto",marginRight:"auto",marginTop:"5px"}}
      src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.55,q_auto:eco,dpr_1.25,f_auto,fl_progressive//image/test/brand-logo/cf-name-white.png"/>
      
{!signtoken? (<form>
      <input 
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputfieldmail}
        type="text"
        placeholder='Name'
         />
        <input 
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputfieldmail}
        type="text"
        placeholder='Email'
         />
        <input 
        required
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        style={inputfieldmail}
        type="number"
        placeholder='Mobile Number'
         />
         <input 
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={inputfieldmail}
        type="password"
        placeholder='Password'
         />
    <div style={{        
      marginLeft:"auto",
      marginRight:"auto",
      width:"300px"
      }}>
    <Button
       onClick={handleSignUp}
        sx={{
        backgroundColor:"white",
        color:"black",
        marginTop:"30px",

        width:"300px",
        opacity:"85%",
        '&:hover': {
            color: 'black',
            backgroundColor: 'white',
          }
    }}
    >
    continue
    </Button>
    </div>
    <p style={{textAlign:"center", color:'white',opacity:"85%",fontSize:"15px"}}>* By Continuing you agree to the Terms <br/> of Services and Privacy policy.</p>
      </form>):(
        <form>
          <input 
        required
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        style={inputfieldmail}
        type="number"
        placeholder='Enter OTP'
         />
         <div style={{        
      marginLeft:"auto",
      marginRight:"auto",
      width:"300px"
      }}>
    <Button
       onClick={handleVerify}
        sx={{
        backgroundColor:"white",
        color:"black",
        marginTop:"30px",

        width:"300px",
        opacity:"85%",
        '&:hover': {
            color: 'black',
            backgroundColor: 'white',
          }
    }}
    >
    Verify
    </Button>
    </div>
        </form>
      )}
    </Modal>
  </div>
  )
}
