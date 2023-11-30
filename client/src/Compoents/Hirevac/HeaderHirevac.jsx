import React from 'react'
import { Link } from 'react-router-dom'

function HeaderHirevac() {
    return (
        <>
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <Link className="navbar-brand" to="index.html">
                            <span>
                                Hirevac
                            </span>
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="index.html">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="about.html"> About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="job.html">Jobs</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="freelancer.html">Freelancers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <span>
                                            Login
                                        </span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <span>
                                            Sign Up
                                        </span>
                                    </Link>
                                </li>
                                <form className="form-inline">
                                    <button className="btn   nav_search-btn" type="submit">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default HeaderHirevac