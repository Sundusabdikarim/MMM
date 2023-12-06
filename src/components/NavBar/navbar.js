import React from "react";
import contactImage from "../../assets/3095583.png";
import profileimg from "../../assets/WhatsApp_Image_2023-09-06_at_22.32.18-removebg-preview.png";

import "./navbar.css";
import {Link} from "react-scroll";
const Navbar = () => {
    return(
        <nav className="navbar">
            <img src={profileimg}alt=""className="profileImg"/>
            <div className="desktopMenu">
                <Link activeClass= "active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass= "active" to="skills" spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={50} duration={500}    className="desktopMenuListItem">projects</Link>
                <Link activeClass="active" to="Blogg" spy={true} smooth={true} offset={-200} duration={500}   className="desktopMenuListItem">Blog</Link>

            </div>
          
                
           
            <button className="desktopMenuBtn" onClick ={()=>{
                document.getElementById("Contact").scrollIntoView({behavior:"smooth"})
            }

            }>
                <img src= {contactImage} alt="" className="desktopMenuImg"/>contact Me </button> 
               
        </nav>
    )
}
export default Navbar;