/**
 * Created by Owner on 1/20/2017.
 */
import React from "react";
import Single from "./Single";
export const Projects = (props)=>{

return (
    <section className="projects">
        <div className="container">
        {props.show.map((project,index)=>{
            return <Single key={project} project={project} index={index}/>;
        })}
        </div>

    </section>
)

};