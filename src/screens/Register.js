import React, { useState, useRef } from "react";
import "./SignUpScreen.css";

import { auth } from "../firebase";
import SignUpScreen from "./SignUpScreen";

const Register = () => {
  const [signIn, setSignIn] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      {signIn ? (
        <SignUpScreen />
      ) : (
        <div className="signupScreen">
          <form>
            <h1>Register</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button type="submit" onClick={register}>
              Register
            </button>
            <h4>
              <span className="signupScreen__grey">Member to Flixity?</span>
              <span
                className="signUpScreen__link"
                onClick={() => setSignIn(true)}
              >
                Sign In now.
              </span>
            </h4>
          </form>
        </div>
      )}
    </>
  );
};

export default Register;
