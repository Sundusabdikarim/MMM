import React from "react";
import "./contact.css";
import github from "../../assets/github (3).png"
import instagram from "../../assets/instagram-removebg-preview.png"
import inkeden from "../../assets/linkedin-removebg-preview.png"

const Contact =()=>{
    return(
  <section id="Contact">
    <h1> Contact Me</h1>
    <div className="all">
    <div className="Links">
    <img src={github} alt="profile" className="b"/>
    <img src={instagram} alt="profile" className="b"/>
    <img src={inkeden} alt="profile" className="b"/>
    </div>
    <div className="Box">
    <form className="contactForm">
        <input type="text" className="name" placeholder="Your Name"/>
        <input type="text" className="email" placeholder="Your Email"/>
        <textarea className="msg" name="message" rows="5"placeholder="Your message"></textarea>
        <button type="submit" value="Send" className="submitBtn">Submit</button>
    </form>
    </div>
    </div>
  </section>
    )
}
export default  Contact;