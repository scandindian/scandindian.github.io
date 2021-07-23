import React from "react";
import { Link } from "react-router-dom";
import "../../css/About.css";

const About = () => {
    return (
        <div className="row">
            <div className="column">
                <div className="ui vertical segment">
                    <p className="about-info">
                        Thank you for visiting my profile page. My name is Varun Kumar and I am from India.
                    <br /><br />
                    Currently, I am working at <a href="https://www.jig-saw.com/en/" target="_blank" rel="noopener noreferrer">JIG-SAW</a> in Tokyo, Japan.
                    I moved here in 2019 after graduating with a masters degree in information technology from <a href="https://iiita.ac.in/" target="_blank" rel="noopener noreferrer">IIIT Allahabad</a>.
                    <br /><br />
                    Before moving to Japan I have worked as an intern
                    at <a href="https://www.itri.org.tw/english/" target="_blank" rel="noopener noreferrer">ITRI</a> in Hsinchu, Taiwan
                    and <a href="https://www.gist.ac.kr/en/main.html" target="_blank" rel="noopener noreferrer">GIST</a> in Gwangju, South Korea during college.
                    <br /><br />
                    My passion is developing frontend with ReactJS and Redux. For the backend, I use the Django REST framework and AWS.
                    I have also worked with <a href="https://play.google.com/store/apps/developer?id=heysadboy&hl=en" target="_blank" rel="noopener noreferrer">Android</a> in the past while working as an open source developer in <a href="https://summerofcode.withgoogle.com/archive/2017/projects/5117290592862208/" target="_blank" rel="noopener noreferrer">Google Summer of Code with FOSSASIA</a>.
                    <br /><br />
                    In the future, I would like to keep working as a frontend developer. I love to design, develop and deploy beautiful and scalable web apps with a focus on user experience.
                    <br /><br />
                    Feel free to <Link to="/contact">connect</Link> with me or see my <a id="resume-button" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">résumé</a>. I am looking forward to hearing from you.
                    </p>
                </div>
            </div>
        </div>
    );
}


export default About;