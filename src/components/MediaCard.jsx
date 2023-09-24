import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function MediaCard({ artistData }) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Card
      sx={{
        display: "flex",
        height: "20vh",
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignContent: "space-around",
        backgroundColor: "#fee",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {artistData.exhibition_name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {` ${
              month[new Date(artistData.exhibition_date).getMonth()]
            } ${new Date(artistData.exhibition_date).getFullYear()}`}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {` ${artistData.exhibition_statement}`}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={artistData.exhibition_poster}
        alt="Live from space album cover"
      />
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={artistData.headshot}
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default MediaCard;
