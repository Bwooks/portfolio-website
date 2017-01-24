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
  // render
  render() {
    return (
      <div className="app_container">
        <div className="nav_bar">
          <div className="nav_title">Title</div>
          <div className="nav_links">
            <span>One</span>
            <span>Two</span>
            <span>Three</span>
          </div>
        </div>
          <Home {...this.state}/>
      </div>
    );
  }
}
