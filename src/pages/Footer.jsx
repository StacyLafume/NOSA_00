import Map from "../components/Map";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link as LinkScroll } from "react-scroll/modules";
import { Box, Link, Typography } from "@mui/material";
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
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
       Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
       Sed malesuada lobortis pretium.`}
    </div>
  );

  return (
    <div>
      <Grid
        sx={{ padding: "30px", alignItems: "center" }}
        height={"30vh"}
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
              <Grid
                sx={{ display: "flex", alignItems: "center" }}
                height={"25vh"}
                item
              >
                <img src="https://cdn-az.allevents.in/events5/banners/d4425956a5f0d65bfacf7dedb1031dde91a7fe828b1b7ba632b4f65dc970718e-rimg-w1200-h800-gmir.jpg?v=1693230844" />

                {/* <Typography variant={"h6"}>
                  We invite you to join the NOSA community and help us build a
                  more vibrant, inclusive, and creative Boston. Follow us on
                  social media, or attend one of our events to learn more about
                  how you can be a part of this exciting initiative.
                </Typography> */}
              </Grid>
            </Grid>
            <Grid item xs={2} sm={4} md={4}>
              <Grid height={"25vh"} item>
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
                  {/* <LinkScroll
      isDynamic={true}

                    to="/ourmission"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <ListItem style={{ textDecoration: "underline"}}>Our Mission</ListItem>
                  </LinkScroll> */}
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
                  {/* <LinkScroll
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
                  </LinkScroll> */}
                  {/* <LinkScroll
                    isDynamic={true}
                    to="/pastexhibitions"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <ListItem style={{ textDecoration: "underline" }}>
                      Past Exhibitions
                    </ListItem>
                  </LinkScroll> */}
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
            {/* <Grid item xs={2} sm={4} md={4}>
              <Grid height={"25vh"} item>
                <Typography variant={"h2"}>
                  Follow us on Instagram <InstagramIcon fontSize={"large"} />
                </Typography>
              </Grid>
            </Grid> */}
          </Grid>
        </Grid> 
        <CustomDivider />
        <Grid item xs={3}>
          <Box>
            <img
              src={require("../images/Nosa_Logo_white.png")}
              height={"125vh"}
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
                  NOSABOSTON
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
