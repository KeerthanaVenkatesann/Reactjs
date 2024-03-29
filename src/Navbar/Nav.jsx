import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
   <div><nav className="  p-2 navbar-port">
      <ul className="d-flex p-2">
        <Link className='mx-2 box p-2' to="/formik">FORMIK</Link>
        <Link className="mx-2 box p-2" to="/razor">
          Razor Pay
        </Link>
        <Link className="mx-2 box p-2" to="/otp">
          OTP
        </Link>
        <Link className="mx-2 box p-2" to="/auto">
          AUTO OTP
        </Link>
      </ul>
    </nav>
    <div className="main">
           <h1> Hi! , This is Keerthana .. Its my Mini Project using Formik, OTP & AUTO OTP in React and also i include  Razor Pay in it! Watch & Enjoy.
           </h1></div>
    
    </div> 
  );
}
