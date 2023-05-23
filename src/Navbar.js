import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [Show, HandleShow] = useState(false);
  const Navtransition = () => {
    if (window.scrollY > 100) {
      HandleShow(true);
    } else {
      HandleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", Navtransition);
    return () => {
      window.removeEventListener("scroll", Navtransition);
    };
  }, []);
  return (
    <div className={`Nav ${Show && "Navbg"}`}>
      <div className="Navbar">
        <img
          onClick={() => navigate("/")}
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <img
          onClick={() => navigate("/Userprofile")}
          className="avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
