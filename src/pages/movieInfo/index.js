import "./style.css";
import axios from "axios";
import slice from "lodash/slice";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_500, unavailable } from "../../config";

function MovieInfo() {
  const { id, entity } = useParams();
  const [content, setContent] = useState([]);
  const [video, setVideo] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${entity}/${id}?api_key=${process.env.REACT_APP_MOVIESDB_API_KEY}&language=en-US`
    );
    setContent(data);
    console.log("MovieInfo:", data);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${entity}/${id}/videos?api_key=${process.env.REACT_APP_MOVIESDB_API_KEY}&language=en-US`
    );
    setVideo(data.results[0]?.key);
    console.log("VideoInfo:", data);
  };
  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, [id]);
  const aired =
    entity === "tv"
      ? slice(content.first_air_date, 0, 4)
      : slice(content.release_date, 0, 4);
  return (
    <div className="home">
      <div className="movieInfo">
        <div className="title">
          <h1>
            {content.title || content.name} ({aired})
          </h1>
          <h5>{content.tagline}</h5>
        </div>
        <div className="backdrop">
          <img
            src={
              content.backdrop_path
                ? `${img_500}/${content.backdrop_path}`
                : unavailable
            }
            alt={content.title || content.name}
          />
        </div>
        <div className="movieHeading">
          <div className="tagline">
            {" "}
            <p>{content.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
