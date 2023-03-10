import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Typewriter from "typewriter-effect";
import { MdWork,
  MdOutlineCastForEducation
 } from "react-icons/md";
 import {FaGraduationCap} from "react-icons/fa"
import {aboutData} from '../data/aboutData'

function About() {
  return (
    <div style={{color:"#3c6e71" }}>
       <h1 style={{color:"#3c6e71" ,textAlign:"center"}}>
      <Typewriter 
  
  onInit={(typewriter)=> {

  typewriter

  .typeString("Facts About Me")
   
  .pauseFor(1000)
  .deleteAll()
  .typeString("Welcome 🙂 ")
  .start();
  }}
  /></h1>
      <VerticalTimeline lineColor="#284B6366">

      {aboutData.map((about) => {
        return <VerticalTimelineElement 
         contentStyle={{ background: "#ffffff66", color: '#284B63'  }}
         contentArrowStyle={{ borderRight: '7px solid  #ffffff66' }}
         iconStyle={{ background: "#284B63", color: "#F0DB4F48"  }} 
         date={about.date} icon={about.icon === "W" ? <MdWork/> : about.icon === "E" ? <FaGraduationCap /> : <MdOutlineCastForEducation />  }> 
         <h3 className="vertical-timeline-element-title">{about.title}</h3> 
         <h4>{about.discrption}</h4>
         </VerticalTimelineElement>

      }
      )
      }
        
      </VerticalTimeline>
      <h1 style={{color:"#3c6e71" ,textAlign:"center"}}>
      <Typewriter 
  
  onInit={(typewriter)=> {

  typewriter

  .typeString("Check my Linkedin for my CV")
   
  .pauseFor(1000)
  .deleteAll()
  .typeString("<==")
  .start();
  }}
  /></h1>
    </div>
  );
}

export default About;
