import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { makeStyles, useTheme } from "@mui/styles";

const useStyles = makeStyles({});

const Timeline = ({ timelineData }) => {
  const classes = useStyles();
  
  return (
    <div
      style={{
        backgroundImage: `url(
          "https://drive.google.com/file/d/1VdYvOqQePlsXbZs2Ck1M2yWqirgFc8RO/view?usp=sharing"
        )`,
        height: "120vh",
      }}
    >
      <VerticalTimeline>
        {timelineData.map((element) => {

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={{ background: "black",
              }}
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
              
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
