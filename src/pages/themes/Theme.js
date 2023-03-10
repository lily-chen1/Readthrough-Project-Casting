import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EDEBE3",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "link", size: "small" },
          style: {
            textTransform: "none",
            // border: `2px solid #B4A892`,
            border: "none",
            color: "#8e8169",
            backgroundColor: "#ded7c3",
            fontSize: "13px",
            fontWeight: "bold",
            display: "inline-block",
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export default theme;
