import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CircularProgress from '@mui/material/CircularProgress';


const useStyles = makeStyles((theme) => ({
  kpiContainer: {
    display: "flex",
    justifyContent: "center",
    minHeight: "300px",
    position: "relative",
    overflow: "hidden",
    width: "62vw !important",
    flexWrap: "nowrap",
    padding:"0rem 0rem 3rem 0rem",
    height: "fit-content",

  },
  kpiContent: {
    position: "relative",
    zIndex: 1,
    minHeight: "100%", // Ensure the content fills the container's height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center items vertically
    alignItems: "center", // Center items horizontally
  },
  buttonWrapper: {
    marginTop: theme.spacing(2),
    padding:"1%"
  },
  circle: {
    width: "180px !important",
    position: "relative",
    height: "119px !important", 
    top: "104px",
    right: "32px",
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
    <Container className={classes.kpiContainer} >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{flexWrap:"nowrap", flexDirection:"row", marginTop:"-16px", width:"calc(100% + 16px)", marginLeft:"-16px",justifyContent:"center",alignItems:"center"}}
        sx={{}}
      >
        {numbers.map((targetNumber, index) => (
          <Grid style={{padding:"0rem"}} item xs={4} key={index}>
            <Box textAlign="center" className={classes.kpiContent}>
            <CircularProgress className={classes.circle} variant="determinate" thickness={1} sx={{color:"#ff8b25",}} value={100} />
              <Typography variant="h3" fontWeight="thin" style={{fontSize:"3rem", lineHeight:"1.167", margin:"0", }}>
                {targetNumber}
              </Typography>
              <div className={classes.buttonWrapper}>
                <Typography item sx={{width:"6rem", position:"relative", top:"40px", margin:"0rem"}} variant="contained">
                {index === 0 ? "Ticket sales" : index === 1 ? "Ticketed Events" :  index === 2 ? "Art Sales" : "Members"}

                </Typography>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default KPI;
