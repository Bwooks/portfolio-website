/**
 * Created by Owner on 1/20/2017.
 */
import React,{Component} from "react";
export default class Single extends Component{
    render(){
        const src = require(`file-loader!../../public/assets/${this.props.project}.png`);
        const imgFirst = (
            <div className="single">
        <img src={src} width="300px" height="300px"/>
            </div>
        );
        const imgSecond = (
            <div className="single">
                <img src={src} width="300px" height="300px"/>
                <p>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        );
        return(
            imgFirst
        )
    }
}