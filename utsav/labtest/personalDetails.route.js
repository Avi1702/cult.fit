const {Router}=require('express');
const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const personalDetail=Router();

const personalDetailsSchema=new Schema({
    name:String,
    birthDate:String,
    gender:String,
})

const PersonalDetail=model('personalDetail',personalDetailsSchema)

personalDetail.post('/',async(req,res)=>{

    try {
        const {name,birthDate,gender}=req.body;
        let data={
            name,
            birthDate,
            gender
        }

        const personalDetail=await PersonalDetail.create(data);
        return res.send("created")

        
    } catch (error) {
        console.log(error);
        res.send("something Wrong Happned")
    }
})

personalDetail.get('/',async(req,res)=>{
    const data=await PersonalDetail.find();
    res.send(data);
})


module.exports=personalDetail

