import React from "react";
import "../css/NavigationBar.css";
import { Link } from "react-router-dom";


const NavigationBar = () => {
    return (
        <React.Fragment>
            <div id="desktop-navigation-bar" className="ui top fixed text menu">
                <Link to="/" className="item">Home</Link>
                <div className="right menu">
                    <Link to="/about" className="item">About</Link>
                    <Link to="/contact" className="item">Contact</Link>
                </div>
            </div>
            <div id="mobile-navigation-bar" className="ui top fixed four item text menu">
                <Link to="/" className="item">Home</Link>
                <Link to="/about" className="item">About</Link>
                <Link to="/contact" className="item">Contact</Link>
            </div>
        </React.Fragment>
    );
};

export default NavigationBar;