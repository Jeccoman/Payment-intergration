import { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import {azamPayCallbackUrl, clientId, clientSecret, appName, BaseUrl } from '../app/azampay';


const PaymentForm = () => {
  
  const [Token,setToken] =useState<any|null>(null)
  const [Apikey,setApikey] = useState<any|null>(null)
  const [loading, setLoading] = useState(false);
  const [paymentData, setPaymentData] = useState({
    accountNumber:'',
    amount: '',
    currency: '',
    externalId: '',
    provider: '',
    additionalProperties: null,
    
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    try {
      const data= {appName,clientId,clientSecret}
      const token =await axios.post(`${BaseUrl}`,data)
      if(token){
        
        setApikey(token.headers)
      
      const response = await axios.post(`${azamPayCallbackUrl}`,paymentData, {
        headers: {
          Authorization: 'Bearer ' + token.data.data.accessToken, 'X-API-Key': Apikey 
        }})
      if (response){
        alert(response.data.message)
      }
  }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="accountNumber" value={paymentData.accountNumber} onChange={handleInputChange} placeholder="Acc No" required /><br/>
      <input type="text" name="amount" value={paymentData.amount} onChange={handleInputChange} placeholder="Amount" required /><br/>
      <input type="text" name="currency" value={paymentData.currency} onChange={handleInputChange} placeholder="Currency" required /><br></br>
      <input type="text" name="externalId" value={paymentData.externalId} onChange={handleInputChange} placeholder="External Id" required /><br/>
      <input type="text" name="provider" value={paymentData.provider} onChange={handleInputChange} placeholder="Provider" required /><br/>


      <button type="submit" disabled={loading}>Submit</button>
      
     </form>
</>
  );
};

export default PaymentForm;