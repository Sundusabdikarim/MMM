import React from "react";
import "./intro.css";
import bg from "../../assets/WhatsApp_Image_2023-09-06_at_22.32.18-removebg-preview.png";
import "animate.css"
const Intro = () => {
    return(
        <section id ="intro">
            <div className="introcontent">
                <span className="hello">Hi,</span> 
                <span className="introText">I'M <span className="introName">Sundus</span> <br/>Software Engineering</span>
                <p className="introPara">
i am considered a skilled software engineer also depends on other factors, such as my  technical proficiency, <br/>problem-solving abilities, code quality, and understanding of software engineering principles and best practices
</p>
            </div>
            <img src={bg} alt="profile" className="bg"/>
        </section>
    )
}
export default Intro;