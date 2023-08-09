import React from "react";
import { Carousel } from "react-carousel-minimal";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const SGridWCarousel = ({images}) => {
  console.log(...images)
  const [open, setOpen] = React.useState(false);


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



  return (
    <Box lg={{ width: "auto", minHeight: 829 }}>
      <Box maxWidth="xl">
        <ImageList sx={{ width: "100%", height: 'auto' }} cols={4} rowHeight={'auto'}>
          {images.map((item, index) => (
            <ImageListItem key={item.image}>
              <img
                onClick={handleClickOpen}
                src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
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
          data={images}
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
    </Box>
  );
}


export default SGridWCarousel

