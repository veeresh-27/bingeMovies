import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { useGoogleAuth } from "../../context/GoogleAuth";
import MovieCarousel from "../../components/movieCarousel";

function Home() {
  const [content, setContent] = useState([]);
 
  //const navigate = useNavigate();
 
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${
        process.env.REACT_APP_MOVIESDB_API_KEY
      }&page=${1}`
    );
    setContent(data.results);
  };
  const { isInitialized } = useGoogleAuth();
  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [isInitialized]);

  return (
    <div className="home">
      <div className="cards">
        <h3>Trending</h3>
        <MovieCarousel content={content}/>
      </div>
    </div>
  );
}

export default Home;
