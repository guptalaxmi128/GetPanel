import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#e3f9ff",
      light: "#2196f3",
      dark: "#424242",
    },
    secondary: {
      main: "#fff",
      // dark: "#fff",
    },
    text: {
      main: "#000", 
      light: "#d2d2d2", 
      dark: "#6C757D",
      default: "#fff",
    },
    background: {
      default: "#fff", // for card background
      main: "#e3f9ff", // for background
      light: "#faf6f2",
    },
    error: {
      main: "#ff0000", // for text and buttons
      bg: "#ffebeb",
       // for background and outline
    },
    warning: {
      main: "#e5a200", // for warning text
      bg: "#fdede1", // for warning background
    },
    cancel: {
      main: "#8a8d93",
      dark: "#e03546",
      bg: "#fff",
    },
    active: {
      main: "#56ca00",
      bg: "#eaf5ea"
    },
    login: {
      main: "#1554f6",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 15,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightDark: 600,
    fontWeightBold: 700,
    fontWeightBolder: 800,
    fontWeightBoldest: 900,
    h1: {
      fontSize: "46px",
      fontWeight: 400,
      lineHeight: "50px",
      margin: "0 0 0 0",
    },
    h2: {
      fontSize: "26px",
      fontWeight: 400,
      lineHeight: "30px",
      margin: "0 0 0 0",
    },
    h3: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "28px",
      margin: "0 0 0 0",
    },
    h4: {
      fontSize: "22px",
      fontWeight: 400,
      lineHeight: "32px",
      margin: "0 0 0 0",
    },
    h5: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      margin: "0 0 0 0",
    },
    h6: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "28px",
        margin: "0 0 0 0",
    },
    h7: {
        fontSize: "10px",
        fontWeight: 400,
        lineHeight: "16px",
        margin: "0 0 0 0",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "0px",
          marginRight: "5px",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#544f5a",
          fontSize: "16px",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
