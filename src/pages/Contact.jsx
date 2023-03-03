import React from "react";



function Contact() {
  return (
    <div className="contact">
    <form>
      <textarea></textarea>
      <input type="text" placeholder="Enter Your Name"/>
<input type="text" placeholder="Enter Your Email"/>
<button >Send</button>
    </form>
    <div>  <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4350%20Kleppe+(Ahmad%20Alhaji%20Mustafa)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="600"
              height="450"
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
