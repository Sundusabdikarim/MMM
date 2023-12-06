import React from "react";
import "./skills.css";
import ui from "../../assets/interface_3941407.png";
import digital from '../../assets/advertising_2694761.png'
import web from "../../assets/web-development_3668557.png";
import mobile from "../../assets/mobile-app_1055668.png";

const Skills= () =>{
    return(
        <section id="skills">
            <span className="skillTitle" >What I do</span>
            
            <div className="skillsBars">
                <div className="skillBar">
                    <img src={ ui} alt=" ui"className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur elementum. Ut quis mi lorem. Nunc elit dolor, rhoncus quis sapien in, porttitor consectetur tellus. Aliquam placerat sapien dolor,</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ web } alt="digital"className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur elementum. Ut quis mi lorem. Nunc elit dolor, rhoncus quis sapien in, porttitor consectetur tellus. Aliquam placerat sapien dolor,</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={ mobile} alt=""className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>mobile Applications</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur elementum. Ut quis mi lorem. Nunc elit dolor, rhoncus quis sapien in, porttitor consectetur tellus. Aliquam placerat sapien dolor, vitae suscipit massa imperdiet ac.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={digital} alt=""className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Degital Merketting</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur elementum. Ut quis mi lorem. Nunc elit dolor, rhoncus quis sapien in, porttitor consectetur tellus. Aliquam placerat sapien dolor, vitae suscipit massa imperdiet ac.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={mobile} alt=""className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>WordPress</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada efficitur elementum. Ut quis mi lorem. Nunc elit dolor, rhoncus quis sapien in, porttitor consectetur tellus. Aliquam placerat sapien dolor, vitae suscipit massa imperdiet ac.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={mobile} alt="CEO"className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>IU/UX</h2>
                        <p>gjkhkjhikerh4ekuytiue4ytiu5ryiturt89oy5r <br/>jeghfyujegru4t</p>
                    </div>
                </div>
            </div>
        </section>
    );

}
export default Skills;