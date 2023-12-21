import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: {
        status: 'light',
        textColor: 'dark',
        btnColor: 'success'
      }
    }
  }
  toggleMode = (_status = 'light') => {
    this.setState({
      mode: {
        status: _status,
        textColor: _status === 'dark' ? 'light' : 'dark',
        btnColor: _status === 'dark' ? 'primary' : 'success'
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
        <News mode={this.state.mode} />
      </div>
    )
  }
}
