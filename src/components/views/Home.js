import React from 'react';
import Resume from '../../documents/Resume.pdf';
import '../../css/Home.css';

const Home = () => {
    return (
        <div id="home-container" className="ui grid middle aligned">
            <div className="row">
                <div className="twelve wide column">
                    <div className="ui vertical segment">
                        <h3 className>Hello, my name is</h3>
                        <h1 className="name-heading">Varun Kumar</h1>
                        <p className="short-description">
                            I am a full stack software developer with a focus on frontend with ReactJS and Redux. 
                            <br />
                            Currently, I am based in Tokyo.
                        </p>
                        <a id="resume-button" href={Resume} target="_blank" className="ui button">Résumé</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;