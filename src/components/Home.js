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
            if(scrollPos+window.innerHeight - section.getBoundingClientRect().height>section.offsetTop-80 && scrollPos+window.innerHeight - section.getBoundingClientRect().height
            <= section.offsetTop-80 + section.getBoundingClientRect().height){
                if(index>0){
                    navLinks[index-1].style.backgroundColor = "#18BC9C";
                    if(navLinks[1].style.backgroundColor === navLinks[2].style.backgroundColor && navLinks[1].style.backgroundColor === "rgb(24, 188, 156)"){
                        navLinks[1].style.backgroundColor = originalColor;
                    }else if(navLinks[0].style.backgroundColor === navLinks[1].style.backgroundColor && navLinks[1].style.backgroundColor ==="rgb(24, 188, 156)"){
                        navLinks[1].style.backgroundColor = originalColor;
                    }
                }
            }else if(scrollPos+window.innerHeight - section.getBoundingClientRect().height<=section.offsetTop-80 || scrollPos+window.innerHeight - section.getBoundingClientRect().height
                > section.offsetTop-80 + section.getBoundingClientRect().height){
                if(index>0){
                    navLinks[index-1].style.backgroundColor = originalColor;
                }

            }
        });
    }

    handleHover(event){
        let main_title = event.target;
        let caption = main_title.childNodes[1];
        console.log(caption,main_title)
        if(event.type === "mouseenter"){
            let opacity = 0;
            function reveal(){
                if(opacity<1 && caption !== undefined){
                    opacity+=0.1;
                    caption.style.opacity = opacity;
                    requestAnimationFrame(reveal);
                }else{
                    return;
                }
            }
            reveal();
        }else if(event.type === "mouseleave"){
            let opacity = 1;
            function hide(){
                if(opacity>0 && caption !== undefined){
                    opacity-= 0.1;
                    caption.style.opacity = opacity;
                    requestAnimationFrame(hide);
                }else{
                    return;
                }
            }
            hide();
        }
    }

  render() {
      return (
      <div className="home_container" ref={thisNode=>this.node = thisNode}>
        <Header handleHover={this.handleHover.bind(this)}/>
          <Main {...this.props}/>
          <About />
          <Footer {...this.props}/>
      </div>
    );
  }
}

