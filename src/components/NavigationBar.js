import React from 'react';

const NavigationBar = () => {
    return (
        <div class="ui top fixed menu">
            <a class="item">Home</a>
            <div class="right menu">
                <a class="item">Resume</a>
                <a class="item">About</a>
                <a class="item">Photography</a>
                <a class="item">Contact</a>
            </div>
        </div>
    );
};

export default NavigationBar;