import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";
import { useDispatch, useSelector } from "react-redux";
import { movieList, selectMovie } from "./features/movieSlice";

const Banner = () => {
  const movees = useSelector(selectMovie);
  const dispatch = useDispatch();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      dispatch(
        movieList(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        )
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movees);

  // short the description
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movees?.backdrop_path}")`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movees?.title || movees?.name || movees?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movees?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeButton" />
    </header>
  );
};

export default Banner;
