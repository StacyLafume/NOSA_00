import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { makeStyles, useTheme } from "@mui/styles";

const useStyles = makeStyles({});

const Timeline = () => {
  const classes = useStyles();
  let workIconStyles = { background: "#ff8b25" };
  let schoolIconStyles = { background: "#ff8b25" };

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(331deg,rgb(255 255 255) 50%, rgb(247, 107, 28) 0%)",
        height: "120vh",
      }}
    >
      <VerticalTimeline 
>
        {[
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
        ].map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={<div />}
              style={{ margin: "0 rem" }}
              contentStyle={{ boxShadow: " 0px 0px 20px 0px #a38a7d" }}
              
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
