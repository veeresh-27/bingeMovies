import React from "react";
import MovieCarousel from "../movieCarousel";
import { useNavigate } from "react-router-dom";

const SubPages = ({ title, content, link }) => {
  const navigate = useNavigate();
  const handlePageChange = (e) => {
    navigate(`/${link}`);
    e.stopPropogation();
  };

  return (
    <div onClick={handlePageChange}>
      <h3 style={{ cursor: "pointer" }}>{title}</h3>
      <div onClick={(e) => e.stopPropagation()}>
        <MovieCarousel content={content} type="movie" />
      </div>
    </div>
  );
};

export default SubPages;
