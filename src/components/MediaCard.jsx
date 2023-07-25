import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function MediaCard({ itemData }) {
  console.log(itemData)
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {itemData.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            event / exhibition explanation
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={itemData.img}
        alt="Live from space album cover"
      />
    </Card>
  );
}

export default MediaCard