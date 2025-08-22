import { Badge } from "@mui/material";
import React from "react";
import { img_300, unavailable } from "../../config";

import "./styles.css";

function MovieCard({
  id,
  poster,
  title,
  rating,
  date,
  mediaType,
  onClick,
  ...props
}) {
  const result = Math.round(rating * 10) / 10;

  return (
    <div className="movieCard" onClick={onClick} {...props}>
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
        <div className="title" title={title}>
          {title}
        </div>
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
