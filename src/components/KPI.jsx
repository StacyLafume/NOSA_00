import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  kpiContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "300px",
    position: "relative",
    overflow: "hidden",
    width: "100%",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, // Set a negative z-index to place the image behind the content
    filter: "blur(8px) contrast(120%)", // Apply the blur effect only to the image
  },
  kpiContent: {
    position: "relative",
    zIndex: 1,
    minHeight: "100%", // Ensure the content fills the container's height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center items vertically
    alignItems: "center", // Center items horizontally
    padding: theme.spacing(8), // Adjust the padding as needed to center the numbers
  },
  buttonWrapper: {
    color: "f1993e",
    marginTop: theme.spacing(2),
  },
  iframeContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden", // Ensure the iframe doesn't overflow outside its container
  },

  iframe: {
    width: "100%", // Set iframe width to 100%
    height: "100%", // Set iframe height to 100%
    border: 0, // Remove the iframe border
  },
}));

const KPI = ({ numbers, interval }) => {
  const classes = useStyles();
  const [counts, setCounts] = useState(numbers.map(() => 0));

  useEffect(() => {
    let animationInterval;
    const animate = (index) => {
      if (counts[index] < numbers[index]) {
        setCounts((prevCounts) =>
          prevCounts.map((count, i) =>
            i === index ? Math.min(count + 1, numbers[index]) : count
          )
        );
      } else {
        clearInterval(animationInterval);
      }
    };

    animationInterval = setInterval(() => {
      for (let i = 0; i < numbers.length; i++) {
        animate(i);
      }
    }, interval);

    return () => clearInterval(animationInterval);
  }, [numbers, counts, interval]);

  return (
    <Container className={classes.kpiContainer} maxWidth={false}>
      <div className={classes.backgroundImage}>
        {/* Wrap the iframe in a container */}
        <div className={classes.iframeContainer}>
          <div
            style={{
              width: "100%",
              height: "0",
              paddingBottom: "100%",
              position: "relative",
            }}
          >
            <iframe
             title="waves"
              src="https://giphy.com/embed/t2aAdTgnU9Ie6jvG0W"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{}}
      >
        {numbers.map((targetNumber, index) => (
          <Grid item xs={4} key={index}>
            <Box textAlign="center" className={classes.kpiContent}>
              <Typography variant="h3" fontWeight="bold">
                {counts[index]}
              </Typography>
              <div className={classes.buttonWrapper}>
                <Button variant="contained" color="primary">
                  KPI Label {index + 1}
                </Button>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default KPI;
