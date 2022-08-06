import { Badge } from "@material-ui/core";
import React from "react";
import { img_300, unavailable } from "../../config";

import "./styles.css";

function MovieCard({ id, poster, title, rating, date, mediaType, onClick }) {
  const result = Math.round(rating * 10) / 10;
  //mediaType = 'Movies' || 'TV' || 'Video'
  //result =

  return (
    <div className="movieCard" onClick={onClick}>
      <Badge
        badgeContent={result}
        color={result > 6 ? "primary" : "secondary"}
      />

      <div className="movieCardImage">
        <img
          src={poster ? `${img_300}/${poster}` : unavailable}
          alt={`${title}`}
        />
      </div>
      <div className="movieCardContent">
        <div className="title">{title}</div>
        <div className="movieCardSubContent">
          <div className="movieType">
            {mediaType === "tv" ? "TV Series" : "Movies"}
          </div>
          <div className="movieRating">{date}</div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
