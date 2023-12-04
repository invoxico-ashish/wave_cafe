import React from 'react'
import SubfooterHirevac from './SubfooterHirevac'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter, FaInstagram } from "react-icons/fa";

function FooterHirevac() {
    return (
        <>
            <section className="info_section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 info_links">
                            <h4>
                                Menu
                            </h4>
                            <ul>
                                <li className="active">
                                    <a href="index.html">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="about.html">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a className="" href="job.html">
                                        Jobs
                                    </a>
                                </li>
                                <li>
                                    <a className="" href="freelancer.html">
                                        Freelancers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4>
                                Jobs
                            </h4>
                            <p>
                                Established fact that a reader will be distracted by the readable content of a page when looking at its
                                layout. The point of using Lorem Ipsum
                            </p>
                        </div>
                        <div className="col-md-3">
                            <div className="info_social">
                                <h4>
                                    Social Link
                                </h4>
                                <div className="social_container">
                                    <div>
                                        <a href="">
                                            <FaFacebookF />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <FaTwitter />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <FaLinkedinIn />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="">
                                            <FaInstagram />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info_form">
                                <h4>
                                    Newsletter
                                </h4>
                                <form action="">
                                    <input type="text" placeholder="Enter Your Email" />
                                    <button type="submit">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SubfooterHirevac />
        </>
    )
}

export default FooterHirevac