import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//Compnent
import WeatherCard from "./WeatherCard";

const theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Sans Arabic", sans-serif',
  },
});

function App() {
  return (
    <div className="App" dir="rtl" style={{ display: "flex", alignItems: "center" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <WeatherCard />
      </ThemeProvider>
    </div>
  );
}

export default App;
