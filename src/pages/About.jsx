import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
function About() {
  return (
    <div>
      <VerticalTimeline lineColor="3e497a">
        <VerticalTimelineElement date="2005-2014" icon={<SchoolIcon />}>
          <h3>Hello</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default About;
