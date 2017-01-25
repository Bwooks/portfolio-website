/**
 * Created by Owner on 1/20/2017.
 */
import React,{Component} from "react";
export default class Single extends Component{
    render(){
        const src = require(`file-loader!../../public/assets/${this.props.project}.png`);
        const imgFirst = (
            <div className="single">
                <div className="single_wrapper">
                <img src={src} width="300px" height="300px" style={{position:"relative",left:"-50px"}}/>
        <p>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        );
        const imgSecond = (
            <div className="single">
                <div className="single_wrapper" >
                <p>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <img src={src} width="300px" height="300px" style={{position:"relative",right:"-50px"}}/>

                </div>
            </div>
        );
        return(this.props.index % 2 !== 0 ? imgFirst : imgSecond);
    }
}