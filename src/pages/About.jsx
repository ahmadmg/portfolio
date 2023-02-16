import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from '@mui/icons-material/Work';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
function About() {
  return (
    <div>
      <VerticalTimeline lineColor="3e497a">
      <VerticalTimelineElement date="2015-2020" icon={<SchoolIcon />}>
          <h3>Hello</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement date="2005-2014" icon={<CastForEducationIcon />}>
          <h3>Hello</h3>
          <h4>Work online or inline</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement date="2000-2005" icon={<WorkIcon />}>
          <h3>Hello</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement date="1999-2000" icon={<WorkIcon />}>
          <h3>Hello</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  );
}

export default About;
