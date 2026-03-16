import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import CloudIcon from "@mui/icons-material/Cloud";

export default function WeatherCard() {
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
              2026 4 يونيو
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
              <Typography variant="h1">26</Typography>
              {/* TODO: img here  */}
              <Typography variant="h6">سماء صافية</Typography>
              <Typography>الصغرى 20 | الكبرى 30</Typography>
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
        color="white"
        sx={{
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
