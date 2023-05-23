import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import Requests from "./Requests";
const Banner = () => {
  const [Movie, SetMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Requests.originals);
      SetMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return Requests;
    }
    fetchData();
  }, []);
  console.log(Movie);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div
      className="banner_bg"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner_content">
        <div className="banner_title">{Movie?.name}</div>
        <div className="banner_btn">
          <button className="btn">Play</button>
          <button className="btn">List</button>
        </div>
        <div className="content">{truncate(Movie?.overview, 150)}</div>
      </div>
    </div>
  );
};

export default Banner;
