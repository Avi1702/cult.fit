const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT||7000;

// const express = require("express");
// const app = express();
// const PORT = 3070;
// const cors = require("cors");

const connectDb = require("./database/index");
const { register, login, loggedinuser, veriFy } = require('./auth/auth');
const { Verify } = require('crypto');
const { getCart, addCart, deleteCart, updateCart, addTest, getTest, deleteTests, checkOut } = require('./auth/cart');
const labTestRoute=require('./labtest/labTest.route');
const personalDetail=require('./labtest/personalDetails.route',)

function logger(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
}

app.use(cors());
app.use(express.json());
app.use(logger);

// app.use("/",(req,res)=>{
//     res.send("hello")
// })

app.get('/loggeduser', loggedinuser);
app.post('/register', register);
app.post('/login', login);
app.post('/verify',veriFy);

app.get('/cart',getCart);
app.post('/addcart',addCart);
app.delete('/removefromcart', deleteCart);
app.post('/updatequantity', updateCart);
app.post('/addtest', addTest);
app.get('/gettest', getTest);
app.delete('/removetest', deleteTests);
app.post('/checkout', checkOut);

app.use("/labTest",labTestRoute);
app.use('/personalDetails',personalDetail)

if(process.env.NODE_ENV="production"){
    app.use(express.static("Frontend/build"))
}

connectDb()
.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}).catch((err) => {
    console.log(err);
})