import React from "react";
import "./works.css";
import goindia from "../../assets/6066544-removebg-preview.png";
import ewallet from "../../assets/6134225-removebg-preview.png";
import bayan from "../../assets/881_business_people_website.jpg";
import luul from "../../assets/15555-removebg-preview.png";


const Work =()=>{
    return(
       <section id="works">
        <h1 className="Text">My projects</h1>
        <div className="projects">
            <div className="project">
                <img src={goindia}alt="" className="projectImg1"/>
                <div className="projectText">
                    <h2>GO India Health</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur elementum. Ut quis mi lorem. Nunc elit dolor, rhoncus quis sapien in, porttitor consectetur tellus. Aliquam placerat sapien dolor, vitae suscipit massa imperdiet ac. Integer sed enim quis enim pulvinar faucibus. Aliquam ante est, venenatis id ultrices sit amet, rhoncus et ur. </p>
                     </div>
                      </div>
                      <div className="project"> 
                      <img src={ewallet}alt="" className="projectImg2"/>
                <div className="projectText">
                    <h2>Digital Wallet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur elementum. Ut quis mi lorem. Nunc elit dolor, rhoncus quis sapien in, porttitor consectetur tellus. Aliquam placerat sapien dolor, vitae suscipit massa imperdiet ac. Integer sed enim quis enim pulvinar faucibus. Aliquam ante est, venenatis id ultrices sit amet, rhoncus et urna.</p>
                     </div>
                      </div>
                      <div className="project">
                      <img src={bayan}alt="" className="projectImg3"/>
                <div className="projectText">
                    <h2>Bayan Software Company</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur elementum. Ut quis mi lorem. Nunc elit dolor, rhoncus quis sapien in, porttitor consectetur tellus. Aliquam placerat sapien dolor, vitae suscipit massa imperdiet ac. Integer sed enim quis enim pulvinar faucibus. Aliquam ante est, venenatis id ultrices sit amet, rhoncus et urna.</p>
                     </div>

                      </div>
                      <div className="project">
                      <img src={luul}alt="" className="projectImg4"/>
                <div className="projectText">
                    <h2>luul company</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur elementum. Ut quis mi lorem. Nunc elit dolor, rhoncus quis sapien in, porttitor consectetur tellus. Aliquam placerat sapien dolor, vitae suscipit massa imperdiet ac. Integer sed enim quis enim pulvinar faucibus. Aliquam ante est, venenatis id ultrices sit amet, rhoncus et urna.</p>
                     </div>
                      </div>
                      
             </div>

       </section>
    )
        
    
}
export default Work;