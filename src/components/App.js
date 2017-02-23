import React from "react";
import "../stylesheets/main.css";
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
              if(height < 160){
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
          let height = 160;
          function slideup(){
              if(height > 0){
                  if(height % 40 === 0 && height<=160) {
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

  smoothScroll(event){
      var smooth_scroll_to = function(element, target, duration) {
          target = Math.round(target);
          duration = Math.round(duration);
          if (duration < 0) {
              return Promise.reject("bad duration");
          }
          if (duration === 0) {
              element.scrollTop = target;
              return Promise.resolve();
          }

          var start_time = Date.now();
          var end_time = start_time + duration;

          var start_top = element.scrollTop;
          var distance = target - start_top;

          // based on http://en.wikipedia.org/wiki/Smoothstep
          var smooth_step = function(start, end, point) {
              if(point <= start) { return 0; }
              if(point >= end) { return 1; }
              var x = (point - start) / (end - start); // interpolation
              return x*x*(3 - 2*x);
          }

          return new Promise(function(resolve, reject) {
              // This is to keep track of where the element's scrollTop is
              // supposed to be, based on what we're doing
              var previous_top = element.scrollTop;

              // This is like a think function from a game loop
              var scroll_frame = function() {
                  if(element.scrollTop != previous_top) {
                      reject("interrupted");
                      return;
                  }

                  // set the scrollTop for this frame
                  var now = Date.now();
                  var point = smooth_step(start_time, end_time, now);
                  var frameTop = Math.round(start_top + (distance * point));
                  element.scrollTop = frameTop;

                  // check if we're done!
                  if(now >= end_time) {
                      resolve();
                      return;
                  }

                  // If we were supposed to scroll but didn't, then we
                  // probably hit the limit, so consider it done; not
                  // interrupted.
                  if(element.scrollTop === previous_top
                      && element.scrollTop !== frameTop) {
                      resolve();
                      return;
                  }
                  previous_top = element.scrollTop;

                  // schedule next frame for execution
                  setTimeout(scroll_frame, 0);
              }

              // boostrap the animation process
              setTimeout(scroll_frame, 0);
          });
      };
      let links = document.body.childNodes[1].childNodes[0].childNodes[1].childNodes;
      let projectsOffset = links[1].offsetTop; //80px is height of the fixed nav bar
      let aboutOffset = links[2].offsetTop;
      let footerOffset = links[3].offsetTop;
      if(event.target.className === "projects_link"){
          smooth_scroll_to(document.body,Math.min(projectsOffset),500);
      }else if(event.target.className === "about_link"){
          smooth_scroll_to(document.body,Math.min(aboutOffset),500);
      }else if(event.target.className === "footer_link"){
          smooth_scroll_to(document.body,Math.min(footerOffset),500);
      }else if(event.target.className="down_arrow"){
          smooth_scroll_to(document.body,Math.min(projectsOffset),500);
      }
  }

  // render
  render() {
      const resume = require("file-loader!../../public/assets/BrooksDulla_resume.pdf");
    return (
      <div className="app_container">
        <nav className="nav">
        <div className="nav_container">
          <div className="nav_title">Web Application Developer</div>
          <div className="nav_links">
            <span><a className = "projects_link" onClick={this.smoothScroll.bind(this)}>Projects</a></span>
            <span><a className= "about_link" onClick={this.smoothScroll.bind(this)}>About Me</a></span>
            <span><a className= "footer_link" onClick={this.smoothScroll.bind(this)}>Contact</a></span>
              <span><a className= "resume_link" href={resume} target="_blank">Resume</a></span>

          </div>
            <div className="mobile_menu" onClick={this.showMenu.bind(this)}>&#x2261;</div>
        </div>
            <div className="nav_mobile" ref="nav_mobile">
                <span><a className = "projects_link" onClick={this.smoothScroll.bind(this)}>Projects</a></span>
                <span><a className= "about_link" onClick={this.smoothScroll.bind(this)}>About Me</a></span>
                <span><a className= "footer_link" onClick={this.smoothScroll.bind(this)}>Contact</a></span>
                <span><a className= "resume_link" href={resume} target="_blank">Resume</a></span>
            </div>
        </nav>
          <Home {...this.state} smoothScroll = {this.smoothScroll.bind(this)}/>
      </div>
    );
  }
}
