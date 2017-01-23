/**
 * Created by Owner on 1/20/2017.
 */
import React,{Component} from "react"
import {Projects} from "./Projects";
import About from "./About";
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
            <div className="main">
                <button className="prev" onClick={()=>this.prev()}>Prev</button>
                <Projects show={this.props.show}/>
                <button className="next" onClick={()=>this.next()}>Next</button>
                <About />
            </div>
        )
    }
}