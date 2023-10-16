import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TabContext from "@mui/lab/TabContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles, useTheme } from "@mui/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll/modules";
import LinearProgress from "@mui/joy/LinearProgress";
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";

const useStyles = makeStyles((theme) => ({
  responsive: {
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.up("xl")]: {},
  },
  colorFill: {
    backgroundColor: "#d9d9d9 !important",
    color: "black !important",
    fontWeight: "500 !important",
    fontSize: ".781rem !important",
    fontFamily: "Blinker !important",
  },
  noColorFill: {
    backgroundColor: "transparent !important",
    color: "white !important",
    fontWeight: "500 !important",
    fontFamily: "Blinker  !important",
  },
  appBar: {
    height: "fitContent",
    [theme.breakpoints.down("sm")]: {
      height: "64px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem"
    },
    
    display: "flex",
    justifyContent: "space-evenly",
    boxShadow: "none !important",
  },
  tabsContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    display: "flex",
    justifyContent: "space-evenly", // Evenly space the tabs
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
    },
    [theme.breakpoints.up("lg")]: {
      display: "none !important",
    },
    [theme.breakpoints.up("xl")]: {
      display: "none !important",
    },
  },
  vanishBox: {
    display: "none !important",
    height: "fit-content",
  },
  noLineVanish: {
    display: "inline-block",
  },
}));

const Nav = () => {
  const materialTheme = materialExtendTheme();
  const classes = useStyles();
  const theme = useTheme();
  const [navColor, setNavColor] = useState(false);
  const [value, setValue] = useState("1");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleScroll = () => {
    if (window.scrollY >= 199) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "nav-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      style={{ backgroundColor: "transparent !important" }}
    >
      <LinkScroll
        isDynamic={true}
        to="/"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setValue("1");
          }}
        >
          Home
        </MenuItem>
      </LinkScroll>

      <LinkScroll
        isDynamic={true}
        to="/aboutus"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setValue("3");
          }}
        >
          About Us
        </MenuItem>
      </LinkScroll>
      <LinkScroll
        isDynamic={true}
        to="/ourmission"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setValue("2");
          }}
        >
          Our Mission
        </MenuItem>
      </LinkScroll>
      <LinkScroll
        isDynamic={true}
        to="/events"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setValue("4");
          }}
          sx={{ display: { sm: "none", xs: "none" } }}

        >
          Events
        </MenuItem>
      </LinkScroll>
      <LinkScroll
        isDynamic={true}
        to="/artistofthemonth"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setValue("5");
          }}

        >
          Artist Of The Month
        </MenuItem>
      </LinkScroll>

      <LinkScroll
        isDynamic={true}
        to="getInvolved"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setValue("7");
          }}

        >
          Get Involved
        </MenuItem>
      </LinkScroll>

      <LinkScroll
        isDynamic={true}
        to="/services"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setValue("7");
          }}

        >
          Services
        </MenuItem>
      </LinkScroll>
      <LinkScroll
        isDynamic={true}
        to="/contactus"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <MenuItem
          onClick={() => {
            handleMenuClose();
            setValue("8");
          }}

        >
          Contact Us
        </MenuItem>
      </LinkScroll>
    </Menu>
  );

  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <AppBar
          className={`${classes.appBar} ${
            navColor ? classes.colorFill : classes.noColorFill
          }`}
        >
          <Box
            sx={{
              width: "100%",
              height: "fit-content",
              // backgroundColor: "transparent",
              mx: 3,
              // display: "flex",
            }}
            className={navColor ? classes.vanishBox : null}
          >
            <img
              width={"12%"}
              height={"auto"}
              src={
                navColor
                  ? require("../images/Nosa_Logo_black.png")
                  : require("../images/Nosa_Logo_white.png")
              }
              alt=""
              style={{ marginTop: "35px" }}
            />
          </Box>
          <LinearProgress
            style={{
              bottom: "40px",
              color: "#ffff",
              marginTop: "1.8rem",
            }}
            determinate
            value={100}
            thickness={1}
            className={navColor ? classes.vanishBox : null}
          />
          <Toolbar
            style={{ backgroundColor: navColor ? "#D9D9D9" : "transparent" }}
          >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                width: "100%",
                typography: "body1",
                backgroundColor: navColor ? "#D9D9D9" : "transparent",
              }}
            >
              <TabContext value={value}>
                <Box>
                  <Tabs
                    centered
                    onChange={handleChange}
                    indicatorColor="secondary"
                    aria-label="lab API tabs example"
                    sx={{ backgroundColor: "transparent" }}
                  >
                    <LinkScroll
                      isDynamic={true}
                      to="/"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      {/* <LinkRouter to="/"> */}
                      <Tab
                        className={
                          navColor ? classes.colorFill : classes.noColorFill
                        }
                        label="Home"
                        
                        sx={{ display: { sm: "none", xs: "none", lg: "inline-block", xl: "inline-block" } }}

                      />
                      {/* </LinkRouter> */}
                    </LinkScroll>
                    <LinkScroll
                      isDynamic={true}
                      to="/aboutus"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      {/* <LinkRouter to="/aboutus"> */}
                      <Tab
                        className={
                          navColor ? classes.colorFill : classes.noColorFill
                        }
                        label="About Us"
                        sx={{ display: { sm: "none", xs: "none", lg: "inline-block", xl: "inline-block" } }}
                      />
                      {/* </LinkRouter> */}
                    </LinkScroll>
                    <LinkScroll
                      isDynamic={true}
                      to="/ourmission"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      {/* <LinkRouter to="/ourmission"> */}
                      <Tab
                        className={
                          navColor ? classes.colorFill : classes.noColorFill
                        }
                        label="Our Mission"
                        sx={{ display: { sm: "none", xs: "none", lg: "inline-block", xl: "inline-block" } }}

                      />
                      {/* </LinkRouter> */}
                    </LinkScroll>

                    <LinkScroll
                      isDynamic={true}
                      to="/events"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      {/* <LinkRouter to="/events"> */}
                      <Tab
                        className={
                          navColor ? classes.colorFill : classes.noColorFill
                        }
                        label="Events"
                        sx={{ display: { sm: "none", xs: "none" } }}

                      />
                      {/* </LinkRouter> */}
                    </LinkScroll>
                    <LinkScroll
                      isDynamic={true}
                      to="/artistofthemonth"
                      spy={true}
                      smooth={true}
                      ooffset={-50}
                      duration={500}
                    >
                      {/* <LinkRouter to="/artistofthemonth"> */}
                      <Tab
                        className={
                          navColor ? classes.colorFill : classes.noColorFill
                        }
                        label="Artist Of The Month"
                        sx={{ display: { sm: "none", xs: "none", lg: "inline-block", xl: "inline-block" } }}

                      />
                      {/* </LinkRouter> */}
                    </LinkScroll>
                    <LinkScroll
                      isDynamic={true}
                      to="/getInvolved"
                      spy={true}
                      smooth={true}
                      ooffset={-50}
                      duration={500}
                    >
                      {/* <LinkRouter to="/artistofthemonth"> */}
                      <Tab
                        className={
                          navColor ? classes.colorFill : classes.noColorFill
                        }
                        label="Get Involved"
                        sx={{ display: { sm: "none", xs: "none", lg: "inline-block", xl: "inline-block" } }}

                      />
                      {/* </LinkRouter> */}
                    </LinkScroll>

                    <LinkScroll
                      isDynamic={true}
                      to="/services"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      {/* <LinkRouter to="/services"> */}
                      <Tab
                        className={
                          navColor ? classes.colorFill : classes.noColorFill
                        }
                        label="Services"
                        sx={{ display: { sm: "none", xs: "none", lg: "inline-block", xl: "inline-block" } }}

                      />
                      {/* </LinkRouter> */}
                    </LinkScroll>
                    <LinkScroll
                      isDynamic={true}
                      to="/contactus"
                      spy={true}
                      smooth={true}
                      offset={10}
                      duration={500}
                    >
                      {/* <LinkRouter to="/contactus"> */}
                      <Tab
                        className={
                          navColor ? classes.colorFill : classes.noColorFill
                        }
                        label="Contact Us"
                        sx={{ display: { sm: "none", xs: "none", lg: "inline-block", xl: "inline-block" } }}

                      />
                      {/* </LinkRouter> */}
                    </LinkScroll>
                  </Tabs>
                </Box>
              </TabContext>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
};

export default Nav;
