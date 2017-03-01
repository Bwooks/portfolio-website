/**
 * Created by Owner on 1/20/2017.
 */
import React,{Component} from "react";
export default class Single extends Component{
    render(){
        const live = this.props.project.live;
        const code = this.props.project.github || this.props.project.codepen;
        const src = require(`file-loader!../../public/assets/${this.props.project.name}.png`);
            const fullDescription = this.props.project.description.reduce((partA,partB)=>{
                return partA + "\n" + partB;
        });
        return(
            <div className="single">
            <a id="projects"></a>
                <img className="single_img" src={src}/>
                <div className={`single_overlay ${this.props.project.name}_overlay`}>
                    <div className="overlay_info">
                        <h2>{this.props.project.name}</h2>
                        <p className="overlay_description">{fullDescription}</p>
                        <div className="overlay_links">
                            <a className="overlay_demo" href={code} target="_blank">Live Demo</a>
                            <a className={`overlay_code ${typeof code === "undefined" ? "private": "show"}`} href={code} target="_blank">{
                                /codepen/.test(code) ? "Codepen" : "Github"
                            }
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}