import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fspring%2F&psig=AOvVaw3fJM3lKN2Z91ETVlcc7uWo&ust=1710129512192000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDik4Pn6IQDFQAAAAAdAAAAABAE";
  let COld_URL =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.drinkbai.com%2Fblog%2Fhealth-and-wellness%2Ftop-5-places-escape-cold&psig=AOvVaw17KGiv0iThQZFszkcbdnzQ&ust=1710129259485000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIDQzovm6IQDFQAAAAAdAAAAABAE";
  let HOT_URL =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.loveexploring.com%2Fgallerylist%2F96211%2Fthe-hottest-places-in-the-world&psig=AOvVaw14egTlonpRS_qZ6xntn5qZ&ust=1710129338843000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIiv9LDm6IQDFQAAAAAdAAAAABAJ";
  let RAIN_URL =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Frain&psig=AOvVaw2J8i65nKvF1HqWRGmCsnZ0&ust=1710129401254000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIivkdHm6IQDFQAAAAAdAAAAABAE";
  return (
    <div className="InfoBox">
      {/* <h1>Weather Info-{info.weather}</h1> */}
      <div className="card_container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80 ? (
                RAIN_URL
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                COld_URL
              )
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                HOT_URL
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature={info.temp}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p>Min Temp={info.tempMin}</p>
              <p>Max Temp={info.tempMax}</p>
              <p>
                The weather can be describe as<i>{info.weather}</i> and feels
                like{info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
