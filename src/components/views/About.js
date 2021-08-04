import React from "react";
import { Link } from "react-router-dom";
import "../../css/About.css";

const About = () => {
    return (
        <div className="ui container">
            <div id="app-container" className="ui grid middle aligned">
                <div className="row">
                    <div className="column">
                        <div className="ui vertical segment">
                            <p className="about-info">
                                Thank you for visiting my profile website. Currently, I am working at <a href="https://www.jig-saw.com/en/" target="_blank" rel="noopener noreferrer">JIG-SAW</a>.
                                I moved to Japan from India in 2019 after graduating with a masters degree in information technology from <a href="https://iiita.ac.in/" target="_blank" rel="noopener noreferrer">IIIT Allahabad</a>.
                                <br /><br />
                                During my college summer vacations, I worked
                                at <a href="https://www.itri.org.tw/english/" target="_blank" rel="noopener noreferrer">ITRI</a> in Taiwan and <a href="https://www.gist.ac.kr/en/main.html" target="_blank" rel="noopener noreferrer">GIST</a> in South Korea as an intern.
                                <br /><br />
                                My passion is frontend development with ReactJS and Redux. For the backend, I use AWS and Python.
                                I have also developed <a href="https://play.google.com/store/apps/developer?id=heysadboy&hl=en" target="_blank" rel="noopener noreferrer">android apps</a> and worked as an open source developer in <a href="https://summerofcode.withgoogle.com/archive/2017/projects/5117290592862208/" target="_blank" rel="noopener noreferrer">Google Summer of Code with FOSSASIA</a>.
                                <br /><br />
                                In the future, I would like to keep working as a frontend developer. I love to design, develop and deploy beautiful and scalable web apps with a focus on user experience.
                                <br /><br />
                                Feel free to <Link to="/contact">connect</Link> with me or see my <a id="resume-button" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">résumé</a>. I am looking forward to hearing from you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;