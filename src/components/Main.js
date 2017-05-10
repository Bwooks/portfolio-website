/**
 * Created by Owner on 1/20/2017.
 */
import React,{Component} from "react"
import {Projects} from "./Projects";
export default class Main extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        console.log(this.props.projects);
        return (
                <Projects show={this.props.show} projects={this.props.projects}/>
        )
    }
}