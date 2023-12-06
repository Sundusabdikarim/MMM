
import React from "react";
import blog1 from "../../assets/pexels-marek-kupiec-10132981.jpg";
import blog2 from "../../assets/pexels-işıl-13968194.jpg";
import blog3 from "../../assets/pexels-nikhil-soni-16114809.jpg";
import "./blogs.css";

const Bloggs = ()=>{
    return(
        <section id="Blogg">
            <h1>My Blogg</h1>
            <div className="blogbox">
                <div className="blogboxall">
                <img src={blog1}alt="" className="blogimg1"/>
                <div className="blogtxt">
                    <h2>Life Style</h2>
                    <p></p>
                </div>
                </div>
                <div className="blogboxall">
                <img src={blog2}alt="" className="blogimg2"/>
                </div>
                <div className="blogboxall">
                <img src={blog3} alt=""className="blogimg3"/>

            </div>
            </div>

        </section>
    )
}
export default Bloggs;