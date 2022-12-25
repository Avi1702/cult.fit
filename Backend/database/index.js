const mongoose = require("mongoose");

async function connectDb() {
    return new Promise((resolve, reject) => {
        //   useNewUrlParser:true,
        // const url = "mongodb+srv://utsavkatiyar34:Utsav123%4047@cluster0.ukyjn.mongodb.net/cultfit?retryWrites=true&w=majority";
        const url ="mongodb+srv://Avinash:cultfit%401702@cluster0.2gph224.mongodb.net/cultfit?retryWrites=true&w=majority"
        // const url=process.env.DATABASE

        mongoose.connect(url, (err) => {
           
            if (err) {
                return reject(err)
            }

            console.log("Database successfully connected.");
            return resolve()
        })
    })
}

module.exports = connectDb;







// const mongoose = require("mongoose");

// async function connectDb() {
//     return new Promise((resolve, reject) => {
//         // const url = "mongodb+srv://utsavkatiyar34:Utsav123%4047@cluster0.ukyjn.mongodb.net/cultfit?retryWrites=true&w=majority";
//         const url ="mongodb+srv://AvinashRoy:Mongodb@1702@cluster0.rmkw4lq.mongodb.net/?retryWrites=true&w=majority"

//         mongoose.connect(url, {
//             useNewUrlParser:true,
//             // useCreateIndex:true,
//             useUnifiedTopology:true
//             // useFindAndModify:false
//         }).then(()=>{
//         console.log("Successfully connected to database");
        
//         }).catch((err)=>{
//           console.log(err);  

//         })
//     })
// }

module.exports = connectDb;