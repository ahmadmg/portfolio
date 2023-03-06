import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/Contact.css"

function Contact() {
  return (
    <div className="contact">
    <div className="form">
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
      <div>
      <form> 
        <ul>
      
      <li> <input type="text" name="name"  placeholder="Name" required/></li>
      <li><input type="email" name="email"  placeholder="Email" required/></li>
      <li><input type="text" name="subject"  placeholder="Subject" required/></li>
      <li><textarea placeholder="Message" name="message" required></textarea></li>
      <li><input type="submit" value="SEND" className="send-btn" /></li>
</ul> </form>
</div>
</div>



    <div>  <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4350%20Kleppe+(Ahmad%20Alhaji%20Mustafa)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
             
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
     </div> 
</div>
  );
}

export default Contact;
