import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CircularProgress from '@mui/material/CircularProgress';


const useStyles = makeStyles((theme) => ({
  kpiContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "300px",
    position: "relative",
    overflow: "hidden",
    width: "100%",
    flexWrap: "nowrap"
  },
  kpiContent: {
    position: "relative",
    zIndex: 1,
    minHeight: "100%", // Ensure the content fills the container's height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center items vertically
    alignItems: "center", // Center items horizontally
    padding: theme.spacing(5), // Adjust the padding as needed to center the numbers
  },
  buttonWrapper: {
    color: "f1993e",
    marginTop: theme.spacing(2),
    flexWrap: "no-wrap",
    padding:"1%"
  },
  circle: {
    width: "180px !important",
    position: "relative",
    height: "119px !important", 
    top: "104px",
    right: "32px",
    transform: "rotate(-90deg)",
  }
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
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{flexWrap:"nowrap"}}
        sx={{}}
      >
        {numbers.map((targetNumber, index) => (
          <Grid item xs={4} key={index}>
            <Box textAlign="center" className={classes.kpiContent}>
            <CircularProgress className={classes.circle} variant="determinate" thickness={1} sx={{color:"#ff8b25",}} value={100} />
              <Typography variant="h3" fontWeight="thin">
                {targetNumber}
              </Typography>
              <div className={classes.buttonWrapper}>
                <Grid item sx={{width:"6rem", position:"relative", top:"40px"}} variant="contained">
                {index === 0 ? "Ticket sales" : index === 1 ? "Ticked Events" :  index === 2 ? "Art Sales" : "Members"}

                </Grid>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default KPI;
