import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import {
  // Link used in Navbar.js
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

// Top Loading Bar for Scroll
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  apiKey= process.env.REACT_APP_NEWS_API1
  state = {
    mode: {
      status: 'light',
      textColor: 'dark',
      btnColor: 'success'
    },
    location: {
      language: 'English',
      country: 'India'
    },
    loadingBarProgress: 0
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
  toggleLanguage = (_location = { language: 'English', country: 'India' }) => {
    console.log('Set Language & Location [App]: ', _location);
    this.setState({ location: _location });
  }

  setLoadingBarProgress = (_progress) => {
    this.setState({ loadingBarProgress: _progress })
  }

  render() {
    let { country, language } = this.state.location;
    return (
      <>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} toggleLanguage={this.toggleLanguage} />
          <LoadingBar color='#f11946' height={4} progress={this.state.loadingBarProgress} />
          <div className="container">
            <Routes>
              {/* Key is required to Remount same Component for different route */}
              <Route exact path="/" element={<News setProgress={this.setLoadingBarProgress} apiKey={this.apiKey} key={`general_${country}_${language}`} mode={this.state.mode} category="general" country={country} lang={language} />} />
              <Route exact path="/business" element={<News setProgress={this.setLoadingBarProgress} apiKey={this.apiKey} key={`business_${country}_${language}`} mode={this.state.mode} category={"business"} country={country} lang={language} />} />
              <Route exact path="/entertainment" element={<News setProgress={this.setLoadingBarProgress} apiKey={this.apiKey} key={`entertainment_${country}_${language}`} mode={this.state.mode} category="entertainment" country={country} lang={language} />} />
              <Route exact path="/health" element={<News setProgress={this.setLoadingBarProgress} apiKey={this.apiKey} key={`health_${country}_${language}`} mode={this.state.mode} category={"health"} country={country} lang={language} />} />
              <Route exact path="/science" element={<News setProgress={this.setLoadingBarProgress} apiKey={this.apiKey} key={`science_${country}_${language}`} mode={this.state.mode} category={"science"} country={country} lang={language} />} />
              <Route exact path="/sports" element={<News setProgress={this.setLoadingBarProgress} apiKey={this.apiKey} key={`sports_${country}_${language}`} mode={this.state.mode} category={"sports"} country={country} lang={language} />} />
              <Route exact path="/technology" element={<News setProgress={this.setLoadingBarProgress} apiKey={this.apiKey} key={`technology_${country}_${language}`} mode={this.state.mode} category={"technology"} country={country} lang={language} />} />

              <Route exact path="/about" element={<About mode={this.state.mode} />} />
            </Routes>
          </div>
          {/* <News mode={this.state.mode} /> */}
        </Router>
      </>
    )
  }
}
