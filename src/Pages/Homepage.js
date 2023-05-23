import React from "react";
import Navbar from "../Navbar";
import Banner from "../Banner";
import Post from "../Post";
import Requests from "../Requests";
const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Banner />
      <Post title="NETFLIX ORIGINALS" fetchurl={Requests.originals} isLarge />
      <Post title="ACTION MOVIES" fetchurl={Requests.action} isLarge />
      <Post title="HORROR MOVIES" fetchurl={Requests.horror} isLarge />
      <Post title="COMEDY MOVIES" fetchurl={Requests.comedy} isLarge />
      <Post title="ROMANTIC MOVIES" fetchurl={Requests.romance} isLarge />
      <Post title="ANIMATED MOVIES" fetchurl={Requests.animation} isLarge />
      <Post
        title="FICTION MOVIES"
        fetchurl={Requests.science_fiction}
        isLarge
      />
    </div>
  );
};

export default Homepage;
