import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../AOTM_gallery.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ArtistOfTheMonthImageGallery = ({ images }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  console.log("images",images )

  const handleThumbnailClick = (event, index) => {
    //console.log('Thumbnail clicked:', index);
    setIsFullScreen(true);
  };

  const handleFullscreenExit = () => {
    setIsFullScreen(false);
  };

  const formattedImages = images.map((el) => {
    return { original: el.image, thumbnail: el.image, originalTitle: "we are young!", description:el.image_title || "" };
  });

  return (
    <div>
      {isFullScreen ? (
        <div className="fullscreen-overlay">
           
          <Dialog
            open={isFullScreen}
            onClose={handleFullscreenExit}
            aria-describedby="alert-dialog-slide-description"
            
          >
            <ImageGallery  style={{color: "black"}} items={formattedImages} originalTitle={true} showNav={false} showFullscreenButton={false}/>
            <button onClick={handleFullscreenExit}>Exit Fullscreen</button>
          </Dialog>
        </div>
      ) : (
        <div className="regular-gallery">
          <style>
            {`
              .regular-gallery .image-gallery-image {
                display: none;
              }
            `}
          </style>
          <ImageGallery
            items={formattedImages}
            onThumbnailClick={handleThumbnailClick}
          />
        </div>
      )}
    </div>
  );
};

export default ArtistOfTheMonthImageGallery;
