import React, { Component } from 'react'

export default class About extends Component {

  render() {
    let {mode} = this.props;
    return (
      <div className={`container my-2 p-5 bg-${mode.status} text-${mode.textColor}`}>
        This is About Page
      </div>
    )
  }
}
