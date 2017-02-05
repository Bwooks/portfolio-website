/**
 * Created by Owner on 1/20/2017.
 */
import React,{Component} from "react";
export default class Single extends Component{
    render(){
        const src = require(`file-loader!../../public/assets/${this.props.project}.png`);
        return(
            <div className="single">
                <img className="single_img" src={src}/>
                <div className="single_overlay">
                    <div className="overlay_info">
                        <h2>Title</h2>
                        <p className="overlay_description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <div className="overlay_buttons">
                            <button className="overlay_demo">Live Demo</button>
                            <button className="overlay_github">Github</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}