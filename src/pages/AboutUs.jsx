import React from "react";
import Divider from "@mui/material/Divider";
import Timeline from "../components/Timeline";
import { Box, Typography, Container } from "@mui/material";

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
    <Box
      id="/aboutus"
      sx={{
        pt: { xs: 4, sm: 6, md: 8 },
        pb: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Typography
        variant="h1"
        sx={{ mb: 2, pl: { xs: 0, sm: 4 }, fontWeight: 500 }}
      >
        About Us
      </Typography>

      <Divider
        sx={{
          backgroundColor: "#ff8b25",
          height: 4,
        }}
      />
      <Typography
        sx={{
          fontSize: { xs: "1.3rem", md: "1.5rem" },
          textAlign: { xs: "center", md: "right" },
          mb: { xs: 3, md: 4 },
          pr: { xs: 0, md: 6 },
        }}
      >
        Building a Vibrant And Inclusive Art Community In Boston
      </Typography>

      <Box
        style={{
          marginTop: "1rem",
          backgroundImage: `url("https://res.cloudinary.com/dpguttfbn/image/upload/v1694991551/VICTORIA_22_1_zf3kof.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "25% 75%",
          padding: 0,
        }}
      >
        <Timeline timelineData={timelineData} />
      </Box>
    </Box>
  );
};

export default AboutUs;
