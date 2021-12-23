import React, { useState, useEffect } from "react";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";
import Nav from "../Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";

const ProfileScreen = () => {
  const [products, setProducts] = useState([
    {
      plan: "Standard",
      subscribe: false,
      resoulation: "1080p",
    },
    {
      plan: "Basic",
      subscribe: false,
      resoulation: "480p",
    },
    {
      plan: "Premium",
      subscribe: false,
      resoulation: "4K + HDR",
    },
  ]);
  const user = useSelector(selectUser);

  useEffect(() => {}, []);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h4>Plans (Current plan: premium)</h4>
              <div className="Renual__date">
                <p>Renual data: 04/03/2021</p>
                <div className="profileScreen__subscription">
                  {products.map((item, index) => {
                    return (
                      <div className="subscription_1" key={index}>
                        <div className="standard">
                          <p>{`Netflix ${item.plan}`}</p>
                          <p className="stan">{item.resoulation}</p>
                        </div>
                        <button className="profile__SubButton">
                          Subscribe
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
