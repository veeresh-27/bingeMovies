import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { useGoogleAuth } from "../../context/GoogleAuth";
import MovieCarousel from "../../components/movieCarousel";
import { Helmet } from "react-helmet-async";
import Banner from "../../components/banner";

function Home() {
  const [content, setContent] = useState([]);
  const [latest, setLatest] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [latestTv, setLatestTv] = useState([]);
  const [popularTv, setPopularTv] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${
        process.env.REACT_APP_MOVIESDB_API_KEY
      }&page=${1}`
    );
    setContent(data.results);
  };
  const fetchPopularTv = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=4bc26b51ad50cd9c0be76557d5c494b6&language=en-US&page=1`
    );
    setPopularTv(data.results);
  };
  const fetchlatestTv = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=4bc26b51ad50cd9c0be76557d5c494b6&language=en-US&page=1`
    );
    setLatestTv(data.results);
  };
  const fetchUpcomingMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${
        process.env.REACT_APP_MOVIESDB_API_KEY
      }&page=${1}`
    );
    setUpcomingMovies(data.results);
  };
  const fetchPopularMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=4bc26b51ad50cd9c0be76557d5c494b6&language=en-US&page=1`
    );

    setPopularMovies(data.results);
  };
  const fetchLatest = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIESDB_API_KEY}&language=en-US&page=1`);
    setLatest(data.results);
  };
  const { isInitialized } = useGoogleAuth();
  useEffect(() => {
    fetchTrending();
    fetchLatest();
    fetchPopularMovies();
    fetchUpcomingMovies();
    fetchlatestTv();
    fetchPopularTv();
    // eslint-disable-next-line
  }, [isInitialized]);

  return (
    <div className="home">
      <Helmet>
        <title>Binge Movies</title>
        <meta name="description" content="Catch up your favourite Movies and TV shows." />
        <link rel="canonical" href="/home" />
      </Helmet>
      <div className="banner">
        <Banner />
      </div>
      <div>
        <h3>Trending</h3>
        <MovieCarousel content={content} />
      </div>
      <div>
        <h3>Top rated Movies</h3>
        <MovieCarousel content={latest} type="movie" />
      </div>
      <div>
        <h3>Popular Movies</h3>
        <MovieCarousel content={popularMovies} type="movie" />
      </div>
      <div>
        <h3>Upcoming Movies</h3>
        <MovieCarousel content={upcomingMovies} type="movie" />
      </div>
      <div>
        <h3>Top TV Shows </h3>
        <MovieCarousel content={latestTv} type="tv" />
      </div>
      <div>
        <h3>Pupular TV Shows </h3>
        <MovieCarousel content={popularTv} type="tv" />
      </div>
    </div>
  );
}

export default Home;
