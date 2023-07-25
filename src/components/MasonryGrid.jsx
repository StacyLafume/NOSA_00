import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "@mui/material";
import { Carousel } from "react-carousel-minimal";
import CloseIcon from "@mui/icons-material/Close";


const MasonryGrid = () => {
  const [open, setOpen] = React.useState(false);

  const itemData = [
    {
      image: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
      title: "Snacks",
    },
    {
      image: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
      title: "Tower",
    },
    {
      image: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      image: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      image: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
      title: "Snacks",
    },
    {
      image: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
      title: "Tower",
    },
    {
      image: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      image: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      image: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
      title: "Snacks",
    },
    {
      image: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
      title: "Tower",
    },
    {
      image: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      image: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
  ];

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
    console.log("hey girl hey",  itemData.indexOf(e.target.src))
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <Box lg={{ width: "auto", minHeight: 829 }}>
      <Masonry columns={4} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              onClick={handleClickOpen}
              src={`${item.image}?w=162&auto=format`}
              srcSet={`${item.image}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
          </div>
        ))}
      </Masonry>
      {/* fullScreen={fullScreen} */}
      <Dialog
        fullScreen={true}
        xl={{ width: "850px", minHeight: 829, backgroundColor:"#00000091"}}
        open={open}
        onClose={handleClose}
      >
        <DialogActions>
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        </DialogActions>
        <Carousel
          data={itemData}
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
};

export default MasonryGrid;
