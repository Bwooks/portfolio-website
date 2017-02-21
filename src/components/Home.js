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
            if(scrollPos+window.innerHeight - section.getBoundingClientRect().height+50>section.offsetTop && scrollPos+window.innerHeight - section.getBoundingClientRect().height
            <= section.offsetTop + section.getBoundingClientRect().height){
                if(index>0){
                    navLinks[index-1].style.backgroundColor = "#18BC9C";
                    if(navLinks[1].style.backgroundColor === navLinks[2].style.backgroundColor && navLinks[1].style.backgroundColor === "rgb(24, 188, 156)"){
                        navLinks[1].style.backgroundColor = originalColor;
                    }else if(navLinks[0].style.backgroundColor === navLinks[1].style.backgroundColor && navLinks[1].style.backgroundColor ==="rgb(24, 188, 156)"){
                        navLinks[1].style.backgroundColor = originalColor;
                    }
                }
            }else if(scrollPos+window.innerHeight - section.getBoundingClientRect().height<=section.offsetTop || scrollPos+window.innerHeight - section.getBoundingClientRect().height
                > section.offsetTop + section.getBoundingClientRect().height){
                if(index>0){
                    navLinks[index-1].style.backgroundColor = originalColor;
                }

            }
        });
    }

  render() {
      return (
      <div className="home_container" ref={thisNode=>this.node = thisNode}>
        <Header />
          <Main {...this.props}/>
          <About />
          <Footer {...this.props}/>
      </div>
    );
  }
}

