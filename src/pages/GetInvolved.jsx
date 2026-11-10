import React from "react";
import Divider from "@mui/material/Divider";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Box } from "@mui/material";

const GetInvolved = ({ setShowNotTakingSubmissions, linksData }) => {
  const linksDataReversed = [...linksData].reverse();
  // console.log("linksData.reverse()", )
  return (
    <Box
      component="section"
      sx={{
        // backgroundColor: "#ff8b25",
        backgroundImage:
          'url("https://res.cloudinary.com/dpguttfbn/image/upload/v1695856023/Screen_Shot_2023-09-27_at_7.05.47_PM_bafnlq.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        pt: { xs: 4, md: 6 },
        pb: { xs: 6, md: 8 },
      }}
      id="/getInvolved"
      aria-labelledby="get-involved-heading"
    >
      <h2
        id="get-involved-heading"
        style={{
          padding: "0.75rem 1.25rem",
          margin: "0 1.25rem",
          width: "fit-content",
          display: "flex",
          alignItems: "center",
          color: "white",
          backgroundColor: "#161616",
        }}
      >
        Get Involved
      </h2>
      <Divider
        variant="middle"
        sx={{ backgroundColor: "white", height: ".1rem", margin: "0" }}
      />

      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <div style={{}}>
          <VerticalTimeline>
            {linksDataReversed.map(
              ({ link_title, link, link_color, link_description }, index) => {
                return link_description === "" ? (
                  <></>
                ) : (
                  <VerticalTimelineElement
                    key={link_color}
                    dateClassName="date"
                    iconStyle={{ background: "black" }}
                    icon={<div />}
                    // style={{ margin: "10vh 0vh" }}
                    contentStyle={{ boxShadow: " 0px 0px 20px 0px #a38a7d" }}
                    position={index % 2 !== 0 ? "right" : "left"}
                  >
                    <h3
                      style={{ fontWeight: "900" }}
                      className="vertical-timeline-element-title"
                    >
                      {link_title}
                    </h3>
                    <p id="description">{link_description}</p>
                    {link_title ===
                    "NOSA Artist of the Month Application 2024" ? (
                      <>
                        {/* <a target="_blank" href="#"> */}
                        <button
                          onClick={() => setShowNotTakingSubmissions(true)}
                          style={{
                            padding: "0.5rem",
                            width: "100%",
                            fontSize: "1.5rem",
                            color: "white",
                            marginTop: "1rem",
                            marginBottom: "-0.5rem",
                            display: "block",
                            backgroundColor: "#b33b00",
                          }}
                        >
                          Visual Artist
                        </button>

                        <button
                          style={{
                            padding: "0.5rem",
                            width: "100%",
                            fontSize: "1.5rem",
                            color: "white",
                            marginTop: "1rem",
                            marginBottom: "-0.5rem",
                            display: "block",
                            backgroundColor: "#b33b00",
                          }}
                          onClick={() => setShowNotTakingSubmissions(true)}
                        >
                          Musical Artist
                        </button>

                        <button
                          style={{
                            padding: "0.5rem",
                            width: "100%",
                            fontSize: "1.5rem",
                            color: "white",
                            marginTop: "1rem",
                            marginBottom: "-0.5rem",
                            display: "block",
                            backgroundColor: "#b33b00",
                          }}
                          onClick={() => setShowNotTakingSubmissions(true)}
                        >
                          Fashion Artist
                        </button>
                      </>
                    ) : (
                      // <a target="_blank" href={link}>
                      <button
                        style={{
                          padding: "0.5rem",
                          width: "100%",
                          fontSize: "1.5rem",
                          color: "white",
                          marginTop: "1rem",
                          marginBottom: "-0.5rem",
                          display: "block",
                          backgroundColor: "#b33b00",
                        }}
                        onClick={() => setShowNotTakingSubmissions(true)}
                      >
                        Go!
                      </button>
                      // </a>
                    )}
                  </VerticalTimelineElement>
                );
              }
            )}
          </VerticalTimeline>
        </div>
      </div>
    </Box>
  );
};

export default GetInvolved;
