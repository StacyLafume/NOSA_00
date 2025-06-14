import Map from "../components/Map";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link as LinkScroll } from "react-scroll/modules";
import { Box, Link, Typography } from "@mui/material";
import { DonateButton } from "../components/Buttons";
import Button from "@mui/material/Button";

import InstagramIcon from "@mui/icons-material/Instagram";

const CustomDivider = styled("div")(({ theme }) => ({
  width: 0,
  height: "100%",
  borderLeft: `thin solid rgb(255 255 255 / 45%)`,
  margin: theme.spacing(0, 2),
}));

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const Footer = () => {
  return (
    <div>
      <Grid
        sx={{ marginTop: "", padding: "30px", alignItems: "center" }}
        backgroundColor={"black"}
        color={"white"}
        container
      >
        <Grid item xs={8}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={2} sm={4} md={4}>
              <Grid sx={{ display: "flex", alignItems: "center" }} item>
                <img src="https://cdn-az.allevents.in/events5/banners/d4425956a5f0d65bfacf7dedb1031dde91a7fe828b1b7ba632b4f65dc970718e-rimg-w1200-h800-gmir.jpg?v=1693230844" />
              </Grid>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Grid item>
                <List>
                  <LinkScroll
                    isDynamic={true}
                    to="#"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <ListItem style={{ textDecoration: "underline" }}>
                      Home
                    </ListItem>
                  </LinkScroll>
                  <LinkScroll
                    isDynamic={true}
                    to="/ourmission"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <ListItem style={{ textDecoration: "underline" }}>
                      Our Mission
                    </ListItem>
                  </LinkScroll>
                  <LinkScroll
                    isDynamic={true}
                    to="/aboutus"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <ListItem style={{ textDecoration: "underline" }}>
                      About Us
                    </ListItem>
                  </LinkScroll>
                  {/* <LinkScroll
                    isDynamic={true}
                    to="/events"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <ListItem style={{ textDecoration: "underline" }}>
                      Events
                    </ListItem>
                  </LinkScroll> */}
                  <LinkScroll
                    isDynamic={true}
                    to="/artistofthemonth"
                    spy={true}
                    smooth={true}
                    offset={5000000000}
                    duration={500}
                  >
                    <ListItem style={{ textDecoration: "underline" }}>
                      Artist Of The Month
                    </ListItem>
                  </LinkScroll>

                  <LinkScroll
                    isDynamic={true}
                    to="/getInvolved"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <ListItem style={{ textDecoration: "underline" }}>
                      Get Involved
                    </ListItem>
                  </LinkScroll>
                  <LinkScroll
                    isDynamic={true}
                    to="/services"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <ListItem style={{ textDecoration: "underline" }}>
                      Services
                    </ListItem>
                  </LinkScroll>
                </List>
              </Grid>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Grid item>
                <List>
                  <ListItem>Sunday Closed</ListItem>
                  <ListItem>Monday Closed</ListItem>
                  <ListItem>Tuesday 4–6:30 PM</ListItem>
                  <ListItem>Wednesday 6–8 PM</ListItem>
                  <ListItem>Thursday 4–10 PM </ListItem>
                  <ListItem>Friday 7 PM–12 AM</ListItem>
                  <ListItem>Saturday Closed</ListItem>
                </List>
                <a href="https://www.instagram.com/nosaboston/">
                  <Button
                    style={{ wordSpacing: "3px", color: "white" }}
                    variant={"p"}
                  >
                    Follow us on Instagram{" "}
                    <InstagramIcon
                      style={{ marginLeft: "4px" }}
                      fontSize={"large"}
                    />
                  </Button>
                </a>
                <DonateButton style={{ marginLeft: "3px" }} color="#e56017" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <CustomDivider />
        <Grid item xs={3}>
          <Box>
            <img
              src={require("../images/Nosa_Logo_white.png")}
              alt="NOSA fornt door"
            />
            <Box mt={5}>
              <Typography
                sx={{ color: "white" }}
                variant="body2"
                color="text.secondary"
                align="center"
              >
                {"Copyright © "}
                <Link color="inherit" href="#">
                  NOSA Boston
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Map />
    </div>
  );
};

export default Footer;
