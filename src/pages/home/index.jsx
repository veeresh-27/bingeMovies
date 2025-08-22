import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import MovieCarousel from "../../components/movieCarousel";
import { Helmet } from "react-helmet-async";
import Banner from "../../components/banner";
import { useNavigate } from "react-router-dom";
import Trending from "../trending";
import SubPages from "../../components/subPages";

function Home() {
  const [content, setContent] = useState([]);
  const [latest, setLatest] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [latestTv, setLatestTv] = useState([]);
  const [popularTv, setPopularTv] = useState([]);

  const subContent = [
    {
      name: "Trending",
      link: "trending",
      content: content,
    },
    {
      name: "Top Rated Movies",
      link: "topRatedMovies",
      content: latest,
    },
    {
      name: "Popular Movies",
      link: "popularMovies",
      content: popularMovies,
    },
    {
      name: "Upcoming Movies",
      link: "upcomingMovies",
      content: upcomingMovies,
    },
    {
      name: "Top TV",
      link: "topTv",
      content: latestTv,
    },
    {
      name: "Popular TV Shows",
      link: "popularTv",
      content: popularTv,
    },
  ];

  const navigate = useNavigate();
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${
        import.meta.env.VITE_MOVIESDB_API_KEY
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
      `https://api.themoviedb.org/3/movie/upcoming?api_key=4bc26b51ad50cd9c0be76557d5c494b6&language=en-US&page=1`
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
    https://api.themoviedb.org/3/movie/top_rated?api_key=${
      import.meta.env.VITE_MOVIESDB_API_KEY
    }&language=en-US&page=1`);
    setLatest(data.results);
  };

  useEffect(() => {
    fetchTrending();
    fetchLatest();
    fetchPopularMovies();
    fetchUpcomingMovies();
    fetchlatestTv();
    fetchPopularTv();
  }, []);
  const handlePageChange = (e) => {
    navigate(`/trending`);
    e.stopPropogation();
  };

  return (
    <div className="home" style={{ gap: "20px" }}>
      <Helmet>
        <title>Binge Movies</title>
        <meta
          name="description"
          content="Catch up your favourite Movies and TV shows."
        />
        <link rel="canonical" href="/home" />
      </Helmet>
      <div className="banner">
        <Banner />
      </div>

      {subContent.map(({ name, link, content }, index) => (
        <SubPages key={index} title={name} link={link} content={content} />
      ))}
    </div>
  );
}

export default Home;
