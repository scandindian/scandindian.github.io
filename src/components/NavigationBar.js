import React from 'react';
import '../css/NavigationBar.css';

const NavigationBar = () => {
    return (
        <div className="navigation-bar">
            <div id="desktop-navigation-bar" className="ui top fixed text menu">
                <a className="item">Home</a>
                <div className="right menu">
                    <a className="item">Photos</a>
                    <a className="item">Contact</a>
                </div>
            </div>
            <div id="mobile-navigation-bar" className="ui top fixed four item text menu">
                <a className="item">Home</a>
                <a className="item">Photos</a>
                <a className="item">Contact</a>
            </div>
        </div>
    );
};

export default NavigationBar;