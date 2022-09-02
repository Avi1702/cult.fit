import React, { useState } from 'react'
import {Button} from '@mui/material'
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useDispatch} from 'react-redux';
import axios from 'axios';
import {loginToDoError, loginToDoLoading, loginToDoSuccess} from '../store/actions';

export const Loginmodal = () => {
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
          border:"1px solid white",
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
  const [email,setEmail]=useState('');
  const [password, setPassword]=useState('');
  const dispatch=useDispatch();

  let handleLogin=()=>{
    dispatch(loginToDoLoading());
  axios({
  method: "post",
  url: "http://localhost:7000/login",
  data: {
    email:email,
    password:password
  },
}).then((res) => {
    window.localStorage.setItem("culttoken", res.data.token);
    window.localStorage.setItem("isLoggedin", true);
    alert(res.data.message);
    dispatch(loginToDoSuccess(res.data)); 
    closeModal();
  })
  .catch((err) => {
    alert(err.response.data.message);
    dispatch(loginToDoError());
  });
}
  return (
    <div>
    <LoginOutlinedIcon
    onClick={openModal}
    sx={{
      color:"white",
      fontSize:"30px",
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
      
    <form>
    
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
       onClick={handleLogin}
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
    Login
    </Button>
    </div>
    <p style={{textAlign:"center", color:'white',opacity:"85%",fontSize:"15px"}}>* By Continuing you agree to the Terms <br/> of Services and Privacy policy.</p>
      </form>
    </Modal>
  </div>
  )
}
