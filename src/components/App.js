import React from "react";
import NavigationBar from "./NavigationBar";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../css/App.css";

const App = () => {
    return (
        <Router>
            <NavigationBar basename={process.env.PUBLIC_URL}/>
            <Switch>
                <div className="ui container">
                    <div id="app-container" className="ui grid middle aligned">
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </Switch>
        </Router>
    );
};

export default App;