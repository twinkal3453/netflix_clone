import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";
import Footer from "../Footer";

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <Nav />
      <Banner />
      {/* Row */}
      <Row
        title="FLIXITY ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} isLargeRow />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} isLargeRow />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} isLargeRow />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} isLargeRow />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
      <Footer />
    </div>
  );
};

export default HomeScreen;
