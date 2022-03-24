import React from 'react'
import "../layout/css/Navbarcss.css";
import { Link } from 'react-router-dom';
import "../layout/css/Logincss.css";
import { FaAccessibleIcon, FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  return (
      
    <div className="child">
         <div className="center">
         <div className="header">
            Login Form
         </div>
         <form>
            <input type="text" placeholder="Email or Username" />
            <FaEnvelope/>
            <input id="pswrd" type="password" placeholder="Password" />
            <FaLock/>
            {/* <i className="fas fa-lock" onclick="show()"></i> */}
            <input type="submit" value="Sign in" />
            <Link to="/forgetpassword">Forgot Password?</Link>
         </form>
      </div>
   
    </div>
  )
}

export default Login