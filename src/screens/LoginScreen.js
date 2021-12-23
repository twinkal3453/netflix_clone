import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        {/* <img src="" alt="" className="loginScreen__logo" /> */}
        <h3
          style={{ color: "#E50914", letterSpacing: "5px", fontSize: "1.8rem" }}
          className="loginScreen__logo"
        >
          FLIXITY
        </h3>
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="loginScreen_gradient" />
      </div>
      <div className="center_line">
        <div className="loginScreen__body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="loginScreen__getStarted"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
