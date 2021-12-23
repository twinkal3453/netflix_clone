import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        {/* <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        /> */}
        <h3
          onClick={() => history.push("/")}
          style={{ letterSpacing: "5px", color: "#E50914", fontSize: "1.5rem" }}
          className="nav__logo"
        >
          FLIXITY
        </h3>
        <img
          onClick={() => history.push("./profile")}
          className="nav__avatar"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Nav;
