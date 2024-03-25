import Proj1 from "../assets/Stavanger.jpg";
import Proj2 from "../assets/SolarSystem.jpg";
import Drumkit from "../assets/DrumKit.jpg";
import Portfolio from "../assets/portfolio.jpg";
import dog from "../assets/dog.jpg"
import newtab from "../assets/newtab.jpg"
import picstore from "../assets/picstore.jpg"
import typingspeed from "../assets/typingspeed.jpg"

export const ProjectList = [
  { name:"Pic Store",
image:picstore,
skills:["SiReact","SiCss3","SiHtml5","TbApi"],
code:"https://github.com/ahmadmg/pic-store",
preview:"https://picstore2023.netlify.app/"
}, 
{ name:"typingspeedometer",
image:typingspeed,
skills:["SiReact","SiCss3","SiHtml5","TbApi"],
code:"https://github.com/ahmadmg/Typing-Speedometer-App",
preview:"https://typingspeedometer.netlify.app/"
},
   { name:"NewTab xtension",
    image:newtab,
    skills:["SiJavascript","SiHtml5","SiCss3","TbApi"],
    code:"https://github.com/ahmadmg/chrome-extension",
    preview:"https://chrome.google.com/webstore/detail/new-tab/gbogghhnfnkdaepieedpdllamamlcpkd"
  },
  {
    name:"Stavanger",
    image:Proj1,
    skills:["SiHtml5","SiCss3"],
    code:"https://github.com/ahmadmg/Parallax-Website-Stavanger",
    preview:"https://ahmadmg.github.io/Parallax-Website-Stavanger/"
  },{
    name:"Portfolio",
    image:Portfolio,
    skills:["SiReact","SiHtml5","SiCss3"], 
    code:"https://github.com/ahmadmg/portfolio",
    preview:"https://ahmadmg.github.io/portfolio/"
  },{
    name:"Random Dog Img API",
    image:dog,
    skills:["SiReact","SiHtml5","SiCss3","TbApi"], 
    code:"https://github.com/ahmadmg/randomdogimgapi",
    preview:"https://ahmadmg.github.io/randomdogimgapi/"
  },{
    name:"Drumkit",
    image: Drumkit,
    skills: ["SiJavascript","SiHtml5","SiCss3"],
	 code:"https://github.com/ahmadmg/DrumKit",
    preview:"https://ahmadmg.github.io/DrumKit/"
  },{
    name:"Solar System",
    image:Proj2,
    skills:["SiJavascript","SiHtml5","SiCss3"], 
    code:"https://github.com/ahmadmg/GrupperA3SolSystem",
    preview:"https://ahmadmg.github.io/GrupperA3SolSystem/"
  },
]
