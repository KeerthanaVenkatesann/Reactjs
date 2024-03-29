import { Link } from 'react-router-dom';
import '../App.css';
import './Razor.css';
import React,{useState} from 'react';

function Razor() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_CJo5rcE3Na7wQJ",
        key_secret:"riMNbPVAcdtelHrj1Lnqq2qT",
        amount: amount *100,
        currency:"INR",
        name:"EBRAIN_PROJECTS",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"Keerthana",
          email:"kirthana0715@gmail.com",
          contact:"7558103046"
        },
        notes:{
          address:"Ebrain Technologies"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="App text-light ">
     
     <h2 className='mt-5'>Razorpay Payment Integration Using React</h2>
     <br/> <Link className="mx-2 box p-2 " to="/">
    back
        </Link>
     <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     {/* <button className='btn-dark border-secondary border-2 border' >submit</button> */}
     <button type="submit" onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
    </div>
  );
}

export default Razor;
