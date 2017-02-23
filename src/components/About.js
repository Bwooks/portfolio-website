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
                I'm a Web Developer with a background in Computer Science passionate about developing web applications that tackle real-world problems and help users achieve their goals.
                Feel free to get in touch if you'd like to learn more or have a project in mind.
            </p>

                    <div className="about_skills">
                    <ul className="skills_core">
                        <li className="skills_title"><h3>Core <br/>Skillset</h3></li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>
                    <ul className="skills_working">
                        <li className="skills_title"><h3>Working<br/> Knowledge</h3></li>
                        <li>PHP</li>
                        <li>React.js</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                    </ul>
                    <ul className="skills_tools">
                        <li className="skills_title"><h3>Tools<br/><br/></h3></li>
                        <li>Git</li>
                        <li>Webpack</li>
                        <li>Photoshop</li>
                        <li>Sublime/Web Storm</li>
                    </ul>
                </div>
                    <div className="site_description">*Technologies used to develop this site: React.js, Node.js, HTML5, CSS3, Webpack, Photoshop and Git</div>
            </div>
            </div>

        </section>
    )
}

export default About;