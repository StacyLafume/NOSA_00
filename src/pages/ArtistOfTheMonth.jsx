import React from "react";
import Container from "@mui/material/Box";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import PastExhb from "./PastExhb";
import "../monthlyArtist.css";
import ArtistOfTheMonthImageGallery from "../components/ArtistOfTheMonthImageGallery";
import { Link as LinkScroll } from "react-scroll";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ArtistOfTheMonth = ({
  artistOfTheMonthData,
  artistsOfTheMonthData,
  isPastArtistOfTheMonth = false,
  pastArtistOfTheMonthData,
  backgroundColor,
}) => {
  // const ArtistOfTheMonth = ({ name, artistStatement, exhibition }) => {
  const [showPerviousExhibition, setShowPreviousExhibition] = useState(false);

  const [artistData, setArtistData] = useState({
    headshot: artistOfTheMonthData.headshot,
    artist_name: artistOfTheMonthData.artist_name,
    artist_statement: artistOfTheMonthData.artist_statement,
    exhibition_statement: artistOfTheMonthData.exhibition_statement,
    exhibition_date: artistOfTheMonthData.exhibition_date,
    exhibition_name: artistOfTheMonthData.exhibition_name,
    exhibition_pieces: artistOfTheMonthData.exhibition_pieces,
    exhibition_poster: artistOfTheMonthData.exhibition_poster,
  });

  const [isCurrentArtist, setIsCurrentArtist] = useState(true);

  const {
    headshot,
    artist_statement,
    exhibition_statement,
    exhibition_date,
    exhibition_name,
    artist_name,
    exhibition_pieces,
    exhibition_poster,
  } = artistData;

  const getPastExhibitions = () => {
    setShowPreviousExhibition(true);
  };

  const showCurrentArtist = () => {
    setArtistData({ ...pastArtistOfTheMonthData[0] });
    setIsCurrentArtist(!isCurrentArtist);
  };

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
    <section id="/artistofthemonth">
      {showPerviousExhibition ? (
        <PastExhb artistData={pastArtistOfTheMonthData} />
      ) : (
        <div>
          <div
            style={{
              // marginTop: "10vh",
              backgroundImage: `url(${exhibition_poster})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: " -1",
            }}
            className="container container-inside  group"
          >
            <div className="top-matter">
              <div className="title">
                <h2 id="artist-of-the-month-heading">
                  {/* {console.log("artist_name", artistData, artistOfTheMonthData)} */}
                  Artist of the Month <span>{`${artist_name}`}</span>
                </h2>
              </div>
              <div className="intro">
                <p>
                  {` ${month[new Date(exhibition_date).getMonth()]} ${new Date(
                    exhibition_date
                  ).getFullYear()} ${exhibition_name}`}
                </p>
              </div>
            </div>
          </div>
          <Container sx={{ width: "95vw" }}>
            <ArtistOfTheMonthImageGallery images={exhibition_pieces} />
          </Container>
          <div className="article-container">
            <div>
              <h2>About the Artist</h2>
              <p>{artist_statement}</p>
              <img src={headshot} alt={`${artist_name} portrait`} height="100%" />
              <h2>About {exhibition_name}</h2>
              <p>{exhibition_statement}</p>
            </div>

            {/* {console.log("exhibition_poster", exhibition_poster)} */}

            <Grid
              container
              sx={{
                flexWrap: { xs: "wrap", md: "nowrap" },
                backgroundColor: backgroundColor,
                padding: { xs: "1rem", md: "1rem 4rem 2rem 4rem" },
              }}
              spacing={1}
            >
              {/* Column 1 */}
              <Grid item xs={12} md={3}>
                {/* <h2
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: "bold",
                    textShadow: "rgb(255, 175, 32) 0px 7px 1px",
                    textAlign: "center",
                  }}
                >
                  {artist_name}
                </h2> */}
                {!isCurrentArtist ? (
                  <Button onClick={showCurrentArtist}> Current Artist </Button>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>

            <LinkScroll
              isDynamic={true}
              to="/artistofthemonth"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              <Button
                style={{ color: "#b33b00", backgroundColor: "white" }}
                onClick={getPastExhibitions}
              >
                {" "}
                previous exhibitions
                <ArrowForwardIosIcon/>
              </Button>
            </LinkScroll>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtistOfTheMonth;
