import React from "react";
import { Pagination } from "@mui/material";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@emotion/react";

const CustomPagination = ({ setPage, numOfPages = 20 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scrollTo(0, 0);
  };

  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
  
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "28px",
      }}
    >
      <ThemeProvider theme={darkTheme}>
      <Pagination
        count={numOfPages}
        onClick={(e) => handlePageChange(e.target.textContent)}
        color="primary"
      />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
