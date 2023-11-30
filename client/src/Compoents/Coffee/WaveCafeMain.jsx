import React, { useState } from 'react';
import "../../styles/style.css"
import CafeMenu from './CafeMenu';
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import About from './About';
import SpecailItems from "./SpecialItems";
import Contact from "./Contact"
import axios from 'axios';
import { apiAbout, apiSpItems } from "../../config/apiUrl"

function WaveCafeMain() {
    const [activeTab, setActiveTab] = useState("drinkMenu");
    const [apiData, setApiData] = useState([]);
    const [SpData, setSpData] = useState([]);
    const handleTabClick = (eventKey) => {
        setActiveTab(eventKey);
    };
    const handleAboutClick = async () => {
        try {
            const response = await axios.get(apiAbout);
            setApiData(response.data)
        } catch (error) { console.log(error) };
    }
    const handlSpclick = async () => {
        try {
            const response = await axios.get(apiSpItems)
            setSpData(response.data)
        } catch (error) { console.log(error) };
    }
    return (
        <>
            <div className="tm-left">
                <div className="tm-left-inner">
                    <div className="tm-site-header">
                        <i className="fas fa-coffee fa-3x tm-site-logo"></i>
                        <h1 className="tm-site-name">Wave Cafe</h1>
                    </div>
                    <Nav
                        activeKey={activeTab}
                        onSelect={handleTabClick}
                        className="tm-site-nav">
                        <ul className="tm-site-nav-ul">
                            <Nav.Item className="tm-page-nav-item">
                                <Nav.Link eventKey="drinkMenu" to={"/drinkmenu"} className="tm-page-link ">
                                    <i className="fas fa-mug-hot tm-page-link-icon"></i>
                                    <span>Drink Menu</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tm-page-nav-item">
                                <Nav.Link eventKey="about" to={"/about"} className="tm-page-link" onClick={handleAboutClick}>
                                    <i className="fas fa-users tm-page-link-icon"></i>
                                    <span>About Us</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tm-page-nav-item">
                                <Nav.Link eventKey="special" to={"/special"} className="tm-page-link" onClick={handlSpclick}>
                                    <i className="fas fa-glass-martini tm-page-link-icon"></i>
                                    <span>Special Items</span>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tm-page-nav-item">
                                <Nav.Link eventKey="contact" to={"/contact"} className="tm-page-link">
                                    <i className="fas fa-comments tm-page-link-icon"></i>
                                    <span>Contact</span>
                                </Nav.Link>
                            </Nav.Item>
                        </ul>
                    </Nav>
                </div>
            </div>
            {activeTab === "drinkMenu" ? <CafeMenu /> : null}
            {activeTab === "about" ? <About apiData={apiData} /> : null}
            {activeTab === "special" ? <SpecailItems SpData={SpData} /> : null}
            {activeTab === "contact" ? <Contact /> : null}
        </>
    )
}

export default WaveCafeMain