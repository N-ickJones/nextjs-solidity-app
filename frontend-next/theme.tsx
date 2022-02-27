import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#012856",
      },
      secondary: {
        main: "#e66017",
      },
    }
  })
);

export default theme;
