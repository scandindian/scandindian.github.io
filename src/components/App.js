import React from 'react';
import NavigationBar from './NavigationBar';
import Home from './views/Home';
import '../css/App.css';

const App = () => {
    return (
        <div id="app-container" className="ui container">
            <NavigationBar />
            <Home />
        </div>
    );
};

export default App;