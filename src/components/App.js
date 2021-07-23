import React from "react";
import NavigationBar from "./NavigationBar";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../css/App.css";

const App = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
                <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
                <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;