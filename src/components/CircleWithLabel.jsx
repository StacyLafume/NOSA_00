import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const CircleWithLabel = ({ value, size = 180, label }) => (
  <Box position="relative" display="inline-flex">
    <CircularProgress
      variant="determinate"
      value={100}
      thickness={1}
      size={size}
      sx={{ color: "#ff8b25" }}
    />
    <Box
      position="absolute"
      top={0}
      left={0}
      bottom={0}
      right={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: size * 0.25 + "px", md: size * 0.33 + "px" },
          color: "white",
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>
    </Box>
  </Box>
);

export default CircleWithLabel;
