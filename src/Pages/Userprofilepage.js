import React from "react";
import "./Userprofilepage.css";
import Navbar from "../Navbar";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import Subscriptionpage from "./Subscriptionpage";
import { selectUser } from "../features/Userslice";
const Userprofilepage = () => {
  const user = useSelector(selectUser);
  return (
    <div className="userprofile">
      <Navbar />
      <div className="profile">
        <h1>Edit Profile</h1>
        <img
          className="avatar1"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt=""
        />
        <div className="profile_info">
          <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="profile_plans">
              <h3 className="underline">Plans</h3>
              <Subscriptionpage />
              <button className="signout_btn" onClick={() => auth.signOut()}>
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Userprofilepage;
