import React from 'react';
import Resume from '../../documents/Resume.pdf';
import '../../css/Home.css';

const Home = () => {
    return (
        <div id="home-container" className="ui grid middle aligned">
            <div className="row">
                <div className="eleven wide column">
                    <div className="ui vertical segment">
                        <h3 className>Hello, my name is</h3>
                        <h1 className="name-heading">Varun Kumar</h1>
                        <p className="short-description">
                            I am a full stack software developer with a focus on frontend, currently based in Tokyo. 
                            <br />
                            I specialize in developing apps using ReactJS and Redux along with other technologies.
                            <br />
                            See my résumé to know more about me.
                        </p>
                        <a id="resume-button" href={Resume} target="_blank" className="ui button">Résumé</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;