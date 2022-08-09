import React from "react";
import "./style.css";

const language = (lang) => {
  switch (lang) {
    case "en":
      return "English";
    case "es":
      return "Spanish";
    case "fr":
      return "French";
    case "it":
      return "Italian";
    case "ja":
      return "Japanese";
    case "pt":
      return "Portuguese";
    case "ru":
      return "Russian";
    case "zh":
      return "Chinese";
    case "kn":
      return "Kannada";
    case "hi":
      return "Hindi";
    case "ar":
      return "Arabic";
    case "ko":
      return "Korean";
    case "ta":
      return "Tamil";
    case "te":
      return "Telugu";
    case "ml":
      return "Malayalam";
    case "mr":
      return "Marathi";
    default:
      return "No Info";
  }
};

function Details({ content, type }) {
  console.log("Movie Info", content);

  const series = [
    {
      id: 0,
      key: "Directed By",
      value: content.created_by,
    },
    {
      id: 1,
      key: "First Aired",
      value: content.first_aired,
    },
    {
      id: 2,
      key: "Country of Origin",
      value: content.origin_country,
    },
    {
      id: 3,
      key: "Language",
      value: content.original_language,
    },
    {
      id: 4,
      key: "Network",
      value: content.networks,
    },
    {
      id: 5,
      key: "Production Companies",
      value: content.production_companies,
    },
  ];

  const movie = [
    {
      id: 1,
      key: "Released",
      value: content.release_date,
    },
    {
      id: 2,
      key: "Language",
      value: content.original_language,
    },
    {
      id: 3,
      key: "Production Companies",
      value: content.production_companies,
    },
    {
      id: 4,
      key: "Production Countries",
      value: content.production_countries,
    },
  ];

  const renderDetails = type === "movie" ? movie : series;
  console.log("details", renderDetails);

  console.log("Language", language("kn"));

  return (
    <div style={{ marginTop: 12, display: "flex", flexDirection: "column" }}>
      {renderDetails.map((item, index) => (
        <div className="detailsContainer">
          <hr />
          <div className="detailsText">
            <p className="detailsLabel">{item?.key}</p>
            <div className="valueContainer">
              {Array.isArray(item?.value) ? (
                item?.value?.map((inner, index) => (
                  <p
                    className={0 === index ? "detailsValue" : "detailsValueArr"}
                  >
                    {inner?.name ? inner.name : inner ? inner : "No Info"}
                  </p>
                ))
              ) : (
                <p className="detailsValue">
                  {item?.value
                    ? item.key === "Language"
                      ? language(item.value)
                      : item.value
                    : "No Info"}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
      <hr className="detailsHr" />
    </div>
  );
}

export default Details;
