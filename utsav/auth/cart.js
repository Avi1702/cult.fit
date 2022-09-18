const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../database/user");
const SECRET_KEY = "tgbvhfruyshdhdvsfdfevdsvsds";

async function getCart(req,res){
    let total=0;
    const token=req.headers.authtoken;
    if(token){
    
    try{
        jwt.verify(token, SECRET_KEY);
    }
    catch(err){
        return res.status(400).send("invalid token"); 
    }   
    }
    const decode=jwt.decode(token);
    const user=await User.findOne({
        email:decode.email
    });
    let cart=user.cart;
    for(let i=0;i<cart.length;i++){
        if((cart[i].price)>1){
        total=total+(cart[i].price*cart[i].quantity)
        }
    }
    return res.status(200).send({
        cart,
        Grandtotal:total
    });
}
//for tests
async function getTest(req,res){
    let testTotal=0;
    const token=req.headers.authtoken;
    if(token){
    
    try{
        jwt.verify(token, SECRET_KEY);
    }
    catch(err){
        return res.status(400).send("invalid token"); 
    }   
    }
    const decode=jwt.decode(token);
    const user=await User.findOne({
        email:decode.email
    });
    let cart=user.tests;
    for(let i=0;i<cart.length;i++){
        if((cart[i].price)>1){
            testTotal=testTotal+(cart[i].price);
        }
    }
    console.log(testTotal);
    return res.status(200).send({
        cart,
        Test_Grandtotal:testTotal
    });
}
async function addCart(req,res){
    const token=req.headers.authtoken;
    const {product_name,price,quantity,product_image}=req.body;
    if(token){
    
    try{
        jwt.verify(token, SECRET_KEY);
    }
    catch(err){
        return res.status(400).send("Invalid token"); 
    }   
    }
    const decode=jwt.decode(token);
    const user=await User.findOne({
        email:decode.email
    });
    let Cart=user.cart;
   if(price<1||quantity<1){
       return res.status(400).send("Invalid request"); 
   }else{
    let index = null
    Cart.forEach((el, i) => {
        if (el.product_name == product_name) {
            index = i;
        }
    })

    if (index == null) {
        Cart.push({
            product_name,
            price,
            quantity,
            product_image
        });
    } else {
        return res.status(400).send("Product already registered."); 
    }
    }
    await User.findOneAndUpdate({
        email:decode.email
    },{
       cart:Cart
    })

    return res.status(200).send({
        Cart,
    });
}
//for test
async function addTest(req,res){
    const token=req.headers.authtoken;
    const {patient_name,date_of_birth,schedule_date,test_image,test_name,gender,price}=req.body;
    if(token){
    
    try{
        jwt.verify(token, SECRET_KEY);
    }
    catch(err){
        return res.status(400).send({message:"Please login first."}); 
    }   
    }
    const decode=jwt.decode(token);
    const user=await User.findOne({
    email:decode.email
    });
    let Test=user.tests;
   if(price<1){
       return res.status(400).send("Invalid request"); 
   }else{
    let index = null
    Test.forEach((el, i) => {
        if (el.test_name == test_name && el.patient_name==patient_name) {
            index = i;
        }
    })

    if (index == null) {
        Test.push({
            patient_name,
            price,
            date_of_birth,
            schedule_date,
            test_image,
            test_name,
            gender
        });
    } else {
        return res.status(400).send(`${test_name} is already scheduled for ${patient_name}`); 
    }
    }
    await User.findOneAndUpdate({
        email:decode.email
    },{
       tests:Test
    })

    return res.status(200).send({
        message:`${test_name} test successfully scheduled for ${patient_name} at ${schedule_date}`,
        Test,
    });
}


async function deleteCart(req,res){
    const token=req.headers.authtoken;
    const {product_name}=req.body;
    if(token){
    
    try{
        jwt.verify(token, SECRET_KEY);
    }
    catch(err){
        return res.status(400).send("Invalid User"); 
    }   
    }
    const decode=jwt.decode(token);
    const user=await User.findOne({
        email:decode.email
    });
    let Cart=user.cart;

    let index = null
    Cart.forEach((el, i) => {
        if (el.product_name == product_name) {
            index = i;
        }
    })

    if (index == null) {
        return res.status(400).send("Invalid Request"); 
    } else {
        Cart.splice(index, 1);
    }
  
    await User.findOneAndUpdate({
        email:decode.email
    },{
       cart:Cart
    })

    return res.status(200).send({
        Cart,
    });
}
//for labtests
async function deleteTests(req,res){
    const token=req.headers.authtoken;
    const {test_name, patient_name}=req.body;
    if(token){
    
    try{
        jwt.verify(token, SECRET_KEY);
    }
    catch(err){
        return res.status(400).send("Invalid User"); 
    }   
    }
    const decode=jwt.decode(token);
    const user=await User.findOne({
        email:decode.email
    });
    let Test=user.tests;

    let index = null
    Test.forEach((el, i) => {
        if (el.patient_name == patient_name && el.test_name == test_name) {
            index = i;
        }
    })

    if (index == null) {
        return res.status(400).send("Invalid Request"); 
    } else {
        Test.splice(index, 1);
    }
  
    await User.findOneAndUpdate({
        email:decode.email
    },{
       tests:Test
    })

    return res.status(200).send({
        Test
    });
}

async function checkOut(req,res){
    const token=req.headers.authtoken;
    if(token){
    
    try{
        jwt.verify(token, SECRET_KEY);
    }
    catch(err){
        return res.status(400).send("Invalid User"); 
    }   
    }
    const decode=jwt.decode(token);
    const user=await User.findOne({
        email:decode.email
    });
    let Test=user.tests;
    let Cart=user.cart;
    await User.findOneAndUpdate({
        email:decode.email
    },{
       tests:[],
       cart:[]
    })

    return res.status(200).send({
    message:"Order placed successfully."
    });
}

async function updateCart(req,res){
    const token=req.headers.authtoken;
    const {product_name,quantity}=req.body;
    if(token){
    try{
        jwt.verify(token, SECRET_KEY);
    }
    catch(err){
        return res.status(400).send("Invalid token"); 
    }   
    }
    const decode=jwt.decode(token);
    const user=await User.findOne({
        email:decode.email
    });
    let Cart=user.cart;

    let index = null;
    Cart.forEach((el, i) => {
        if (el.product_name == product_name) {
            index = i;
        }
    })

    if (index == null) {
        return res.status(400).send("Product not added.");
    } else {
    if(quantity<1){
        Cart.splice(index, 1);
    }else{
        Cart[index].quantity=quantity;
    }
    }
  
    await User.findOneAndUpdate({
        email:decode.email
    },{
       cart:Cart
    })

    return res.status(200).send({
        Cart,
    });
}

module.exports={
    getCart,
    getTest,
    addCart,
    deleteTests,
    deleteCart,
    updateCart,
    checkOut,
    addTest
}