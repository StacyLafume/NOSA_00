import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "@mui/material";
import { Carousel } from "react-carousel-minimal";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Zoom from "react-reveal/Zoom";

//import { makeStyles } from "@material-ui/core/styles";

//const useStyles = makeStyles(theme => ({
//   circle: {
//     borderRadius: "90px",
//     borderColor: "white",
//     borderStyle: "solid",
//     borderWidth: "1px",
//     width: "70px",
//     height: "70px",
//     paddingTop: "15px",
//     paddingLeft: "8.5px",
//     marginLeft: "5px",
//     marginRight: "5px"
//   },
//   captionStyle: {
//     fontSize: "2em",
//     fontWeight: "bold",
//   },
//   slideNumberStyle:{
//     fontSize: "20px",
//     fontWeight: "bold",
//   }
// }));

const MasonryGrid = ({ eventData, setShowPreivousEvents }) => {
  const [open, setOpen] = React.useState(false);


  const { event_pictures, event_name, event_date } = eventData;

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const handleClickOpen = (e) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShowPastEvents = () => {
    setShowPreivousEvents(true)
   };

  return (
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
        <h1 style={{ display: "inline", backgroundColor: "white" }}>
          {`${event_name} ${new Date(event_date).toDateString()}`}
        </h1>
      </Divider>

      <Box lg={{ width: "auto", minHeight: 829, margin: "30%" }}>
        <Masonry columns={3} spacing={2}>
          {event_pictures.length === 0 ? (
            <div style={{ height: "100vh", width: "100vw" }}>
              <Zoom bottom>
                <h3
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: "row",
                    width: "70vw",
                    fontSize: "5rem",
                    border: "thin solid",
                  }}
                >
                  Pictures coming soon
                </h3>
              </Zoom>
            </div>
          ) : (
              [
                ...event_pictures,
                ...event_pictures,
                ...event_pictures,
                ...event_pictures,
              ]?.map((item, index) => (
                <div key={index}>
                  <img
                    onClick={handleClickOpen}
                    src={`${item}`}
                    srcSet={`${item}`}
                    alt={item}
                    loading="lazy"
                    style={{
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      display: "block",
                      width: "100%",
                    }}
                  />
                </div>
              ))
            )}
        </Masonry>
        {/* fullScreen={fullScreen} */}
        <Dialog
          fullScreen={true}
          xl={{ width: "850px", minHeight: 829, backgroundColor: "#00000091" }}
          open={open}
          onClose={handleClose}
        >
          <DialogActions>
            <Button onClick={handleClose}>
              <CloseIcon />
            </Button>
          </DialogActions>
          <Carousel
            data={event_pictures}
            time={10}
            width="1700px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={false}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </Dialog>
        <Button onClick={handleShowPastEvents}>Back</Button>
      </Box>
    </div>
  );
};

export default MasonryGrid;
