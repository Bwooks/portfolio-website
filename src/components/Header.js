/**
 * Created by Owner on 1/20/2017.
 */
import React from "react";

const Header  = (props)=>{
    const resume = require("file-loader?name=[name].[ext]!../../public/assets/BrooksDulla_resume.pdf");
    return(
        <section className="header">
            <div className="container">
                <div className="main_title" onMouseEnter={props.handleHover} onMouseLeave={props.handleHover}>
                    <h1><span>Brooks Dulla</span><br/>Frontend Developer <br/>Based in Toronto</h1>
                </div>
            </div>
        </section>
    );
}

export default Header;