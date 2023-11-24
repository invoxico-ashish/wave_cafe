import React from 'react';
import "../styles/style.css"

function WaveCafeMain() {
    return (
        <>
            <div className  ="tm-left">
                <div className="tm-left-inner">
                    <div className="tm-site-header">
                        <i className="fas fa-coffee fa-3x tm-site-logo"></i>
                        <h1 className="tm-site-name">Wave Cafe</h1>
                    </div>
                    <nav className="tm-site-nav">
                        <ul className="tm-site-nav-ul">
                            <li className="tm-page-nav-item">
                                <a href="#drink" className="tm-page-link active">
                                    <i className="fas fa-mug-hot tm-page-link-icon"></i>
                                    <span>Drink Menu</span>
                                </a>
                            </li>
                            <li className="tm-page-nav-item">
                                <a href="#about" className="tm-page-link">
                                    <i className="fas fa-users tm-page-link-icon"></i>
                                    <span>About Us</span>
                                </a>
                            </li>
                            <li className="tm-page-nav-item">
                                <a href="#special" className="tm-page-link">
                                    <i className="fas fa-glass-martini tm-page-link-icon"></i>
                                    <span>Special Items</span>
                                </a>
                            </li>
                            <li className="tm-page-nav-item">
                                <a href="#contact" className="tm-page-link">
                                    <i className="fas fa-comments tm-page-link-icon"></i>
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default WaveCafeMain