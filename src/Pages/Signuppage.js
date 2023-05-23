import React, { useRef } from "react";
import "./Signuppage.css";
import { auth } from "../firebase";
const Signuppage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
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

  const newuser = (e) => {
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
    <div className="signup">
      <h1>Sign In</h1>
      <form>
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter your Email address"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter your Password"
        />
        <button type="submit" onClick={signin}>
          Sign In
        </button>
        <h4>
          <span className="greycolor">New to Netflix?</span>{" "}
          <span className="link" onClick={newuser}>
            Signup Now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default Signuppage;
