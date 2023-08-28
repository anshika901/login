import React from "react";
import { FaUser, FaLock } from 'react-icons/fa';
import "./Login.css";
import Avatar from "./Avatar";
function Login(){
     return(
        <div className="login-container">
        <div className="login-form">
        <Avatar src='https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png' alt=""/>
          <form>
            <div className="input-container">
              <FaUser className="input-icon" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-container">
              <FaLock className="input-icon" />
              <input type="password" placeholder="Password" />
            </div>
              <button type="submit">LOGIN</button>
              <a id="forgot-password-btn" href="#">Forgot your password?</a>
              </form>
        </div>
      </div>
    );
}
export default Login;
