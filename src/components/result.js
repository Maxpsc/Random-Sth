import React, { Component } from 'react'
export default class Result extends Component {
  render() {
    return (
      <div className="result">
        <div className="result-text">结果是~ <span>{this.props.data}</span></div>
      </div>
    )
  }
}
