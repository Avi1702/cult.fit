const mongoose = require("mongoose");

async function connectDb() {
    return new Promise((resolve, reject) => {
        // const url = "mongodb+srv://utsavkatiyar34:Utsav123%4047@cluster0.ukyjn.mongodb.net/cultfit?retryWrites=true&w=majority";
        const url ="mongodb://localhost:27017/cultfit"
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
//         const url = "mongodb+srv://utsavkatiyar34:Utsav123%4047@cluster0.ukyjn.mongodb.net/cultfit?retryWrites=true&w=majority";
//         mongoose.connect(url, {
//             useNewUrlParser:true,
//             useUnifiedTopology:true
//         }).then(()=>{
//         console.log("Successfully connected to database");
        
//         }).catch((err)=>{
//           console.log(err);  

//         })
//     })
// }

// module.exports = connectDb;