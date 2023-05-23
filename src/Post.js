import React, { useState, useEffect } from "react";
import "./Post.css";

import axios from "./axios";

const Post = ({ title, fetchurl, isLarge = false }) => {
  const [MovieList, SetMovieList] = useState([]);
  const baseurl = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchurl);
      SetMovieList(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchurl]);

  return (
    <div className="post">
      <h2>{title}</h2>
      <div className="posters">
        {MovieList.map((list) => (
          <img
            className={`poster ${isLarge && "largeposter"}`}
            key={list.id}
            src={`${baseurl}${isLarge ? list.poster_path : list.backdrop_path}`}
            alt={list.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Post;
