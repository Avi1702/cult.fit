const {Router}=require("express");
const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const labTest=Router();

const LabTestSchema=new Schema({
    title:String,
    image:String,
    coverImage:String,
    details:String,
    report:String,
    price:Number,
    offerPrice:Number,
    questions:[],
    test:[{}]
}) ;

const LabTest=model('labTest',LabTestSchema)


labTest.get('/',async(req,res)=>{
    try {
        const labTestData=await LabTest.find();
        console.log(labTestData)
     return res.send(labTestData)   
    } catch (error) {
       console.log(error) 
       return res.send(error)   
    }
     
})

module.exports=labTest;