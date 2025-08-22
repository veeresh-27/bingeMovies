import { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
import { Button, createTheme, Tab, Tabs, ThemeProvider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MovieCard from "../../components/movieCard";
import CustomPagination from "../../components/customPagination";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState(0);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        import.meta.env.VITE_MOVIESDB_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    console.log("search", content);
    setNumOfPages(data.total_pages);
  };
  const navigate = useNavigate();
  const handlePageChange = (id, type) => {
    navigate(`/movieinfo/${type}/${id}`);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    fetchSearch();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [page, type, searchText]);

  return (
    <div className="home">
      <ThemeProvider theme={darkTheme}>
        <form className="searchContainer">
          <div className="searchBox">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <Button
            onClick={handleSearch}
            className="searchButton"
            variant="contained"
            style={{ marginLeft: 10 }}
            type="submit"
          >
            <SearchIcon fontSize="large" />
          </Button>
        </form>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, val) => {
            setType(val);
            setPage(1);
          }}
          style={{ paddingTop: "10px", paddingBottom: "10" }}
        >
          <Tab label="Search Movies" style={{ width: "50%" }} />
          <Tab label="Search TV Shows" style={{ width: "50%" }} />
        </Tabs>
      </ThemeProvider>
      <div className="cards">
        {content &&
          content.map((data, index) => (
            <MovieCard
              key={data.id}
              id={data.id}
              title={data.title || data.name}
              poster={data.poster_path}
              rating={data.vote_average}
              date={data.release_date || data.first_air_date}
              mediaType={type ? "tv" : "movie"}
              onClick={() => handlePageChange(data.id, type ? "tv" : "movie")}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
