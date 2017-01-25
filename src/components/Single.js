/**
 * Created by Owner on 1/20/2017.
 */
import React,{Component} from "react";
export default class Single extends Component{
    render(){
        const src = require(`file-loader!../../public/assets/${this.props.project}.png`);
        const imgFirst = (
            <div className="single">
        <img src={src} width="100%" height="100%"/>
            </div>
        );
        return(
            imgFirst
        )
    }
}