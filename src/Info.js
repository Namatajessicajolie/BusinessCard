import React from "react";
import profile from './images/profile.jpg'
import './info.css'
const linkedin = 'https://www.linkedin.com/in/jessica-namata-914798155/';


function Info(){
    return(
        <div className="info">
            <img src={profile} alt="profile"/>
            <h1>Jessica Namata</h1>
            <h3>FrontEnd Developer</h3>
            <div className="buttons">
                < button className = "email-btn" > < a href = "mailto:test@jnamata03@gmail.com?subject=Hello!" className="fa fa-envelope" > Email me! </a></button >
                < button className= "linkedin-btn"> <a href= {linkedin} className = "fa fa-linkedin" > Linkedin </a> </button >
            </div>
        </div>

    )
}

export default Info