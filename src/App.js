import React, { Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import TagGroup from './components/tag-group'
import storage from './common/storage'
import ShuffleBtn from './components/shuffle-btn'
import Result from './components/result'
import { randomPick } from './common/util'
import './styles/App.scss'
import 'antd/dist/antd.min.css'

const SELECTIONS_KEY = 'SELECTIONS'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      status: 0,
      selections: storage.get(SELECTIONS_KEY) || [],
      randomMethod: 0,
      result: ''
    }
  }
  handleSelectionChange = (value) => {
    this.setState({ selections: value })
    storage.set(SELECTIONS_KEY, value)
  }
  handleStatusChange = (value) => {
    let { selections, result } = this.state
    switch (value) {
      case 0:
        result = ''
        break
      case 1:
        result = randomPick(selections)
        setTimeout(() => {
          this.setState({ status: 2, result })
        })
        break
      default: break
    }
    this.setState({ status: value })
  }
  switchStatus = (target) => {
    this.setState({ status: target})
  }
  render() {
    const { status, selections, result } = this.state
    let canShuffle = selections.length > 1 && status !== 1
    return (
      <div className="app">
        <Header />
        <TagGroup data={selections} handleChange={this.handleSelectionChange} statusChange={this.handleStatusChange}/>
        {canShuffle && (
          <ShuffleBtn status={status} handleChange={this.handleStatusChange}/>
        )}
        {/* {status === 2 && (
          <Loading data={selections}/>
        )} */}
        {status === 2 && (
          <Result data={result}/>
        )}
        <Footer />
      </div>
    )
  }
}

export default App
