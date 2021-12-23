import React, { useState, useEffect } from "react";
import "./MovieSpec.css";
import axios from "../axios";

const API_KEY = process.env.REACT_APP_KEY;

const MovieSpec = ({ match }) => {
  const id = match.params.id;
  const [movie, setMovie] = useState([]);
  // const [trending, setTrending] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
      setMovie(request);
      return request;
    }
    fetchData();
  }, []);

  const movi = movie.data;
  //   console.log(movi);

  // short the description
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <div>
      {movi && (
        <>
          <div className="movie__main">
            <img
              className="movie__image"
              src={`${base_url}${movi.poster_path}`}
              alt=""
            />
            <div className="Spec__movie">
              <h1>{movi.title}</h1>
              <p>{movi.tagline ? movi.tagline : ""}</p>
              <div className="movie__desc">
                <p>{truncate(movi?.overview, 180)}</p>
              </div>
              <div className="movie__buttons">
                <button className="movie__button movie__play">
                  Stream Now
                </button>
                <button className="movie__button movie__playTrailor">
                  <a href="https://firebasestorage.googleapis.com/v0/b/netflix-clone-6bc9e.appspot.com/o/BlackWidow.mp4?alt=media&token=f8c2d5c4-53ea-48d3-8a8b-d24a19d82269">
                    Watch Trailor
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* <div className="movie__list">
            
          </div> */}
        </>
      )}
    </div>
  );
};

export default MovieSpec;
