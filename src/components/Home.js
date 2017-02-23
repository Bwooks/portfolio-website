import React from "react";
import Header from "./Header";
import {Footer} from "./Footer";
import Main from "./Main";
import About from "./About";
// Home page component
export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            projects:"",
            about:"",
            contact:""
        }
    }
    componentDidMount(){
        const navBar = this.node.parentNode.childNodes[0].childNodes[0];
        const navColor = window.getComputedStyle(navBar,null).getPropertyValue("background-color");
        this.setState({
            projects:navColor,
            about:navColor,
            contact:navColor
        });
        window.addEventListener("scroll",this.handleScroll.bind(this,this.node));
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.handleScroll);
    }
    handleScroll(homeDom){
        const navBar = homeDom.parentNode.childNodes[0].childNodes[0];
        const navLinks = navBar.childNodes[1].childNodes;
        const originalColor = window.getComputedStyle(navBar,null).getPropertyValue("background-color");
        const scrollPos = window.scrollY;
        homeDom.childNodes.forEach((section,index)=>{
            if(scrollPos >= section.offsetTop-80 && scrollPos < section.offsetTop + section.getBoundingClientRect().height-80){
                if(index>0){
                    navLinks[index-1].style.backgroundColor = "#18BC9C";
                }
            }else if(scrollPos < section.offsetTop-80 || scrollPos >= section.offsetTop + section.getBoundingClientRect().height-80){
                if(index>0){
                    navLinks[index-1].style.backgroundColor = originalColor;
                }
            }
            if(scrollPos+window.innerHeight+80>= document.body.getBoundingClientRect().height){
                if(index>0){
                    if(navLinks[0].style.backgroundColor === "rgb(24, 188, 156)"||navLinks[1].style.backgroundColor === "rgb(24, 188, 156)"){
                        navLinks[0].style.backgroundColor = originalColor;
                        navLinks[1].style.backgroundColor = originalColor;
                    }
                    navLinks[1].style.backgroundColor = originalColor;
                    navLinks[2].style.backgroundColor = "#18BC9C";

                }
            }
        });
    }

    handleHover(event){
        let main_title = event.target;
        let caption = main_title.childNodes[1];
        if(caption.style == null){
            caption = caption.parentNode.parentNode.childNodes[1];
        }
        if(event.type === "mouseenter"){
            let opacity = 0;
            function reveal(){
                if(opacity<1){
                    opacity+=0.1;
                    caption.style.opacity = opacity;
                    requestAnimationFrame(reveal);
                }
            }
            reveal();
        }else if(event.type === "mouseleave"){
            let opacity = 1;
            function hide(){
                if(opacity>0){
                    opacity-= 0.1;
                    caption.style.opacity = opacity;
                    requestAnimationFrame(hide);
                }
            }
            hide();
        }
    }

  render() {
      return (
      <div className="home_container" ref={thisNode=>this.node = thisNode}>
        <Header handleHover={this.handleHover.bind(this)} handleScroll={this.props.smoothScroll.bind(this)}/>
          <Main {...this.props}/>
          <About />
          <Footer {...this.props}/>
      </div>
    );
  }
}

