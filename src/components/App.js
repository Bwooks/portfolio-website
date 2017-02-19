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

  effects(type,elem){
      let links = elem.childNodes;
      if(type === "dropdown"){
          let childIndex = 0;
          let height = 0;
          elem.style.display = "block";
          function dropdown(){
              if(height < 120){
                  height+=4;
                  elem.style.height = height + "px";
                  if(height % 40 === 0 && height > 0){
                      links[childIndex].style.display = "block";
                      childIndex++;
                  }
                  requestAnimationFrame(dropdown);
              }
          }
          dropdown();
      }else if(type === "slideup"){
          let childIndex = links.length - 1;
          let height = 120;
          function slideup(){
              if(height > 0){
                  if(height % 40 === 0 && height<=120) {
                      links[childIndex].style.display = "none";
                      childIndex--;
                  }
                  height-=4;
                  elem.style.height = height + "px";
                  if(height === 0){
                      elem.style.display = "none";
                  }
                  requestAnimationFrame(slideup);
              }
          }
          slideup();
      }
  }
  showMenu(event){
      const mobile_links = this.refs.nav_mobile;
      if(mobile_links.clientHeight === 0){
          this.effects("dropdown",mobile_links);
      }else{
          this.effects("slideup",mobile_links);
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
            <div className="mobile_menu" onClick={this.showMenu.bind(this)}>&#x2261;</div>
        </div>
            <div className="nav_mobile" ref="nav_mobile">
                        <span><a href="#projects">Projects</a></span>
                        <span><a href="#about">About Me</a></span>
                        <span><a href="#footer">Contact</a></span>
                    </div>
        </nav>
          <Home {...this.state}/>
      </div>
    );
  }
}
