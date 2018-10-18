import React, { Component } from 'react'
import { HOVER_STYLES } from '../common/config'
import { randomPick, addDeviceMotionHandler, removeDeviceMotionHandler } from '../common/util'
import '../styles/hover-min.css'

const HOVER_STYLES_LIST = HOVER_STYLES.split(',')
export default class ShuffleBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverClass: randomPick(HOVER_STYLES_LIST)
    }
  }
  clickHandler = () => {
    this.props.handleChange(1)
  }
  handleHover = () => {
    this.setState({ hoverClass: randomPick(HOVER_STYLES_LIST)})
  }
  render() {
    const status = this.props.status
    let btnClass = `shuffle-btn hvr-${this.state.hoverClass}`
    let btnText = ''
    switch (status) {
      case 0:
        btnClass += ' default'
        btnText = '摇一摇'
        break;
      case 1:
        btnClass += ' loading'
        btnText = '随机中'
        break
      case 2:
        btnClass += ' done'
        btnText = '再摇一次'
        break
      default: break
    }
    if (status !== 1) {
      removeDeviceMotionHandler()
      addDeviceMotionHandler(() => {
        this.clickHandler()
      })
    }
    return (
      <button
        className={btnClass}
        onMouseEnter={this.handleHover}
        onClick={this.clickHandler}
        disabled={status === 1}
      >
        {btnText}
      </button>
    )
  }
}
