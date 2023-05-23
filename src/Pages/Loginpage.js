import React, { useState } from "react";
import "./Loginpage.css";
import Signuppage from "./Signuppage";
const Loginpage = () => {
  const [SignIn, setSignIn] = useState(false);
  return (
    <div className="Login">
      <div className="login_bg">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="signin_btn">
          SIGN IN
        </button>
        <div className="login_gradient"></div>
        {SignIn ? (
          <Signuppage />
        ) : (
          <div className="loginpage_content">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login_input">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login_btn"
                >
                  Get Started{" "}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loginpage;
