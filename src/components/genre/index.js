import React, { useEffect } from "react";
import axios from "axios";
import { Chip } from "@material-ui/core";

const Genre = ({
  genre,
  setGenre,
  selectedGenre,
  setSelectedGenre,
  type,
  setPage,
  page,
}) => {
  const fetchGenre = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_MOVIESDB_API_KEY}&language=en-US`
    );
    setGenre(data.genres);
  };
  useEffect(() => {
    fetchGenre();

    return () => {
      setGenre([]);
    };
    // eslint-disable-next-line
  }, []);

  const handleAdd = (gnr) => {
    setSelectedGenre([...selectedGenre, gnr]);
    setGenre(genre.filter((g) => g.id !== gnr.id));
    setPage(1);
  };

  const handleRemove = (gnr) => {
    setSelectedGenre(selectedGenre.filter((g) => g.id !== gnr.id));
    setGenre([...genre, gnr]);
    setPage(1);
  };

  return (
    <div style={{ padding: "8px 0" }}>
      {selectedGenre &&
        selectedGenre.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            color="primary"
            clickable
            key={genre.id}
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genre &&
        genre.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            clickable
            key={genre.id}
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genre;
