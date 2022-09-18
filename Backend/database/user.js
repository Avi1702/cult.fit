const mongoose = require("mongoose");

const cultuserSchema = new mongoose.Schema({
    name: String,
    email: {
        type:String,
        required:true
    },
    mobile_number:{
    type:Number,
    required:true,
    },
    verifyMobilenumber:{
      type:Number,
    },
    isVerified:Boolean,
    password: String,
    cart:{
        type:Array,
        childrenSchema:{
            type:Object,
            childrenSchemas:{
                product_name:{
                    type:String,
                    required:true
                },
                product_image:{
                    type:String,
                    required:true
                },
                price:{
                    type:Number,
                    min:0,
                    required:true
                },
                quantity:{
                    type:Number,
                    min:1,
                    required:true
                }
            }
        }
    },
    tests:{
    type:Array,
    childrenSchema:{
        type:Object,
        childrenSchemas:{
            patient_name:{
                type:String,
                required:true
            },
            gender:{
                type:String,
                required:true
            },
            test_name:{
                type:String,
                required:true
            },
            test_image:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                min:0,
                required:true
            },
            date_of_birth:{
                type:String,
                required:true
            },
            schedule_date:{
                type:String,
                required:true
            }
        }
    }
}
},
{
    timestamps: true
})

const User = mongoose.model("cultuser", cultuserSchema);

module.exports = User;