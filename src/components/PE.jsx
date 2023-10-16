import React, { useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/system";
import MasonryGrid from "./MasonryGrid";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";


const PE = ({ eventArr , setShowEvents}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(eventArr);
  const [showPreivousEvents, setShowPreivousEvents] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState({});

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredData = eventArr.filter(
      (item) =>
        item.event_name
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        new Date(item.event_date)
          .toDateString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  const ImageListItemWithStyle = styled(ImageListItem)(({ theme }) => ({
    "&:hover": {
      cursor: "pointer",
      opacity: 0.9,
      borderBottom: "solid 4px #ff8b25",
      // borderLeft: `solid 1px orange`,
      // borderRight: `solid 4px orange`,
      boxShadow: `1px 10px 19px rgb(199 119 0)`,
    },
  }));

  const handShowEventPictures = (event_data) => {
    setShowPreivousEvents(false);
    setSelectedEvent(event_data);
  };

  const handleBackToEvents = () => {
    setShowEvents(true)
  }

  return (
    <>
      {showPreivousEvents ? (
        <div style={{height:'110vh'}}>
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
            <h1 style={{ display: "inline", backgroundColor: "white" }}>
              Previous Events
            </h1>
          </Divider>
          <Box style={{display:"grid", justifyItems: "center"}}>
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
                  <InputAdornment position="start"></InputAdornment>
                }
                label="Search"
                value={searchTerm}
                onChange={handleSearch}
              />
            </FormControl>
            <Masonry
              style={{  width: "100vw", display: "flex", alignItems:"center", alignContent:"center" }}
              cols={3}
              rowHeight={"auto"}
              gap={50}
            >
              {filteredData.map(
                (item) => (
                  <ImageListItemWithStyle
                    key={item.event_poster}
                    onClick={() => handShowEventPictures(item)}
                    // style={{ width: "66%", height:"6rem"  }}
                  >
                    <img
                      src={`${item.event_poster}`}
                      srcSet={`${item.event_poster}`}
                      alt={item.event_date?.toString()}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      title={item.event_name}
                      subtitle={
                        <span>
                          {" "}
                          {new Date(item.event_date?.toString()).toDateString()}
                        </span>
                      }
                      position="below"
                      sx={{ borderBottom: "solid 4px black" }}
                    />
                    {/* event name and date */}
                  </ImageListItemWithStyle>
                )
              )}
            </Masonry>
            <button onClick={handleBackToEvents}>Back to Events</button>
          </Box>
        </div>
      ) : (
        <MasonryGrid
          eventData={selectedEvent}
          setShowPreivousEvents={setShowPreivousEvents}
        />
      )}
    </>
  );
};

export default PE;
