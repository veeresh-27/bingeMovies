import React from "react";
import axios from "axios";
import "./style.css";

const CrewDisplay = ({ mediaType, id }) => {
  const [content, setContent] = React.useState([]);
  const fetchCast = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=${
        import.meta.env.VITE_MOVIESDB_API_KEY
      }&language=en-US`
    );
    setContent(data.crew);
    console.log("credits:", data);
  };
  React.useEffect(() => {
    fetchCast();
    // eslint-disable-next-line
  }, [id]);
  return (
    <div className="crewWrapper">
      {content.length > 0 ? (
        content.map((content) => (
          <div className="crewContainer">
            <div className="crewHead">{content.job}:</div>
            <div className="crewBody" style={{ margin: 0, podding: 0 }}>
              &nbsp;{content.name},
            </div>
          </div>
        ))
      ) : (
        <div className="noCrew">No Information Available</div>
      )}
    </div>
  );
};

export default CrewDisplay;
