/**
 * Created by Owner on 1/20/2017.
 */
import React,{Component} from "react";
export default class Single extends Component{
    render(){
        const live = this.props.project.live;
        const github = this.props.project.github;
        const src = require(`file-loader!../../public/assets/${this.props.project.name}.png`);
        return(
            <div className="single">
            <a id="projects"></a>
                <img className="single_img" src={src}/>
                <div className="single_overlay">
                    <div className="overlay_info">
                        <h2>{this.props.project.name}</h2>
                        <p className="overlay_description">{this.props.project.description}</p>
                        <div className="overlay_links">
                            <a className="overlay_demo" href={live} target="_blank">Live Demo</a>
                            <a className="overlay_github" href={github} target="_blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}