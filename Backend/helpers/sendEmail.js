const nodemailer=require("nodemailer")

const EMAIL="vesta67@ethereal.email";
const PASSWORD="xXQRR1KAYdbSuNmzrZ";

const transport = nodemailer.createTransport({
    host:"smtp.ethereal.email",
    port:587,
    secure:false,
    auth:{
        user:EMAIL,
        pass:PASSWORD,
    }
})

async function sendEmail({email,subject,html}){
    return transport.sendMail({
        to:email,
        subject,
        from:EMAIL,
        html
    })
}
module.exports={
    sendEmail
};