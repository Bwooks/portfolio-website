/**
 * Created by Owner on 1/23/2017.
 */
import React from "react";
const About = (props) =>{
    return (
        <section className="about">
            <div className="container">
                <a id="about"></a>

                <h1>What I Do</h1>
                <div className="about_description">

            <p className="about_p1">
                I'm a Software Developer excited about creating software that makes the difficult and impossible things of the past, intuitive, easy and accessible to its users.
            </p>
                    <div className="about_skills">
                    <ul className="skills_core">
                        <li className="skills_title"><h3>Core <br/>Skillset</h3></li>
                        <li>Javascript</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>jQuery</li>
                    </ul>
                    <ul className="skills_working">
                        <li className="skills_title"><h3>Working<br/> Knowledge</h3></li>
                        <li>PHP</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                    </ul>
                    <ul className="skills_tools">
                        <li className="skills_title"><h3>Tools<br/><br/></h3></li>
                        <li>Git</li>
                        <li>Webpack</li>
                        <li>Photoshop</li>
                        <li>Webstorm/Sublime</li>
                    </ul>
                </div>
            </div>
            </div>

        </section>
    )
}

export default About;