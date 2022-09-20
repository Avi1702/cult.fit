import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { TestDetailsCard } from './TestDetailsCard';



export default function TestModal({open,setOpen,test,testData}) {
  const handleAlign=()=>{
    if(testData.length<4){
      return "center"
    }
    return "left";
  }
  return (
    <div style={{outline:"none"}}>
      <Modal
        open={open}
        onClose={()=>setOpen(!open)}        
          
      >
        <Box sx={{
        
            "&:hover": {
              outline : "none",
            },
            "&:focus":{
                outline: "none"
            },
            display:"flex",
            gap:"30px",
            justifyContent:{handleAlign},
            marginTop:"50px",
            alignItems:"center",
            padding:"0px 200px 160px 50px",
            overflowY: "scroll"

          }}>
            {
                testData.map((ele)=><TestDetailsCard test={ele} key={ele.name}/>)
            }
        
        </Box>
      </Modal>
    </div>
  );
}
