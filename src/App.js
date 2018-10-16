import React, { Component } from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Content from './components/content'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.selections = []
    this.method = 0
    this.result = ''
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
