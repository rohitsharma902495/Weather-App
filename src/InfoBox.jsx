import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import "./InfoBox.css";

export default function InfoBOX({ info }) {

  const HOT_URL =
    "https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?w=800";

  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=800";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=800";


  // Weather image
  let weatherImage;

  if (info.humidity > 80) {
    weatherImage = RAIN_URL;
  } else if (info.temp > 15) {
    weatherImage = HOT_URL;
  } else {
    weatherImage = COLD_URL;
  }


  // Weather icon
  let weatherIcon;

  if (info.humidity > 80) {
    weatherIcon = <ThunderstormIcon />;
  } else if (info.temp > 15) {
    weatherIcon = <WbSunnyIcon />;
  } else {
    weatherIcon = <AcUnitIcon />;
  }


  return (
    <div className="InfoBox">

      <Card
        className="weatherCard"
        sx={{
          width: "450px",
          maxWidth: "95%",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
        }}
      >

        {/* Weather Image */}
        <CardMedia
          component="img"
          image={weatherImage}
          alt="Weather"
          sx={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Weather Details */}
        <CardContent
          className="weatherContent"
          sx={{
            textAlign: "center",
            padding: "25px",
          }}
        >

          <Typography
            className="cityName"
            variant="h5"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              fontWeight: "bold",
              color: "#1976d2",
              marginBottom: "20px",
            }}
          >
            {info.city}
            {weatherIcon}
          </Typography>


          <div className="weatherDetails">

            <p>
              🌡️ Temperature:
              <b> {info.temp}&deg;C</b>
            </p>

            <p>
              💧 Humidity:
              <b> {info.humidity}%</b>
            </p>

            <p>
              🔽 Min Temperature:
              <b> {info.tempMin}&deg;C</b>
            </p>

            <p>
              🔼 Max Temperature:
              <b> {info.tempMax}&deg;C</b>
            </p>

            <p>
              🌤️ Weather:
              <b> {info.weather}</b>
            </p>

            <p>
              🌡️ Feels Like:
              <b> {info.feelslike}&deg;C</b>
            </p>

          </div>

        </CardContent>

      </Card>

    </div>
  );
}