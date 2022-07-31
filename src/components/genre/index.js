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
  console.log("genre:", genre);
  useEffect(() => {
    fetchGenre();

    return () => {
      setGenre([]);
    };
  }, []);

  const handleAdd = (genre)=>{
    setSelectedGenre([...selectedGenre, genre]);
    setGenre(genre.filter((g)=>g.id !== genre.id));
    setPage(1);
  }

  const handleRemove = (genre)=>{
    setSelectedGenre(selectedGenre.filter((g)=>g.id !== genre.id));
    setGenre([...genre, genre]);
    setPage(1);
  }

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
            onClick={()=>handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genre;
