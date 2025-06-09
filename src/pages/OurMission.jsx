import * as React from "react";
import Divider from "@mui/material/Divider";
import { Box, Grid, Typography } from "@mui/material";
import KPI from "../components/KPI";
import { DonateButton } from "../components/Buttons";
import { makeStyles } from "@mui/styles";
import painting from "../images/painting.jpeg";

const OurMission = () => {
  return (
    <Box
      id="/ourmission"
      sx={{
        flexGrow: 1,
        bgcolor: "black",
        color: "white",
        pt: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 4, sm: 6, md: 8 }, // padding bottom for KPI
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          px: { xs: 2, sm: 4, md: 8 },
          pt: { xs: 4, md: 6 },
        }}
      >
        <Grid item xs={12}>
          <Divider
            color="white"
            textAlign="center"
            sx={{ borderColor: "white", color: "white" }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
                px: 2,
                color: "white",
                textAlign: "center",
              }}
            >
              Our Mission
            </Typography>
          </Divider>
        </Grid>
        <Grid
          container
          xs={12}
          md={18}
          justifyContent={{ xs: "space-around", md: "space-around" }}
        >
          <Typography
            sx={{
              fontSize: { sx: "1.2", sm: "2rem", md: "2rem" },
              fontWeight: 300,
              textAlign: { xs: "center", md: "left" },
              color: "#ffff",
            }}
          >
            {
              "NOSA enables artists to showcase their work, connect with each other, and engage with the public."
            }
          </Typography>

          <DonateButton
            color={"#e55f1a"}
            sx={{ width: { xs: "80%", sm: "50%", md: "12vw" } }}
          />
        </Grid>
        {/* <Grid
          item
          xs={12}
          md={4}
          container
          justifyContent={{ xs: "space-evenly", md: "space-evenly" }}
        >
          <DonateButton
            color={"#e55f1a"}
            sx={{ width: { xs: "80%", sm: "50%", md: "12vw" } }}
          />
        </Grid> */}

        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              height: { xs: 200, sm: 250, md: "30vh" },
              backgroundImage: `url(${painting})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>

        <Grid item xs={12} lg={8}>
          <Box sx={{ borderTop: "1px solid white", pt: 2 }}>
            <Typography
              style={{
                lineHeight: "2.5rem",
                wordSpacing: "6px",
                fontSize: ".9rem",
                fontWeight: "400",
                width: "100%",
                color: "white",
              }}
            >
              Boston's communities have been hit hard by the pandemic, and small
              businesses and artists have been particularly impacted. Many
              artists struggle to find affordable space to showcase their work,
              while small businesses lack the foot traffic they need to thrive.
              NOSA is solving this problem by providing a platform for artists
              and small businesses to come together, engage with the public, and
              boost the local economy.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} lg={8}>
          <Box
            sx={{
              borderTop: "1px solid white",
              pt: 2,
              borderBottom: "1px solid white",
            }}
          >
            <KPI numbers={["$8K", "19", "$5K", "326+"]} interval={1} />
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Box
            sx={{
              height: { xs: 200, sm: 250, md: "30vh" },
              backgroundImage: `url(https://github.com/StacyLafume/NOSA_00/assets/47963818/4b510a82-48e5-43fe-b62b-673627017e94)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurMission;
