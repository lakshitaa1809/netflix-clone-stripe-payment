import React, { useEffect } from "react";
import "./App.css";
import { auth } from "./firebase";
import Loginpage from "./Pages/Loginpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/Userslice";
import Userprofilepage from "./Pages/Userprofilepage";
const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);
  return (
    <div className="App">
      {!user ? (
        <Loginpage />
      ) : (
        <div className="homepage">
          <BrowserRouter>
            <Routes>
              <Route path="/userprofile" element={<Userprofilepage />} />
            </Routes>
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
};

export default App;
