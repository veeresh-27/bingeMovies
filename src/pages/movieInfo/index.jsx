import "./style.css";
import axios from "axios";
import slice from "lodash/slice";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_500, unavailable } from "../../config";
import StaticGenre from "../../components/staticGenre";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import Carousel from "../../components/carousel";
import CrewDisplay from "../../components/crewDisplay";
import Details from "../../components/details";

function MovieInfo() {
  const { id, entity } = useParams();
  const [content, setContent] = useState([]);
  const [video, setVideo] = useState([]);
  const [genre, setGenre] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${entity}/${id}?api_key=${
        import.meta.env.VITE_MOVIESDB_API_KEY
      }&language=en-US`
    );
    setContent(data);
    setGenre(data.genres);
    console.log("data", data);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${entity}/${id}/videos?api_key=${
        import.meta.env.VITE_MOVIESDB_API_KEY
      }&language=en-US`
    );
    setVideo(data.results);
  };
  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, [id]);

  const aired =
    entity === "tv"
      ? slice(content?.first_air_date, 0, 4) //2022-01-01
      : slice(content?.release_date, 0, 4);

  const postFix =
    content.vote_count > 1000
      ? `${Math.round((content.vote_count * 10) / 1000) / 10}K`
      : `${content.vote_count}`;

  return (
    <div className="home">
      {content.title || content.name ? (
        <div className="movieInfo">
          <div className="levelOne">
            <div className="titleTab">
              <h1 className="movieName">{content?.title || content?.name}</h1>
              <h5 className="movieTagline">{content?.tagline}</h5>
              <div className="releaseInfo">
                <p className="releaseDate">{aired}</p>
                {content?.runtime && <p className="dot"></p>}
                {content?.runtime && (
                  <p className="releaseDate">
                    {Math.floor(content?.runtime / 60)}h {content?.runtime % 60}
                    m
                  </p>
                )}
                <p className="dot"></p>
                <p className="releaseDate">
                  {entity === "tv" ? "TV Series" : "Movie"}
                </p>
              </div>
            </div>
            <div className="ratingTab">
              {content.vote_average > 0 && (
                <div className="ratingContainer">
                  <div className="ratingHead">TMDb&nbsp;RATING</div>
                  <div className="ratingCont">
                    <div className="ratingIcon">
                      <StarIcon
                        style={{
                          width: "37px",
                          height: "37px",
                          color: "orange",
                          margin: 0,
                          padding: 0,
                        }}
                        sx={{ fontSize: 100 }}
                      />
                    </div>
                    <div className="rating">
                      <div className="ratingAvg">
                        <div className="boldRating">
                          {Math.round(content.vote_average * 10) / 10}
                        </div>
                        /10
                      </div>
                      <div className="ratingCount">{postFix}</div>
                    </div>
                  </div>
                </div>
              )}
              {content.popularity > 0 && (
                <div className="ratingContainer">
                  <div className="ratingHead">POPULARITY</div>
                  <div className="ratingCont">
                    <div className="ratingIcon">
                      <PeopleIcon
                        style={{
                          width: "37px",
                          height: "37px",
                          color: "orange",
                          margin: 0,
                          padding: 0,
                        }}
                        sx={{ fontSize: 100 }}
                      />
                    </div>
                    <div
                      className="rating"
                      style={{ justifyContent: "center" }}
                    >
                      <div className="ratingAvg">
                        {Math.round(content.popularity * 10) / 10}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
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
          <StaticGenre genre={genre} />
          <div className="mobileRatingTab">
            <div className="ratingContainer">
              {content.vote_average > 0 && (
                <div className="ratingCont">
                  <div className="ratingIcon">
                    <StarIcon
                      style={{
                        width: "30px",
                        height: "30px",
                        color: "orange",
                      }}
                    />
                  </div>
                  <div className="rating">
                    <div className="ratingAvg">
                      <div className="boldRating">
                        {Math.round(content.vote_average * 10) / 10}
                      </div>
                      /10
                    </div>
                    <div className="ratingCount">{postFix}</div>
                  </div>
                </div>
              )}
            </div>
            <div className="ratingContainer">
              {content.popularity > 0 && (
                <div className="ratingCont">
                  <div className="ratingIcon">
                    <PeopleIcon
                      style={{
                        width: "30px",
                        height: "30px",
                        color: "orange",
                        margin: 0,
                        padding: 0,
                      }}
                      sx={{ fontSize: 100 }}
                    />
                  </div>
                  <div className="rating" style={{ justifyContent: "center" }}>
                    <div className="ratingAvg">
                      {Math.round(content.popularity * 10) / 10}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="storyLine" style={{ marginTop: 20 }}>
            <div className="storyLineHead">
              <h3>Storyline</h3>
            </div>{" "}
            <p className="storyLineContent">
              {content.overview ? content.overview : "No Info Available"}
            </p>
          </div>
          <div className="cast" style={{ marginTop: 24 }}>
            <div className="storyLineHead">
              <div className="videoHeading">
                <h3>Videos</h3>
                <div classsName="videoCount">{video.length}</div>
              </div>
              <Carousel
                mediaType={entity}
                id={id}
                type="video"
                video={video}
                image={
                  content.poster_path && `${img_500}/${content.poster_path}`
                }
              />
            </div>
          </div>
          <div className="cast">
            <div className="storyLineHead">
              <h3>Cast</h3>
              <Carousel mediaType={entity} id={id} type="cast" />
            </div>
          </div>

          <div className="cast" style={{ marginTop: 24 }}>
            <div className="storyLineHead">
              <h3>Crew</h3>
              <CrewDisplay mediaType={entity} id={id} />
            </div>
          </div>
          <div className="storyLine" style={{ marginTop: 24 }}>
            <div className="storyLineHead">
              <h3>Details</h3>
            </div>{" "}
            <Details content={content} type={entity} />
          </div>
        </div>
      ) : (
        <h1>Please Try Again</h1>
      )}
    </div>
  );
}

export default MovieInfo;
