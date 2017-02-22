/**
 * Created by Owner on 1/20/2017.
 */
import React from "react";

const Header  = (props)=>{
    const resume = require("file-loader!../../public/assets/resume.pdf");
    return(
            <section className="header">
            <div className="container">
                <div className="main_title" onMouseEnter={props.handleHover} onMouseLeave={props.handleHover}>
                    <h1>Brooks Dulla &mdash; <br/>Frontend Developer <br/>Based in Toronto</h1>
                    <span className="reveal">Check out my  <a href={resume} target="_blank">resume</a> for more information!</span>
                </div>
                <div className="down_arrow"></div>
            </div>
            </section>
        );
}

export default Header;