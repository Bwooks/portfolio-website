/**
 * Created by Owner on 1/20/2017.
 */
import React from "react";

const Header  = (props)=>{

        return(
            <section className="header">
            <div className="container">
                <div className="group-wrapper">
                <img className="main_img" src="https://blackrockdigital.github.io/startbootstrap-freelancer/img/profile.png" width="185px" height="185px"/>
                <div className="main_title"><h1>Brooks Dulla</h1></div>
                </div>
            </div>
            </section>
        );
}

export default Header;