import React from "react";
import Divider from "@mui/material/Divider";
import Timeline from "../components/Timeline";

const AboutUs = () => {
  const timelineData = [
    {
      id: 1,
      title: "Who We Are",
      description:
        "NOSA: Nubian Open Studios for the Arts, Connecting Community Through Creatives and Commerce. What sets NOSA apart is our focus on community and collaboration. ",

      date: "",
      icon: "",
    },

    {
      id: 2,
      title: "What We Do",
      description:
        "NOSA is a community-driven initiative that connects local artists with the public, fosters creativity, and supports small businesses in Boston.",

      date: "",
      icon: "",
    },
    {
      id: 1,
      title: "What We Believe",
      description:
        "Art is not just something to be consumed, but a powerful tool for bringing people together, fostering creativity, and building social capital. We offer a unique blend of art and commerce, providing a platform for artists and small businesses to connect with each other and with the public.",

      date: "",
      icon: "",
    },
  ];
  return (
    <div>
      <div id="/aboutus" style={{ height: "150vh" }}>
        <h1
          style={{
            paddingLeft: "6.1rem",
            height: "3.8rem",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          About Us
        </h1>
        <Divider
          variant="middle"
          sx={{ backgroundColor: "#ff8b25", height: ".1rem", margin: "0" }}
        />
        <span
          style={{
            fontSize: "1.3rem",
            textAlign: "end",
            width: "100vw",
            display: "inline-block",
            paddingRight: "3rem",
          }}
        >
          Building A Vibrant And Inclusive Art Community In Boston
        </span>
        <div
          style={{
            marginTop: "1rem",
            height: "140vh",
            backgroundImage:`url("https://res.cloudinary.com/dpguttfbn/image/upload/v1694991551/VICTORIA_22_1_zf3kof.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "25% 75%",
          }}
        >
          <Timeline timelineData={timelineData}/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
