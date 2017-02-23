/**
 * Created by Owner on 1/20/2017.
 */
import React from "react";
export const Footer = (props)=>{
    const {github,codepen,gmail,linkedin} = props.contact.link;
    const iconPath = props.contact.icon;
    const githubIcon = require("file-loader!../../public/assets/github.png");
    const linkedinIcon = require("file-loader!../../public/assets/linkedin.png");
    const gmailIcon = require("file-loader!../../public/assets/gmail.png");
    const codepenIcon = require("file-loader!../../public/assets/codepen.svg");

    return (
        <section className="footer">
        <a id="footer"></a>
            <div className="container">
                <div className="contact_info">
                    <h3>Contact me at <span>brooksdulla@gmail.com</span></h3>
                    <ul>
                        <li>
                            <a href={`mailto:${gmail}`}><img src={gmailIcon} /></a>
                        </li>
                        <li>
                            <a href={github}  target="_blank"><img src={githubIcon} /></a>
                        </li>
                        <li>
                            <a href={codepen}  target="_blank"><img src={codepenIcon} /></a>
                        </li>
                        <li>
                            <a href={linkedin}  target="_blank"><img src={linkedinIcon} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}