<<<<<<< HEAD
import React from 'react';
import Container from '@mui/material/Box';
import SGridWCarousel from '../components/SGridWCarousel';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import { Box } from '@mui/joy';
import headshot from '../content/images/headshots/headshot.jpg';
import Masonry from "@mui/lab/Masonry";
=======
import React from "react";
import Container from "@mui/material/Box";
import SGridWCarousel from "../components/SGridWCarousel";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";
import { Box } from "@mui/joy";
import Button from "@mui/material/Button";
import { useState } from "react";
import PastExhb from "./PastExhb";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  hideMe: {
    display: "none",
  },
}));

const ArtistOfTheMonth = ({
  artistOfTheMonthData,
  artistsOfTheMonthData,
  isPastArtistOfTheMonth = false,
  pastArtistOfTheMonthData,
  name,
  monthYear,
  mainArtwork,
  artistPara,
  exhibtionPara,
  backgroundColor,
}) => {
>>>>>>> e927277c242215b186c867ede8bb1eec6dd37394

import '../monthlyArtist.css';

<<<<<<< HEAD
const ArtistOfTheMonth = ({ name, artistStatement, exhibition }) => {
    return (
        <>
            <div style={{ marginTop: '10vh', height: '95vh' }} className="container container-inside  group">
                <div className="top-matter">
                    <div className="title">
                        <h1 style={{ width: '32vw' }}>
                            Artist of the Month <span>{name}</span>
                        </h1>
                    </div>
                    <div className="intro">
                        <p>
                            July 2023: IN MY SKIN
                        </p>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div class="article-container">
                <div>
                    <h2>About the Artist</h2>
                    <p>
                        Kris, Born 1994, Boston based photographer since 2015. Pronouns She/Her/Hers. Kris has her
                        bachelor’s in Psychology from Lesley University. Along with pursuing her career as a
                        photographer, Kris hopes to eventually develop her own practice in art therapy. Her biggest
                        muse behind her work are black people, especially black femmes. She strives to show the
                        versatility of the black community by capturing their personalities, culture, stories, &
                        experiences.</p>
                </div>

                <img src="https://github.com/StacyLafume/NOSA_00/assets/102001997/b66ce5b4-d056-42c6-8592-f2a58fe3e981"/>


             


            </div>
        </>
    );
};
=======
  const [showPerviousExhibition, setShowPreviousExhibition] = useState(false);

  const [artistData, setArtistData] = useState({
    headshot: artistOfTheMonthData.headshot,
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
    exhibition_pieces,
    exhibition_poster,
  } = artistData;

  const getPastExhibitions = () => {
    setShowPreviousExhibition(true);
  };

  const showCurrentArtist = () => {
    setArtistData({ ...pastArtistOfTheMonthData[0] });
    setIsCurrentArtist(!isCurrentArtist)
    console.log(isCurrentArtist)
    console.log("I was clicked")
  };

  const classes = useStyles();
  
  
  return (
    <>
      {showPerviousExhibition ? (
        <PastExhb artistData={pastArtistOfTheMonthData} />
      ) : (
        <div>
          <Divider
            id="/artistofthemonth"
            textAlign="right"
            role="presentation"
            style={{
              backgroundColor: "#ff8b25",
              height: ".2rem",
              alignItems: "center",
              margin: "10vh 0",
            }}
          >
            <h1
              style={{
                display: "inline",
                backgroundColor: "white",
                fontWeight: "normal",
              }}
            >
              Artist Of The Month: {monthYear}
            </h1>
          </Divider>
>>>>>>> e927277c242215b186c867ede8bb1eec6dd37394

          <Grid
            container
            sx={{
              flexWrap: "nowrap",
              backgroundColor: backgroundColor,
              padding: " 1rem 4rem 2rem 4rem",
            }}
            spacing={1}
          >
            {/* Column 1 */}
            <Grid item xs={12} md={3}>
              <h2
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "bold",
                  textShadow: "rgb(255, 175, 32) 0px 7px 1px",
                  textAlign: "center",
                }}
              >
                {name}
              </h2>
              <img
                src={`${exhibition_poster}`}
                loading="lazy"
                alt="Main Artwork"
                style={{
                  width: "100%",
                }}
              />
              {isCurrentArtist ? (<Button
                onClick={showCurrentArtist}
              >
                {" "}
                Current Artist{" "}
              </Button>): '' }
            </Grid>

            {/* Column 2 */}
            <Grid item xs={12} md={6} style={{ width: "100%" }}>
              {/* Element 2 */}
              <img
                src={`${headshot}`}
                loading="lazy"
                alt="Headshot"
                style={{ width: "30%" }}
                // Add styles or attributes here if needed
              />
            </Grid>

<<<<<<< HEAD


=======
            {/* Column 3 */}
            <Grid item xs={12} md={6}>
              {/* Element 3 */}
              <h3>Artist statement</h3>
              <p>{artist_statement}</p>

              <h3>Exhibit statement</h3>
              <p>{exhibition_statement}</p>
              {isPastArtistOfTheMonth ?  (
                <Button onClick={getPastExhibitions}>
                  {" "}
                  Back to pervious exhibitions
                </Button>
              ):(<Button onClick={getPastExhibitions}>       
                {" "}
                pervious exhibitions
              </Button>)}
            </Grid>
          </Grid>
          <Container sx={{ width: "40vw" }}>
            <SGridWCarousel images={exhibition_pieces} />
          </Container>
        </div>
      )}
    </>
  );
};

export default ArtistOfTheMonth;
>>>>>>> e927277c242215b186c867ede8bb1eec6dd37394
