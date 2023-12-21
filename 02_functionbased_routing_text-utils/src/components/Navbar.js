import React from 'react';
import PropTypes from 'prop-types';
import {
    // Router, Routes, Route used in App.js
    // BrowserRouter as Router,
    // Routes,
    // Route,
    Link
} from "react-router-dom";

export default function Navbar(props) {
    const colorBoxStyle = {
        height: '30px',
        width: '30px',
        cursor: 'pointer'
    };
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">{props.homeText}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
                {/* <div className="d-flex">
                    <div className="btn bg-primary btn-outline-dark rounded mx-2" onClick={props.toggleMode('primary')} style={colorBoxStyle}></div>
                    <div className="btn bg-secondary btn-outline-dark rounded mx-2" onClick={props.toggleMode('secondary')} style={colorBoxStyle}></div>
                    <div className="btn bg-success btn-outline-dark rounded mx-2" onClick={props.toggleMode('success')} style={colorBoxStyle}></div>
                    <div className="btn bg-danger rounded mx-2" onClick={props.toggleMode('danger')} style={colorBoxStyle}></div>
                    <div className="btn bg-warning rounded mx-2" onClick={props.toggleMode('warning')} style={colorBoxStyle}></div>
                    <div className="btn bg-info rounded mx-2" onClick={props.toggleMode('info')} style={colorBoxStyle}></div>
                    <div className="btn bg-light rounded mx-2" onClick={props.toggleMode('light')} style={colorBoxStyle}></div>
                    <div className="btn bg-dark rounded mx-2" onClick={props.toggleMode('dark')} style={colorBoxStyle}></div>
                </div> */}

                <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                        onClick={props.toggleMode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode</label>
                </div>
            </div>
        </nav>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
    homeText: PropTypes.string
};