import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Otp() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [enteredOtp, setEnteredOtp] = useState(['', '', '', '']);
  const [isOtpValid, setIsOtpValid] = useState(false);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const generateOtp = () => {
    const newOtp = Array.from({ length: 4 }, () => Math.floor(0 + Math.random() * 9).toString());
    setOtp(newOtp);
    setIsOtpValid(false);
    inputRefs[0].current.focus();
  };

  const handleOtpChange = (index, value) => {
    const newEnteredOtp = [...enteredOtp];
    newEnteredOtp[index] = value;
    setEnteredOtp(newEnteredOtp);

    if (value !== '' && index < 3) {
      inputRefs[index + 1].current.focus();
    }

    const enteredFullOtp = newEnteredOtp.join('');
    setIsOtpValid(enteredFullOtp === otp.join(''));
  };

  const handleSubmit = () => {
    if (isOtpValid) {
      alert('OTP is valid!');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className='login-box text-center mt-5'>
     
      <h2 className='text-danger'>Generated OTP ({otp.join('')})</h2>
      <Link className="mx-2 box p-2 " to="/">
    back
        </Link> <button className='mt-3' onClick={generateOtp}>
      <span></span>
          <span></span>
          <span></span>
          <span></span> Generate New OTP
      </button>
      <br />

      {/* Input fields for entering OTP */}
      {otp.map((digit, index) => (
        <input
          key={index}
          type='text'
         
          className='mt-3 text-center'
          maxLength={1}
          value={enteredOtp[index]}
          onChange={(e) => handleOtpChange(index, e.target.value)}
          ref={inputRefs[index]}
        />
      ))}
      <br />

      {/* Button to submit OTP */}
      <button className='mt-3' onClick={handleSubmit}>
      <span></span>
          <span></span>
          <span></span>
          <span></span>  Submit OTP
      </button>
      <br />
    </div>
  );
}

export default Otp;