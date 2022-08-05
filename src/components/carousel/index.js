import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../config";
import "./style.css";
import { createTheme, ThemeProvider } from "@material-ui/core";

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({ mediaType, id, type, image, video }) => {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const [content, setContent] = useState([]);
  const resposive = {
    0: { items: 3 },
    512: { items: 4 },
    1024: { items: 7 },
  };
  const videoItem = video?.map((content, index) => (
    <div className="carouselItem">
      <a
        href={`https://www.youtube.com/watch?v=${content.key}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={image ? `${img_300}/${image}` : noPicture}
          alt={content?.type}
          onDragStart={handleDragStart}
          className={
            video.length < 4 ? "carouselItemVideo__img" : "carouselItem__img"
          }
        />
        <b className="carouselItem__txt">
          {index + 1}. {content?.type}
        </b>
      </a>
    </div>
  ));

  const items = content?.map((content) => (
    <div className="carouselItem">
      <img
        src={
          content.profile_path
            ? `${img_300}/${content.profile_path}`
            : noPicture
        }
        alt={content?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{content?.name}</b>
    </div>
  ));

  const fetchCast = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${process.env.REACT_APP_MOVIESDB_API_KEY}&language=en-US`
    );
    setContent(data.cast);
  };
  useEffect(() => {
    fetchCast();
    // eslint-disable-next-line
  }, [id]);
  return (
    <ThemeProvider theme={darkTheme}>
      {type === "cast" && (
        <AliceCarousel
          autoPlay
          responsive={resposive}
          infinite
          disableDotsControls
          disableButtonsControls
          mouseTracking
          items={items}
        />
      )}
      {type === "video" && (
        <AliceCarousel
        infinite
          autoPlay
          responsive={resposive}
          disableDotsControls
          mouseTracking
          items={videoItem}
          renderPrevButton={() => {
            return (
              <p style={{ cursor: "pointer", marginRight: "28px" }}>&lt; </p>
            );
          }}
          renderNextButton={() => {
            return (
              <p style={{ cursor: "pointer", marginLeft: "28px" }}>&gt;</p>
            );
          }}
        />
      )}
    </ThemeProvider>
  );
};

export default Carousel;
