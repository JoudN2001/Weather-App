// Material UI Component
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import CloudIcon from "@mui/icons-material/Cloud";

// React
import { useEffect, useState } from "react";

// External Libraries
import axios from "axios";
import moment from "moment";
import "moment/min/locales"
moment.locale("ar")

export default function WeatherCard() {
  function Weather_API_Request() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=31.963158&lon=35.930359&appid=637de888bb638b3542488fcdf2458cce",
      )
      .then((response) => {
        const temp = Math.round(response.data.main.temp - 272.15);
        const minTemp = Math.round(response.data.main.temp_max - 272.15);
        const maxTemp = Math.round(response.data.main.temp_min - 272.15);
        const description = response.data.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
        const date = new Date();
        setWeather({ temp, minTemp, maxTemp, description, icon, date });
        console.log(temp, minTemp, maxTemp, description, date , icon);
        console.log(response.data.weather[0].icon);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const [weatehr, setWeather] = useState({
    temp: null,
    minTemp: null,
    maxTemp: null,
    description: "",
    icon: "",
    date: "",
  });
  const [date, setDate] = useState(null)
  useEffect(()=>{
    setDate(moment().format("MMM Do YY"))
    Weather_API_Request()}, []);
  return (
    <Container maxWidth="sm">
      <Card
        sx={{
          minWidth: 275,
          bgcolor: "rgba(28 52 91 / 36%)",
          color: "#fff",
          borderRadius: 2,
          boxShadow: "1px 11px 3px rgba(0,0,0,0.05)",
        }}
      >
        <CardContent>
          {/* City & Time */}
          <Stack
            direction="row"
            sx={{
              alignItems: "flex-end",
              pb: 1.5,
            }}
          >
            <Typography variant="h2" fontWeight={400}>
              عمّان
            </Typography>
            <Typography variant="h5" fontWeight={300} px={1}>
              {date}
            </Typography>
          </Stack>
          <Divider sx={{ borderColor: "white" }} />
          {/* === City & Time === */}

          {/* Degree & Description */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Tempreture */}
            <Stack textAlign={"right"}>
              <Typography variant="h1">
                {weatehr.temp}
                <img src={weatehr.icon} alt="Weather Icon" />
              </Typography>
              <Typography variant="h5" fontWeight={300}>
                {weatehr.description}
              </Typography>
              <Typography>
                الصغرى {weatehr.maxTemp} | الكبرى {weatehr.minTemp}
              </Typography>
            </Stack>
            {/* === Tempreture === */}
            {/* Icons (Cloud) */}
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <CloudIcon sx={{ fontSize: 250, textAlign: "left" }} />
            </Stack>
            {/* === Icons (Cloud) === */}
          </Stack>
          {/* === Degree & Description === */}
        </CardContent>
      </Card>
      <Button
        variant="text"
        size="small"
        sx={{
          color: "white",
          fontWeight: "500",
          fontSize: 20,
          position: "relative",
          zIndex: 99,
          top: 8,
          left: 0,
          right: 245,
        }}
      >
        EN
      </Button>
    </Container>
  );
}
