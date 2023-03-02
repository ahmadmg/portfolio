import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from '@mui/icons-material/Work';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import {aboutData} from '../data/aboutData'
function About() {
  return (
    <div>
      <VerticalTimeline lineColor="3e497a">
      {aboutData.map((about) => {
        return <VerticalTimelineElement date={about.date} icon={about.icon === "W" ? <WorkIcon/> : <CastForEducationIcon/> }> <h3>{about.title}</h3> <h4>{about.discrption}</h4></VerticalTimelineElement>

      })}
        
      </VerticalTimeline>
    </div>
  );
}

export default About;
