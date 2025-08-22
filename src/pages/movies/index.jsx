import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../../components/movieCard";
import CustomPagination from "../../components/customPagination";
import Genre from "../../components/genre";
import useGenre from "../../hooks/useGenre";
import { useNavigate } from "react-router-dom";

function Movies() {
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [genre, setGenre] = useState([]);
  const genreForMovies = useGenre(selectedGenre);
  const navigate = useNavigate();
  const handlePageChange = (page, tv) => {
    navigate(`/movieinfo/${tv}/${page}`);
  };

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_MOVIESDB_API_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${genreForMovies}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };
  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page, genreForMovies]);

  return (
    <div className="home">
      <h1>Movies</h1>
      <Genre
        type="movie"
        selectedGenre={selectedGenre}
        genre={genre}
        setGenre={setGenre}
        setSelectedGenre={setSelectedGenre}
        page={page}
        setPage={setPage}
      />
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
              mediaType="movie"
              onClick={() => handlePageChange(data.id, "movie")}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}

      <h1> Similar movies</h1>
    </div>
  );
}

export default Movies;
