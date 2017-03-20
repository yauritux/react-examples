"use strict";

import React from "react";

export default class Archives extends React.Component {

  render() {
    console.log(this.props);
    const { params } = this.props;
    const { article } = params;
    const { query } = this.props.location;
    const { date, filter } = query;
    return (
      <div>
        <h1>Archives ({article})</h1>
        <h4>Date: {date}, Filter: {filter}</h4>
      </div>
    );
  }
}
