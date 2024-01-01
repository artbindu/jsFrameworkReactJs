import './App.css';
import React, { useState } from 'react'
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

function App() {
  const apiKey = process.env.REACT_APP_NEWS_API1;
  const [mode, setMode] = useState({
    status: 'light',
    textColor: 'dark',
    btnColor: 'success'
  });
  const [location, setLocation] = useState({
    language: 'English',
    country: 'India'
  });
  const [loadingBarProgress, setLoadingBarProgress] = useState(0);

  const toggleMode = (_status = 'light') => {
    setMode({
      status: _status,
      textColor: _status === 'dark' ? 'light' : 'dark',
      btnColor: _status === 'dark' ? 'primary' : 'success'
    });
  }
  const toggleLanguage = (_location = { language: 'English', country: 'India' }) => {
    console.log('Set Language & Location [App]: ', _location);
    setLocation(_location);
  }

  const updateLoadingBarProgress = (_progress) => {
    setLoadingBarProgress(_progress);
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} toggleLanguage={toggleLanguage} />
        <LoadingBar color='#f11946' height={4} progress={loadingBarProgress} />
        <div className="container">
          <Routes>
            {/* Key is required to Remount same Component for different route */}
            <Route exact path="/" element={<News setProgress={updateLoadingBarProgress} apiKey={apiKey} key={`general_${location.country}_${location.language}`} mode={mode} category="general" country={location.country} lang={location.language} />} />
            <Route exact path="/business" element={<News setProgress={updateLoadingBarProgress} apiKey={apiKey} key={`business_${location.country}_${location.language}`} mode={mode} category={"business"} country={location.country} lang={location.language} />} />
            <Route exact path="/entertainment" element={<News setProgress={updateLoadingBarProgress} apiKey={apiKey} key={`entertainment_${location.country}_${location.language}`} mode={mode} category="entertainment" country={location.country} lang={location.language} />} />
            <Route exact path="/health" element={<News setProgress={updateLoadingBarProgress} apiKey={apiKey} key={`health_${location.country}_${location.language}`} mode={mode} category={"health"} country={location.country} lang={location.language} />} />
            <Route exact path="/science" element={<News setProgress={updateLoadingBarProgress} apiKey={apiKey} key={`science_${location.country}_${location.language}`} mode={mode} category={"science"} country={location.country} lang={location.language} />} />
            <Route exact path="/sports" element={<News setProgress={updateLoadingBarProgress} apiKey={apiKey} key={`sports_${location.country}_${location.language}`} mode={mode} category={"sports"} country={location.country} lang={location.language} />} />
            <Route exact path="/technology" element={<News setProgress={updateLoadingBarProgress} apiKey={apiKey} key={`technology_${location.country}_${location.language}`} mode={mode} category={"technology"} country={location.country} lang={location.language} />} />

            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
        {/* <News mode={mode} /> */}
      </Router>
    </>
  )
}

export default App
