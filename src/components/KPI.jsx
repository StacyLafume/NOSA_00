import React, { useState, useEffect } from "react";
import { Container, Grid, Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import CircleWithLabel from "../components/CircleWithLabel";

const useStyles = makeStyles((theme) => ({
  kpiContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap", // allow wrapping on narrow screens
    gap: theme.spacing(4), // consistent gutter
    paddingBottom: theme.spacing(4),
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
    padding: "1%",
  },

  label: {
    marginTop: theme.spacing(2),
    color: "white",
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
    <Container className={classes.kpiContainer}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
      >
        {numbers.map((targetNumber, index) => (
          <Grid
            sx={{ mt: { xs: 6, md: 5 }, pt: { xs: 4, md: 4 } }}
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
          >
            <Box textAlign="center" className={classes.kpiContent}>
              <CircleWithLabel
                value={targetNumber}
                size={window.innerWidth < 900 ? 120 : 180}
              />
              <Typography className={classes.label}>
                {
                  ["Ticket sales", "Ticketed Events", "Art Sales", "Members"][
                    index
                  ]
                }
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default KPI;
