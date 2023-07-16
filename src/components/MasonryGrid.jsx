import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "@mui/material";
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';

;
// import Fab from '@mui/material/Fab';
// import EditIcon from '@mui/icons-material/Edit';



const MasonryGrid = () => {
  const [open, setOpen] = React.useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
      title: "Snacks",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
      title: "Tower",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    }
  ];

  return (
    <Box lg={{ width: 500, minHeight: 829 }}>
      <Masonry columns={4} spacing={2}>
        {itemData.map((item, index) => (
          <div  key={index}>
            <img
            onClick={handleClickOpen}
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
              
            />
             {/* <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab> */}
          </div>
        ))}
      </Masonry>
      {/* fullScreen={fullScreen} */}
      <Dialog    open={open} onClose={handleClose}>
      <SwipeableTextMobileStepper images={itemData}/>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MasonryGrid;
