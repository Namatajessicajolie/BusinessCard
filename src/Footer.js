import React from "react";
import './footer.css'
const facebook = "https://m.facebook.com/namata.jessica";
const tweeter = 'https://twitter.com/Jessica3namata';

function Footer(){
    return(
        <div className="footer">
            < a href = {facebook}
            className = "fa fa-facebook" title = "connect on facebook" target='_blank'> </a> 
            <a href = {tweeter} className = "fa fa-twitter" target='_blank'
            title = "let's tweet!" > </a>
        </div>
    )
}
export default Footer