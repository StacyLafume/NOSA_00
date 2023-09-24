import React from "react";
import Divider from "@mui/material/Divider";
import Timeline from "../components/Timeline";

const ApplyNow = () => {
    const timelineData = [{
        id: 1,
        title: "Who We Are",
        description:
          "NOSA: Nubian Open Studios for the Arts, Connecting Community Through Creatives and Commerce. What sets NOSA apart is our focus on community and collaboration. ",
  
        date: "",
        icon: "",
      },]
  return (
    <div id="/applyNow">
      <h1
        style={{
          paddingLeft: "6.1rem",
          height: "3.8rem",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        Apply Now
      </h1>
      <Divider
        variant="middle"
        sx={{ backgroundColor: "#ff8b25", height: ".2rem", margin: "0" }}
      />
   
      <div
        style={{
          marginTop: "1rem",
          height: "116vh",
        }}
      >
        <Timeline timelineData={timelineData}/>
      </div>
    </div>
  );
};

export default ApplyNow;
