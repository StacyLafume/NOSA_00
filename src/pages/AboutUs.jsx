import React from "react";
import Box from "@mui/joy/Box";
import { Container } from "@mui/material";
import Divider from "@mui/material/Divider";
import Timeline from "../components/Timeline";

const AboutUs = () => {
  return (
    <div>
      <div id="/aboutus" style={{ height: "134vh" }}>
        <h1
          style={{
            fontSize: "3.5rem",
            paddingLeft: "6.1rem",
            marginTop: "2rem",
            height: "4.3rem",
          }}
        >
          About Us
        </h1>
        <Divider
          variant="middle"
          sx={{ backgroundColor: "#ff8b25", height: ".2rem", margin: "0" }}
        />
        <span
          style={{
            fontSize: "1.3rem",
            textAlign: "end",
            width: "100vw",
            display: "inline-block",
            paddingRight: "3rem",
            marginBottom: "2rem",
          }}
        >
          Building A Vibrant And Inclusive Art Community In Boston
        </span>
        <div
          style={{
            marginTop: "3rem",
            borderTop: "thick solid",
            borderBottom: "thick solid",
          }}
        >
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default AboutUs
