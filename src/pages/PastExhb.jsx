import { React, useState } from "react";
import MediaCard from "../components/MediaCard";
import ArtistOfTheMonth from "./ArtistOfTheMonth";

import { makeStyles } from "@mui/styles";

import {
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Divider,
  ImageListItem,
  ImageList,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  hideMe: {
    display: "none",
  },
}));

const PastExhb = ({ artistData }) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(artistData);
  const [showPreivousExhb, setShowPreivousExhb] = useState(false);
  const [selectedArtistData, setSelectedArtistData] = useState({});


  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredData = artistData?.filter(
      (item) =>
        item.exhibition_name.toLowerCase().includes(searchTerm.toLowerCase()) //||
      // item.date.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  const getPastArtistOfTheMonth = (showData) => {
    setShowPreivousExhb(true);
    setSelectedArtistData(showData);
  };
  return (
    <>
      {showPreivousExhb ? (
        <ArtistOfTheMonth
          pastArtistOfTheMonthData={artistData}
          isPastArtistOfTheMonth={true}
          artistOfTheMonthData={selectedArtistData}
        />
      ) : (
        <div>
          <Divider
            textAlign="center"
            role="presentation"
            style={{
              backgroundColor: "#ff8b25",
              height: ".2rem",
              alignItems: "center",
              margin: "2rem 0",
            }}
          >
            <h1
              style={{
                fontSize: "3.5rem",
                display: "inline",
                backgroundColor: "white",
              }}
            >
              Pervious Exhibitions
            </h1>
          </Divider>
          <Container sx={{ width: "80vw", marginTop: "10vh" }} maxWidth="xl">
            <FormControl
              fullWidth
              sx={{ m: 1, padding: "0 7rem", marginBottom: "5vh" }}
            >
              <InputLabel
                sx={{ paddingLeft: "9.4rem" }}
                htmlFor="outlined-adornment-amount"
              >
                Search
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">
                    Exhibitions Name
                  </InputAdornment>
                }
                label="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
            </FormControl>
            <ImageList>
              {filteredData?.map((item) => (
                <ImageListItem onClick={() => getPastArtistOfTheMonth(item)}>
                  <MediaCard artistData={item} />
                </ImageListItem>
              ))}
            </ImageList>
          </Container>
        </div>
      )}
    </>
  );
};

export default PastExhb;
