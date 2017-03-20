"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, hashHistory, IndexRoute } from "react-router";

class App extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
     
        {this.props.children}
      </div>
    );
  }
}


