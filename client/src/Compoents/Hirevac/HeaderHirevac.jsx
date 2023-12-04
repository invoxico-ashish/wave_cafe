import React, { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import SliderSecHirevac from './SliderSecHirevac';

function HeaderHirevac() {
    const [search, setSearch] = useState(false);
    const searchClick = () => {
        setSearch(prev => !prev);
        console.log(search)
    }
    return (
        <>
            {
                search ? <div className='hero_area'>
                    <SliderSecHirevac />
                </div> : false
            }
            <div className='hero_area_mod'>
                <header className="header_section hirenavbar">
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
                                        <Link className="nav-link" to={"/hirevac"}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/hirevac/about"}> About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"hirevac/jobs"}>Jobs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"hirevac/freelacer"}>Freelancers</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">
                                            <FaUser />
                                            <span>
                                                Login
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#">
                                            <FaUser />
                                            {/* <i className="fa fa-user" aria-hidden="true"></i> */}
                                            <span>
                                                Sign Up
                                            </span>
                                        </Link>
                                    </li>
                                    <form className="form-inline">
                                        <Link className="btn   nav_search-btn">
                                            <IoIosSearch size={25} onClick={searchClick} />
                                            {/* <i className="fa fa-search" aria-hidden="true"></i> */}
                                        </Link>
                                    </form>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
            <Outlet />
        </>
    )
}

export default HeaderHirevac