import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Formik from "./Formik/Formik";
import Razor from "./Razorpay/Razor";
import Otp from "./OTP/Otp";

import AutoOtp from "./OTP/AutoOtp";
import Layout from "./Layout/Layout";
import Nav from "./Navbar/Nav";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      
          <Route path="/" element={<Nav />}></Route>
          <Route index element={<Nav />}></Route>
          <Route path="/formik" element={<Formik />}></Route>
          <Route path="/razor" element={<Razor />}></Route>
          <Route path="/otp" element={<Otp />}></Route>
          <Route path="/auto" element={<AutoOtp />}></Route>
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
