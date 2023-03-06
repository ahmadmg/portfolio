import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Typewriter from "typewriter-effect";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from '@mui/icons-material/Work';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import {aboutData} from '../data/aboutData'
function About() {
  return (
    <div style={{color:"#3c6e71" }}>
       <h1 style={{color:"#3c6e71" ,textAlign:"center"}}>
      <Typewriter 
  
  onInit={(typewriter)=> {

  typewriter

  .typeString("You are welcome to know more about me")
   
  .pauseFor(1000)
  .deleteAll()
  .typeString("Welcome! ")
  .start();
  }}
  /></h1>
      <VerticalTimeline lineColor="#3c6e71">
      {aboutData.map((about) => {
        return <VerticalTimelineElement  iconStyle={{ background: "#284B63", color: "#fff" }} date={about.date} icon={about.icon === "W" ? <WorkIcon/> : <CastForEducationIcon/> }> <h3>{about.title}</h3> <h4>{about.discrption}</h4></VerticalTimelineElement>

      })}
        
      </VerticalTimeline>
    </div>
  );
}

export default About;
