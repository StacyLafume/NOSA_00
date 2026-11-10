import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { scroller } from "react-scroll";

const navItems = [
  { label: "Home", target: "/" },
  { label: "About Us", target: "/aboutus" },
  { label: "Our Mission", target: "/ourmission" },
  { label: "Events", target: "/events" },
  { label: "Artist of the Month", target: "/artistofthemonth" },
  { label: "Get Involved", target: "/getInvolved" },
  { label: "Services", target: "/services" },
  { label: "Contact Us", target: "/contactus" },
];

const Nav = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)"
  );
  const [navColor, setNavColor] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const menuId = "primary-navigation-menu";

  useEffect(() => {
    const handleScroll = () => setNavColor(window.scrollY >= 199);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTo = (target) => {
    setAnchorEl(null);
    scroller.scrollTo(target, {
      duration: prefersReducedMotion ? 0 : 500,
      smooth: !prefersReducedMotion,
      offset: -72,
    });
  };

  return (
    <AppBar
      component="nav"
      aria-label="Main navigation"
      position="fixed"
      sx={{
        color: navColor ? "#161616" : "#fff",
        backgroundColor: navColor ? "#d9d9d9" : "#161616",
        boxShadow: "none",
        transition: prefersReducedMotion ? "none" : "background-color 200ms ease",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "1440px",
          minHeight: { xs: 64, lg: 76 },
          mx: "auto",
          px: { xs: 2, sm: 3 },
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box
          component="a"
          href="#/"
          aria-label="NOSA Boston home"
          onClick={(event) => {
            event.preventDefault();
            navigateTo("/");
          }}
          sx={{ display: "inline-flex", flexShrink: 0, alignItems: "center" }}
        >
          <Box
            component="img"
            src={
              navColor
                ? require("../images/Nosa_Logo_black.png")
                : require("../images/Nosa_Logo_white.png")
            }
            alt=""
            sx={{ display: "block", width: { xs: 104, sm: 128 }, height: "auto" }}
          />
        </Box>

        {isDesktop ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: { lg: 0, xl: 0.5 } }}>
            {navItems.map(({ label, target }) => (
              <Button
                key={target}
                color="inherit"
                onClick={() => navigateTo(target)}
                sx={{
                  minHeight: 44,
                  px: { lg: 0.75, xl: 1.25 },
                  fontSize: { lg: "0.78rem", xl: "0.9rem" },
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="Open navigation menu"
              aria-controls={menuId}
              aria-expanded={isMenuOpen}
              aria-haspopup="menu"
              onClick={(event) => setAnchorEl(event.currentTarget)}
              sx={{ minWidth: 44, minHeight: 44 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id={menuId}
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{ "aria-label": "Main navigation" }}
            >
              {navItems.map(({ label, target }) => (
                <MenuItem key={target} onClick={() => navigateTo(target)}>
                  {label}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
