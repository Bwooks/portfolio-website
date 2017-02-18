import React from "react";
import "../stylesheets/main.scss";
import portfolio from "json-loader!../portfolio.json";
import Home from "./Home";
// app component
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = portfolio;
  }
/*
  effects(type,elem){
      if(type === "dropdown"){
          elem.style.bottom = "250px";
          let bottom = 250;
          let opacity = 0;
          function dropdown(){
              if(bottom > 0){
                  bottom-=2;
                  elem.style.bottom = bottom + "px";
                  requestAnimationFrame(dropdown);
              }
              if(opacity < 1){
                  opacity+=0.25;
                  elem.style.opacity = opacity+"";
                  requestAnimationFrame(dropdown);
              }
          }
          dropdown();

      }else if(type === "slideout"){
          let top = 0;
          let opacity = 1;
          elem.style.position = "absolute";
          function slideout(){
              if(top < 250){
                  top+=0.25;
                  elem.style.bottom = top + "px";
                  requestAnimationFrame(slideout);
              }
              if(opacity > 0){
                  opacity-=0.01;
                  elem.style.opacity = opacity+"";
                  requestAnimationFrame(slideout);
              }
              if(top === 250){
                  elem.style.display = "none";
              }
          }
          slideout();
      }
  }
  */

  showMenu(event){
      const mobile_links = event.target.parentElement.childNodes[1];
      if(mobile_links.style.display === "none" || !mobile_links.style.display){
          mobile_links.style.display = "flex";
          //this.effects("dropdown",mobile_links);
      }else{
          //this.effects("slideout",mobile_links);
          mobile_links.style.display = "none";
      }
  }

  // render
  render() {
    return (
      <div className="app_container">
        <nav className="nav">
        <div className="nav_container">
          <div className="nav_title">Web Application Developer</div>
          <div className="nav_links">
            <span><a href="#projects">Projects</a></span>
            <span><a href="#about">About Me</a></span>
            <span><a href="#footer">Contact</a></span>
          </div>
            <div className="nav_mobile">
                <div className="nav_mobile_container">
            <div className="mobile_menu" onClick={this.showMenu.bind(this)}>&#x2261;</div>
                <div className="mobile_links">
                    <span><a href="#projects">Projects</a></span>
                    <span><a href="#about">About Me</a></span>
                    <span><a href="#footer">Contact</a></span>
                </div>
                </div>
            </div>
        </div>
        </nav>
          <Home {...this.state}/>
      </div>
    );
  }
}
