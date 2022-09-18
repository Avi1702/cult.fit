const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../database/user");
const { sendEmail } = require("../helpers/sendEmail");

const SECRET_KEY = "tgbvhfruyshdhdvsfdfevdsvsds";
let otp=crypto.randomInt(10000,99999);
async function register(req, res) {
  let mobile_number = req.body.mobile_number;
  let name = req.body.name;
  let password = req.body.password;
  let email=req.body.email;

//   password= bcrypt.hashSync(password, 20);

  const user = await User.findOne({
    email,
  });

  if (user) {
    return res.status(400).send({
      message: "User already registered",
    });
  }

  await User.create({
    email,
    name,
    mobile_number,
    isVerified:false,
    verifyMobilenumber:otp,
    password,
    cart:[
    ],
    tests:[
    ]
  });
//send a verification email
sendEmail({
    email,
    subject:"Verify Email Address",
    html:`<b>Use OTP ${otp} to verify your email address</b>`
});
  return res.status(200).send({
    data:email,
    message: "User registered successfully, Verify Email",
  });
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
  });

  if (!user) {
    return res.status(404).send({
      message: "EMAIL NOT REGISTERED",
    });
  }
  const matched =  user.password;
  

  if (matched==password){
    const {name,email}=user;
    const token = jwt.sign({ name, email }, SECRET_KEY);
  
    return res.status(200).send({
    message: "Login Successful",
    token,
    user: {
      name: user.name,
      mobile_number:user.mobile_number,
      email: user.email,
    },
  });
}else{
   return res.status(400).send({message:"Invalid Password"});
}
}
async function loggedinuser(req,res){
const token=req.headers.authtoken;
if(token){

try{
    jwt.verify(token, SECRET_KEY);
}
catch(err){
    return res.status(400).send({message:"Invalid token"}); 
}   
}
const decode=jwt.decode(token);
const user=await User.findOne({
    email:decode.email
});
return res.status(200).send({
    name:user.name,
    email:user.email,
    mobile_number:user.mobile_number,
    isVerified:user.isVerified,
    cart:user.cart,
});
}
async function veriFy(req,res){
    const {OTP,email}=req.body;
    const user=await User.findOne({
        email,
    });
    if(!user){
        return res.status(400).send({message:"User does not exist."}); 
    }
    if(user.verifyMobilenumber==OTP){
        await User.findOneAndUpdate({
            email
        },{
            isVerified:true,
            verifyMobilenumber:null
        });
        return res.status(200).send({message:"Email Verified Successfully"}); 
    }else{
        return res.status(400).send({message:"Invalid OTP"}); 
    }
}
module.exports = {
  register,
  login,
  loggedinuser,
  veriFy
};
