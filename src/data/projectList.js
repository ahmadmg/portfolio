import Proj1 from "../assets/Stavanger.jpg";
import Proj2 from "../assets/SolarSystem.jpg";
import Drumkit from "../assets/DrumKit.jpg";
import Portfolio from "../assets/Portfolio.jpg";
import dog from "../assets/dog.jpg"


export const ProjectList = [
  {
    name:"Stavanger",
    image:Proj1,
    skills:["SiHtml5","SiCss3"],
    code:"https://github.com/ahmadmg/Parallax-Website-Stavanger",
    preview:"https://ahmadmg.github.io/Parallax-Website-Stavanger/"
  },{
    name:"Portfolio",
    image:Portfolio,
    skills:["SiHtml5","SiCss3","SiReact"], 
    code:"https://github.com/ahmadmg/portfolio",
    preview:"https://ahmadmg.github.io/portfolio/"
  },{
    name:"Random Dog Img API",
    image:dog,
    skills:["SiHtml5","SiCss3","SiReact","TbApi"], 
    code:"https://github.com/ahmadmg/randomdogimgapi",
    preview:"https://ahmadmg.github.io/randomdogimgapi/"
  },{
    name:"Drumkit",
    image: Drumkit,
    skills: ["SiHtml5","SiCss3","SiJavascript"],
	 code:"https://github.com/ahmadmg/DrumKit",
    preview:"https://ahmadmg.github.io/DrumKit/"
  },{
    name:"Solar System",
    image:Proj2,
    skills:["SiHtml5","SiCss3","SiJavascript"], 
    code:"https://github.com/ahmadmg/GrupperA3SolSystem",
    preview:"https://ahmadmg.github.io/GrupperA3SolSystem/"
  },
]
