import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/Contact.css"

function Contact() {
  return (
    <div className="contact">
    
      <div className="my-text">
        <h1>
      <Typewriter
  
  onInit={(typewriter)=> {

  typewriter

  .typeString("Nice to See you in this page")
   
  .pauseFor(1000)
  .deleteAll()
  .typeString("Fell free to conatct me")
  .start();
  }}
  /></h1>
  <p>I am intertsted in a work opputiont or intershep</p>
      </div>
     
      <form> 

      
       <input type="text" name="name"  placeholder="Name" required/>
      <input type="email" name="email"  placeholder="Email" required/>
      <input type="text" name="subject"  placeholder="Subject" required/>
      <textarea placeholder="Message" name="message" required></textarea>
      <input type="submit" value="SEND" className="send-btn" />
 </form>


 
</div>
  );
}

export default Contact;
