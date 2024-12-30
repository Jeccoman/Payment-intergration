
"use client"
import React from "react";

// import { FlutterWaveButton, closePaymentModal, useFlutterwave } from "flutterwave-react-v3";
import PaymentForm from "@/New folder/page";
import FetchUrl from "@/components/page";

// export const metadata = {
//   title: "Home | Nova Music",
// };
export default function Page() {

//   const config :any ={
//     public_key:'',
//     tx_ref:Date.now(),
//     amount:100,
//     currency: 'TZS',
//     payment_options:"ussd",
//     customer:{
//       email:'albinus@gmail.com',
//       phone_number:'0756040822',
//       name:'Albinus',

//     },
//     customizations:{
//       title:'Payment Options',
//       description:'Payment Options',
//       logo:'http://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
      
//     },

//   }

// const handleFlutterPayment=useFlutterwave(config as any)

  let Token = "446e847c-063f-48fe-8fbc-f302c7a56ebe"

  // const fwConfig ={
  //   ...config,
  //   text:'Payment',
  //   callback:(response: any) =>{
  //     console.log(response)
  //     // closePaymentModal()
  //   },
  //   onClose:()=>{
  //     alert('closed')
  //   }
  // }

  const handlePay = async()=>{

    // handleFlutterPayment({
    //   callback:(response :any)=>{
    //     closePaymentModal()
    //   }
    // })
    // const fwConfig ={
    //   text:'Payment',
    //   callback:(response: any) =>{
    //     console.log(response)
    //     closePaymentModal()
    //   },
    //   onClose:()=>{}
    // }

    // closePaymentModal()

// const data = {'appName': 'myApp', 'clientId': '0000-0000', 'clientSecret': 'XRTRFF123ADED$FFAER'};
// fetch('/AppRegistration/GenerateToken', {
// method: 'POST',
// body: JSON.stringify({data}),
// })
// .then((res: any) => { 
//   if(res.statusCode === 200) {
//       const data ={'accountNumber':'122','amount':'100','currency':'TZS','externalId':'123','provider':'Tigo','additionalProperties':null}
    
//     const headers={'Content-Type':'application/json','Authorization':'Bearer ' + "446e847c-063f-48fe-8fbc-f302c7a56ebe",'X-API-Key':'12345'};
//     fetch(`/azampay/mno/checkout,{method:'POST',headers,body:data}`)
//     .then((res: any)=>{
//        alert('ssssss')
//     })
//     .catch((err: any)=>{
//      alert('error')
//     })
//   }
//   })
//   .catch((err: any)=>{
//      alert('error')
//     })

  }

  return (

   
<div>
    
      <PaymentForm/>
      {/* <FetchUrl/> */}
    </div>
   
  );
}



