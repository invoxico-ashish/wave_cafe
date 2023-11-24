import React, { useEffect } from 'react'

function IcedCoffee({ coffee }) {
    console.log(coffee, "fdfadfasdfaf");

    return (
        <>
            <div id="cold" className="tm-tab-content">
                <div className="tm-list">
                    {
                        coffee.map((c) => (
                            <div className="tm-list-item" key={c.id} >
                                <img src={`http://localhost:8000/public/${c.attachments[0].attachment_phy_path}`} alt="Image" className="tm-list-item-img" />
                                <div className="tm-black-bg tm-list-item-text">
                                    <h3 className="tm-list-item-name">{c.title}<span className="tm-list-item-price">${c.price}</span></h3>
                                    <p className="tm-list-item-description">{c.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default IcedCoffee