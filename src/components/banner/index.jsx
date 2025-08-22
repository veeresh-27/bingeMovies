import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const handleDragStart = (e) => e.preventDefault();

const bannerImages = [
  {
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg",
  },
  {
    img: "https://www.intowindows.com/wp-content/uploads/2020/07/amazon-prime-video-download-location_thumb.png",
  },
  {
    img: "https://oneroomwithaview.com/wp-content/uploads/2014/07/marvel-logo-wallpaper-1200x520.jpg",
  },
  {
    img: "https://mythbank.com/wp-content/uploads/2019/10/homepagebanner-dc.jpg",
  },
];

const Banner = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  const resposive = {
    0: { items: 1 },
    512: { items: 1 },
    1024: { items: 1 },
  };

  const items = bannerImages?.map(({ img }) => (
    <div className="bannerItem">
      <img
        src={img}
        alt="banner"
        onDragStart={handleDragStart}
        className="bannerItem__img"
      />
    </div>
  ));

  return (
    <ThemeProvider theme={darkTheme}>
      {bannerImages.length > 0 ? (
        <AliceCarousel
          autoPlay
          autoPlayInterval={2500}
          responsive={resposive}
          infinite
          disableButtonsControls
          mouseTracking
          items={items}
        />
      ) : (
        bannerImages.length < 1 && (
          <div
            className="noInfo"
            style={{
              color: "#c6c6c6",
              fontSize: "20px",
            }}
          >
            No Info
          </div>
        )
      )}
    </ThemeProvider>
  );
};

export default Banner;
