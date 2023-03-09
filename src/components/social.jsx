
import React ,{useState}from "react";
import { SiLinkedin,SiGithub } from "react-icons/si";
import {BsGripVertical} from "react-icons/bs"
import "../App.css";

function SocialMedia() {
  const [expandSocial,setExpandSocial]=useState(false)
  return (
  
    <div className="social-container" onMouseLeave={()=>setExpandSocial(false)} >
      
    <div className="socialMedia" id={expandSocial? "expanded":"collapsed"}>
    <a href="https://www.linkedin.com/in/ahmadmg/" aria-label="My LinkedIN"><SiLinkedin  title="LinkedIn" className="side-icon"/></a>
    <a href="https://github.com/ahmadmg" aria-label="My GITHUB"><SiGithub title="GITHUB"  className="side-icon"/> </a>
    </div>
    <button
        onMouseOver={()=>setExpandSocial(true)}
          onClick={() => {
            setExpandSocial((prev) => !prev);
          }}
         name="Menu"
         className="vertical">
        <BsGripVertical title="Follow Me"/>
        </button>
    </div>
    
  );
}

export default SocialMedia;