import React from "react";
import "../../css/Contact.css";

const Contact = () => {
    return (
        <div className="ui container">
            <div id="app-container" className="ui grid middle aligned">
                <div className="row">
                    <div className="column">
                        <div className="ui vertical segment">
                            <p className="contact-info">You can email me at <b>heysadboy@gmail.com</b></p>
                            <a className="large ui grey basic ui button" href="https://www.linkedin.com/in/heysadboy" target="_blank" rel="noopener noreferrer">
                                <i className="linkedin icon" />
                        LinkedIn
                    </a>
                            <a className="large ui grey basic ui button" href="https://github.com/heysadboy" target="_blank" rel="noopener noreferrer">
                                <i className="github icon" />
                        GitHub
                    </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;