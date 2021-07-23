import React from "react";
import "../../css/Home.css";

const Home = () => {
    return (
        <div className="ui container">
            <div id="app-container" className="ui grid middle aligned">
                <div className="row">
                    <div className="sixteen wide column">
                        <div className="ui vertical segment">
                            <p className="home-greeting"><b>Hello, my name is</b></p>
                            <h1 className="home-heading">Varun Kumar</h1>
                            <p className="home-description">
                                I am a full stack software developer with a focus on frontend, currently based in Tokyo.
                                <br />
                                I specialize in developing web apps using ReactJS and Redux.
                            </p>
                            <a id="resume-button" href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="large ui grey basic button">Résumé</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;