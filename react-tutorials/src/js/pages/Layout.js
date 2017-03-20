"use strict";

import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  navigate() {
    console.log(this.props);
    //this.props.history.pushState(null, "/"); // preserve history
    //this.props.history.replace(null, "/"); // will delete history.
  }

  render() {
    const { history } = this.props;
    console.log(history.isActive("archives"));
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="archives" activeClassName="test" class="btn btn-danger">archives</Link>
        <Link to="settings"><button class="btn btn-success">settings</button></Link>
        <button class="btn btn-primary" onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }
}
