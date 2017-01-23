/**
 * Created by Owner on 1/20/2017.
 */
import React,{Component} from "react";

export default class Single extends Component{
    render(){
        return(
            <div>
                {this.props.project}
            </div>
        )
    }
}