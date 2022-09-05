import React from 'react'
// import axios from 'axios'


export const Checkout = () => {
    const loadScript=(src)=>{
        // rzp1.open()
        return new Promise(resolve=>{
        const script=document.createElement("script")
        script.scr=src
        script.onload=()=>{
            resolve(true)
        }
        script.onerror=()=>{
            resolve(false)
        }
        document.body.appendChild(script)
    
        })
    
    
    }

   async function displayRazorpay(){
//    console.log("hi")
    const res=await loadScript("https://checkout.razorpay.com/v1/checkout.js")

    if(!res){
   console.log("hi")

        alert("failed")
        return
    }

    const options = {
        "key": "rzp_test_dwOABoLbloaDUc", // Enter the Key ID generated from the Dashboard
        "amount": "1000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Mens Blue",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": "order_KBrfZ2IdzfQsUR", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
        "prefill": {
            "name": "Avinash Kumar",
            "email": "avinashroy@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    const paymentOptions = new Window.Razorpay(options);
    // document.getElementById('rzp-button1').onclick = function(e){
        paymentOptions.open();
        // e.prevetDefault();
    
}


  return (
    <div>
    <h3>Mens blue slim shirt</h3>
    <button id="rzp-button1" onClick={displayRazorpay}>Pay</button>
    </div>
  )
}
