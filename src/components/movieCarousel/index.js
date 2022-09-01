import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../config";
import "./style.css";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const MovieCarousel = ({ content }) => {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  let navigate = useNavigate();
  const resposive = {
    0: { items: 4 },
    512: { items: 6 },
    1024: { items: 8 },
  };
  console.log("Carousel", content);

  const items = content?.map((incontent) => (
    <div
      className="carouselItem"
      onClick={() => navigate(`/movieinfo/${incontent?.media_type}/${incontent?.id}`)}>
      <img
        src={incontent.poster_path ? `${img_300}/${incontent.poster_path}` : noPicture}
        alt={incontent?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <p title={incontent?.original_title || incontent?.name} className="carouselItem__txt">
        {incontent?.original_title || incontent?.name}
      </p>
    </div>
  ));

  return (
    <ThemeProvider theme={darkTheme}>
      {content.length > 0 ? (
        <AliceCarousel
          autoPlay
          autoPlayInterval={1000}
          responsive={resposive}
          infinite
          disableDotsControls
          disableButtonsControls
          mouseTracking
          items={items}
        />
      ) : (
        content.length < 1 && (
          <div
            className="noInfo"
            style={{
              color: "#c6c6c6",
              fontSize: "20px",
            }}>
            No Info
          </div>
        )
      )}
    </ThemeProvider>
  );
};

export default MovieCarousel;
