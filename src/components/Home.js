import React from "react";
import Header from "./Header";
import {Footer} from "./Footer";
import Main from "./Main";
import About from "./About";
// Home page component
export default class Home extends React.Component {

  render() {
      return (
      <div className="home_container">
        <Header />
          <Main {...this.props}/>
          <About />
          <Footer {...this.props}/>
      </div>
    );
  }
}

