import "./App.css";

// Material UI Component
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//Compnent
import WeatherCard from "./WeatherCard";

// use react's Suspense
import { Suspense } from "react";

const theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Sans Arabic", sans-serif',
  },
});

function App() {
  return (
    <Suspense fallback="loading">
      <div
        className="App"
        dir="rtl"
        style={{ display: "flex", alignItems: "center" }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <WeatherCard />
        </ThemeProvider>
      </div>
    </Suspense>
  );
}

export default App;
