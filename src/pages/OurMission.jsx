import * as React from "react";
import Divider from "@mui/material/Divider";
import { Box, Grid, Typography } from "@mui/material";
import KPI from "../components/KPI";
import { DonateButton } from "../components/Buttons";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  responsive: {
    [theme.breakpoints.up("sm")]: {

    },
    [theme.breakpoints.up("md")]: {

    },
    [theme.breakpoints.up("lg")]: {

    },
    [theme.breakpoints.up("xl")]: {
      
    },
  },
}));

const OurMission = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      id="/ourmission"
      style={{ height: "110vh", backgroundColor: "black", overflow: "hidden" }}
    >
      <Grid
        container
        sx={{
          pt: "5%",
          marginLeft: "-16px",
          width: "calc(100% + 16px)",
          marginTop: "-3rem",
          flexDirection: "row",
          flexWrap: "wrap",
          display: "flex",
        }}
        spacing={2}
      >
        <Grid xs={12} style={{ height: "10vh", marginBottom: "2rem" }}>
          {" "}
          <Divider
            textAlign="center"
            role="presentation"
            style={{
              backgroundColor: "white",
              height: ".05rem",
              alignItems: "center",
              margin: "2rem 0",
            }}
          >
            <Typography
              style={{
                fontSize: "2.6rem",
                fontWeight: "400",
                display: "inline",
                backgroundColor: "black",
                padding: "10%",
                color: "white",
                position: "relative",
                right: "2rem",
              }}
            >
              Our Mission
            </Typography>
          </Divider>
        </Grid>
        <Grid
          container
          style={{
            placeContent: "center",
          }}
          spacing={2}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              color: "white",
              fontWeight: "300 !important",
              textAlign: "left",
              width: "50%",
              margin: "0",
              fontFamily: "Blinker",
              width: "60%",
            }}
          >
            {
              "NOSA enables artists to showcase their work, connect with each other, and engage with the public."
            }
            <span
              style={{
                position: "relative",
                left: "37rem",
                bottom: "2.68rem",
                display: "flex",
              }}
            >
              <DonateButton
                color={"#ff8b25"}
                style={{ width: "fit-content", width: "12vw !important" }}
              />
            </span>
          </Typography>
        </Grid>
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            width: "100vw",
            padding: "0% 4%",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: "row-reverse",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Grid
              Grid
              style={{
                height: "30vh",
                display: "flex",
                flexDirection: "row",
                padding: "3% 0% 3% 3%",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#ffff",
                backgroundColor: "black",
                borderTop: "thin solid white",
              }}
              xs={8}
            >
              <Grid>
                <Typography
                  style={{
                    lineHeight: "2.5rem",
                    wordSpacing: "6px",
                    fontSize: ".9rem",
                    fontWeight: "400",
                    width: "100%",
                  }}
                >
                  Boston's communities have been hit hard by the pandemic, and
                  small businesses and artists have been particularly impacted.
                  Many artists struggle to find affordable space to showcase
                  their work, while small businesses lack the foot traffic they
                  need to thrive. NOSA is solving this problem by providing a
                  platform for artists and small businesses to come together,
                  engage with the public, and boost the local economy.
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
                  borderTop: "thin solid white",
                }}
              ></Grid>
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginTop: "1rem",
              width: "100%",
            }}
          >
            <Grid
              style={{
                height: "fit-content",
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
                }}
              ></Grid>
            </Grid>
            <Grid
              style={{
                height: "30vh",
                flexWrap: "wrap",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                color: "white",
                backgroundColor: "black",
                padding: "0",
                borderBottom: "thin solid white",
                width: "80vw",
                flexDirection: "row",
              }}
              Grid
              xs={8}
              x
            >
              <Grid style={{}}>
                <KPI numbers={["$8K", "19", "$5K", "326+"]} interval={1} />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurMission;
