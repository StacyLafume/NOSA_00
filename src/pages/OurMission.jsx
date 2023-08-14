import * as React from "react";
import Divider from "@mui/material/Divider";
import { Box, Grid, Typography } from "@mui/material";

const OurMission = () => {
  return (
    <Box sx={{ flexGrow: 1 }} id="/ourmission" style={{ height: "110vh" }}>
      <Grid container sx={{ pt: "5%" }} spacing={2}>
        <Grid xs={12} style={{ height: "15vh" }}>
          {" "}
          <Divider
            textAlign="center"
            role="presentation"
            style={{
              backgroundColor: "orange",
              height: ".2rem",
              alignItems: "center",
              margin: "2rem 0",
            }}
          >
            <h1
              style={{
                fontSize: "3.5rem",
                display: "inline",
                backgroundColor: "white",
              }}
            >
              Our Mission
            </h1>
          </Divider>
        </Grid>
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            padding: "4%",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Grid
            Grid
            style={{
              height: "30vh",
              display: "flex",
              flexDirection: "row",
              padding: "3%",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#ff8b25",
              backgroundColor: "black",
            }}
            xs={8}
          >
            <Grid>
              <Typography sx={{ fontSize: "2rem" }}>
                Our mission is to provide a platform for artists to showcase
                their work, connect with each other, and engage with the public.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            Grid
            xs={4}
            style={{
              height: "30vh",
              flexWrap: "wrap",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Grid
              style={{
                backgroundImage: `url(https://wgbh.brightspotcdn.com/dims4/default/c48af21/2147483647/strip/true/crop/3761x2249+0+0/resize/3761x2249!/quality/70/?url=https%3A%2F%2Fwgbh-brightspot.s3.amazonaws.com%2F0e%2F50%2Fd35eb57146bf91647c9a04dd33eb%2Fwashington-and-dudley-mural.jpg)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "30vh",
                width: "100%",
                border: "thick solid orange"
              }}
            ></Grid>
          </Grid>
          <Grid
            style={{
              height: "30vh",
              flexWrap: "wrap",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
            Grid
            xs={4}
          >
            <Grid
              style={{
                backgroundImage: `url(https://github.com/StacyLafume/NOSA_00/assets/47963818/4b510a82-48e5-43fe-b62b-673627017e94)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "30vh",
                width: "100%",
                border: "thick solid orange"
              }}
            >
              xs=4
            </Grid>
          </Grid>
          <Grid
            style={{
              height: "30vh",
              flexWrap: "wrap",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              color: "#ff8b25",
              backgroundColor: "black",
              padding: "3%",
            }}
            Grid
            xs={8}
          >
            <Grid>
              <Typography sx={{ fontSize: "1rem" }}>
                Boston's communities have been hit hard by the pandemic, and
                small businesses and artists have been particularly impacted.
                Many artists struggle to find affordable space to showcase their
                work, while small businesses lack the foot traffic they need to
                thrive. NOSA is solving this problem by providing a platform for
                artists and small businesses to come together, engage with the
                public, and boost the local economy.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurMission;
