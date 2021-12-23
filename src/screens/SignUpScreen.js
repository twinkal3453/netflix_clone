import React, { useState, useRef } from "react";
import "./SignUpScreen.css";
import Register from "./Register";

import { auth } from "../firebase";

const SignUpScreen = () => {
  const [register, setRegister] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // const register = (e) => {
  //   e.preventDefault();

  //   auth
  //     .createUserWithEmailAndPassword(
  //       emailRef.current.value,
  //       passwordRef.current.value
  //     )
  //     .then((authUser) => {
  //       console.log(authUser);
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      {register ? (
        <Register />
      ) : (
        <div className="signupScreen">
          <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder="Email" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button type="submit" onClick={signIn}>
              Sign In
            </button>
            <h4>
              <span className="signupScreen__grey">New to Flixity? </span>
              <span
                className="signUpScreen__link"
                onClick={() => setRegister(true)}
              >
                Sign Up now.
              </span>
            </h4>
          </form>
        </div>
      )}
    </>
  );
};

export default SignUpScreen;
