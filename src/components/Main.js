/**
 * Created by Owner on 1/20/2017.
 */
import React,{Component} from "react"
import {Projects} from "./Projects";
export default class Main extends Component{
    constructor(props) {
        super(props);

    }

    next(){

    }

    prev(){

    }
    render(){
        return (
            <div className="main_container">
                <h2 className="projects_title">TITLE</h2>
                <Projects show={this.props.show}/>
            </div>
        )
    }
}