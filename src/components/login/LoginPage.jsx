import React, { useState } from "react";
import "./LogIn.css";
import { Eye, EyeOff, Mail, Lock, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login submitted successfully!");
  };

  return (
    <div className="epm-login-page">
      <div className="epm-login-top">
        <Link to="/" className="epm-login-back">
          <ArrowLeft size={18} />
          Back to Website
        </Link>

        <div className="epm-login-contact">
          <span>📱 9990202018 , 9990202016</span>
          <span>/</span>
          <span><Phone size={16} /> 0120-4264717</span>
          <span>/</span>
          <span><Mail size={16} /> tanish@epmwealth.com</span>
        </div>
      </div>

      <div className="epm-login-card">
        

        <h1>Sign-in to access great benefits</h1>
        <p className="epm-login-subtitle">
          Secure access to your EPM Wealth client portal.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="epm-input-box">
            <Mail size={18} />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="epm-input-box">
            <Lock size={18} />
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              required
            />

            <button
              type="button"
              className="epm-pass-toggle"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button className="epm-login-submit" type="submit">
            Login
          </button>
        </form>

        <div className="epm-login-links">
          <a href="#">Forgot Password?</a>
        </div>

        <p className="epm-login-terms">
          By proceeding, I agree to T&C, Privacy Policy and Disclaimer.
        </p>
      </div>

      <div className="epm-login-footer">
        <h3>Excelsior Pinnacle Minds Pvt. Ltd</h3>
        <p>814, 8th Floor Wave Silver Tower, Sector 18, Noida, Uttar Pradesh, 201301</p>
        <span>Copyright © 2026 EPM. All rights reserved.</span>
      </div>
    </div>
  );
};

export default LoginPage;