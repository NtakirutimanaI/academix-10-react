import React, { useState } from "react";
import "./Register.css";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="auth-box">
        {isLogin ? (
          <>
            {/* Login Form */}
            <div className="form-section">
              <h2>Login</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Username or Email" required />
                <input type="password" placeholder="Password" required />
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
                <button type="submit">Login</button>
              </form>
              <div className="social-icons">
                <a href="#">G</a>
                <a href="#">f</a>
                <a href="#">in</a>
              </div>
            </div>

            {/* Side Panel */}
            <div className="side-section">
              <h2>Hello, Welcome!</h2>
              <p>Don't have an account?</p>
              <button onClick={() => setIsLogin(false)}>Register</button>
            </div>
          </>
        ) : (
          <>
            {/* Registration Form */}
            <div className="form-section">
              <h2>Registration</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" required />
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Phone Number" required />
                <input type="text" placeholder="Address" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Register</button>
              </form>
            </div>

            {/* Side Panel */}
            <div className="side-section">
              <h2>Welcome Back!</h2>
              <p>Already have an account?</p>
              <button onClick={() => setIsLogin(true)}>Login</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
