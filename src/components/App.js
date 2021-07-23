import React from "react";
import NavigationBar from "./NavigationBar";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../css/App.css";

const App = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <NavigationBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;