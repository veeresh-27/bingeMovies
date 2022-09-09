import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../../components/movieCard";
import CustomPagination from "../../components/customPagination";
import { useNavigate } from "react-router-dom";
import { useGoogleAuth } from "../../context/GoogleAuth";
import { useParams } from "react-router-dom";

function Trending() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { name } = useParams();
  let title = "";
  const handlePageChange = (page, tv) => {
    navigate(`/movieinfo/${tv}/${page}`);
  };
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_MOVIESDB_API_KEY}&page=${page}`
    );
    setContent(data.results);
  };
  const fetchPopularTv = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MOVIESDB_API_KEY}&language=en-US&page=${page}`
    );
    setContent(data.results);
  };
  const fetchlatestTv = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_MOVIESDB_API_KEY}&language=en-US&page=${page}`
    );
    setContent(data.results);
  };
  const fetchUpcomingMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIESDB_API_KEY}&language=en-US&page=${page}`
    );
    setContent(data.results);
  };
  const fetchPopularMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIESDB_API_KEY}&language=en-US&page=${page}`
    );

    setContent(data.results);
  };
  const fetchLatest = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIESDB_API_KEY}&language=en-US&page=${page}`);
    setContent(data.results);
  };
  const { isInitialized } = useGoogleAuth();
  useEffect(() => {
    switch (name) {
      case "trending":
        fetchTrending();
        title = "Trending";
        break;
      case "topRatedMovies":
        title = "Top Rated Movies";
        fetchLatest();
        break;
      case "popularMovies":
        fetchPopularMovies();
        title = "Popular Movies";
        break;
      case "upcomingMovies":
        fetchUpcomingMovies();
        title = "Upcoming Movies";
        break;
      case "topTv":
        fetchlatestTv();
        title = "Top TV";
        break;
      case "popularTv":
        fetchPopularTv();
        title = "Popular TV";
        break;
      default:
    }

    // eslint-disable-next-line
  }, [page, isInitialized]);

  return (
    <div className="home">
      <h1>{title}</h1>
      <div className="cards">
        {content &&
          content.map((data, index) => (
            <MovieCard
              key={data.id}
              id={data.id}
              title={data.title || data.name}
              poster={data.poster_path}
              rating={data.vote_average}
              date={data.release_date || data.first_air_date}
              mediaType={data.media_type}
              onClick={() => handlePageChange(data.id, data.media_type)}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
}

export default Trending;
