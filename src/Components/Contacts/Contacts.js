import React from 'react';
import './Contacts.css'
import { FaLink } from 'react-icons/fa';
const Contacts = () => {
    return (
        <div>
             <div className="contactHeadingSection">
                <p className="contactTitle">
                    CONTACT WITH US TO GET HELP IN ANY CASE
                </p>
                <p className="description">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to
                </p>
            </div>
            <div className="form">

                <p className="formTitle text-center mb-0">
                    Contact with Support
                </p>
                <p className="form-sub text-center">
                    To get help Write to us
                </p>

                <form>
                    <div className="inputGroup">


                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="inputFields"
                            placeholder="Enter your name"
                        />

                        <input
                            type="text"
                            name="email"
                            id="email"
                            className="inputFields"
                            placeholder="Email Address"
                        />

                        <textarea
                            type="text"
                            name="message"
                            id="message"
                            className="messageField"
                            placeholder="Message"
                        />
                    </div>
                    <div className="submitOption">
                        <FaLink className="linkIcon" />
                        <button
                            type="submit"
                            className="submitButton"
                            onClick={(e) => { e.preventDefault() }}
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contacts;