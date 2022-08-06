import React from "react";
import { Chip, createTheme, ThemeProvider } from "@material-ui/core";

function StaticGenre({ genre }) {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{ padding: "8px 0" }}>
          {genre &&
            genre.map((genre) => (
              <Chip
                label={genre.name}
                style={{
                  border: "1px solid #fff",
                  padding: "2px",
                  marginRight: "6px",
                  marginTop: "4px",
                }}
                size="small"
                variant="outlined"
                clickable
                key={genre.id}
              />
            ))}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default StaticGenre;
