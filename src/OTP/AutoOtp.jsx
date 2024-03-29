import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AutoOtp = () => {
  const [otp, setOtp] = useState('');
  const [userInput, setUserInput] = useState(['', '', '', '']);
  const [isMatched, setIsMatched] = useState(null);
  const [autoFillEnabled, setAutoFillEnabled] = useState(false);
  const inputRefs = useRef([...Array(userInput.length)].map(() => React.createRef()));

  const generateOTP = () => {
    const randomOTP = Math.floor(1000 + Math.random() * 9000);
    setOtp(randomOTP.toString());
    setIsMatched(null);

  
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }

  
    new Notification('Generated OTP', {
      body:` Your OTP is: ${randomOTP}`,
    });
  };

  const handleInputChange = (index, value) => {
    const newInput = [...userInput];
    newInput[index] = value;
    setUserInput(newInput);
    if (index < userInput.length - 1 && value !== '') {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData('text');
    if (/^\d+$/.test(pastedData) && pastedData.length === userInput.length) {
      const newInput = pastedData.split('').slice(0, userInput.length);
      setUserInput(newInput);
    }
  };

  const handleSubmit = () => {
    const enteredOtp = userInput.join('');
    if (enteredOtp === otp) {
      setIsMatched(true);
    } else {
      setIsMatched(false);
    }
  };

  const handleAutoFillToggle = () => {
    if (otp) {
      setAutoFillEnabled(!autoFillEnabled);
    }
  };

  useEffect(() => {
    if (autoFillEnabled) {
      setUserInput(otp.split(''));
    }
  }, [otp, autoFillEnabled]);

  useEffect(() => {
    if (autoFillEnabled) {
      handleSubmit();
    }
  }, [userInput, autoFillEnabled]);

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>

    <div className=' w-50 shadow-lg text-center '>
    <Link className="mx-2 box p-2  " to="/">
    back
        </Link>
      <button className='rounded  text-center mb-3 ' onClick={generateOTP}> <span></span>
          <span></span>
          <span></span>
          <span></span>Generate Number</button>
      {otp && (
 <h2 className='fs-4 fw-bold'>
 Auto Fill:
 <input className='w-10'  type="checkbox" checked={autoFillEnabled} onChange={handleAutoFillToggle} />
</h2>
      )}
     

      {otp && <h2>Your OTP is: {otp}</h2>}

      {otp && (
        <div>
          <p className='text-light'>Enter OTP:</p>
          <form>
            {userInput.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={inputRefs.current[index]}
                
                className='ms-2 mb-3 '
                onChange={(e) => handleInputChange(index, e.target.value)}
                onPaste={(e) => handlePaste(e)}
              />
            ))}
          </form>
          <div>
            <button className=' ' onClick={handleSubmit}> <span></span>
          <span></span>
          <span></span>
          <span></span>Submit</button>
          </div>
        </div>
      )}

      {isMatched === true && <p style={{ color: 'green' }}>OTP Matched! ✔ <br/> Yup!! Finally found the ALIEN!!!</p>}
      {isMatched === false && <p style={{ color: 'red' }} className='mb-3'>OTP does not match! ❌ <br/> Ohh NO! You are just a human</p>}
    </div></div>
  );
};

export default AutoOtp;