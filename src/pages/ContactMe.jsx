import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Typewriter from "typewriter-effect";
import "../styles/ContactMe.css";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs.sendForm('service_ddhg98d', 'template_td2t9fl', form.current, "ehvHq2-YHopGWmPbQ")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

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
.typeString("Feel free to contact me")
.start();
}}
/></h1>

  </div>

   <form className='form' ref={form} onSubmit={sendEmail}>
      <input type="text"   name="user_name"  className='in-item'  placeholder='Name'  required/>
      <input type="email"  name="user_email" className='in-item'  placeholder='Email' required />
      <textarea            name="message"  placeholder='Write your message here!' className='in-item' required/>
      <input type="submit" value="Send"      className='send-btn'  />
   </form>
</div>
   
  );
};

export default ContactMe;
