import React, { Component } from 'react'
import {
    // Router, Routes, Route used in App.js
    // BrowserRouter as Router,
    // Routes,
    // Route,
    Link
} from "react-router-dom";

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectLanguage: 'en'
        }
    }
    changeMode = () => {
        this.props.toggleMode(this.props.mode.status === 'dark' ? 'light' : 'dark');
    }
    handleChange = (event) => {
        let val = event.target?.value.replace(/\s+/g, '');
        // let _lang = val.match(/(?<=\-)[a-z]+/gi)?.toString();
        // let _country = val.match(/[a-z]+(?=\-)/gi)?.toString();
        this.props.toggleLanguage({country: val.split('-')[0], language: val.split('-')[1] });
    } 


    render() {
        let { mode } = this.props;
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${mode.status} bg-${mode.status}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link shadow" to="/">General</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                            </ul>
                        </div>

                        <select onChange={this.handleChange} className="form-select shadow" aria-label="Default select example" style={{maxWidth: "180px", float: "left"}}>
                            <option selected value="india - english">India - English</option>
                            <option value="USA - English">USA - English</option>
                            <option value="UK - English">UK - English</option>
                            <option value="German- Deutsche"> German- Deutsche</option>
                            <option value="France - French">France - French</option>
                            <option value="Italy - Italian">Italy - Italian</option>
                        </select>

                        <div className={`form-check form-switch rounded-3 border border-5 border-${mode.status} mx-3 shadow`} aria-label="Default select example" style={{backgroundColor: ""}}>
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                                onClick={this.changeMode} />
                            <label className={`form-check-label text-${mode.textColor}`} htmlFor="flexSwitchCheckDefault"><strong className="">Mode</strong></label>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
