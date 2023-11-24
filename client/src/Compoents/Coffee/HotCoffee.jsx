import React from 'react'

function HotCoffee() {
    return (
        <>

            <div id="hot" className="tm-tab-content">
                <div className="tm-list">

                    <div className="tm-list-item">
                        {/* <img src="img/hot-americano.png" alt="Image" className="tm-list-item-img"> */}
                        <div className="tm-black-bg tm-list-item-text">
                            <h3 className="tm-list-item-name">Hot Americano<span className="tm-list-item-price">$8.50</span></h3>
                            <p className="tm-list-item-description">Here is a short description for the item along with a squared thumbnail.</p>
                        </div>
                    </div>
                    <div className="tm-list-item">
                        {/* <img src="img/hot-cappuccino.png" alt="Image" className="tm-list-item-img"> */}
                        <div className="tm-black-bg tm-list-item-text">
                            <h3 className="tm-list-item-name">Hot Cappuccino<span className="tm-list-item-price">$9.50</span></h3>
                            <p className="tm-list-item-description">Here is a list of 4 items that can add more as you need. Only content area will be scrolling.</p>
                        </div>
                    </div>
                    <div className="tm-list-item">
                        {/* <img src="img/hot-espresso.png" alt="Image" className="tm-list-item-img"> */}
                        <div className="tm-black-bg tm-list-item-text">
                            <h3 className="tm-list-item-name">Hot Espresso<span className="tm-list-item-price">$7.50</span></h3>
                            <p className="tm-list-item-description">Left side logo and main menu are fixed. The video background is fixed.</p>
                        </div>
                    </div>
                    <div className="tm-list-item">
                        {/* <img src="img/hot-latte.png" alt="Image" className="tm-list-item-img"> */}
                        <div className="tm-black-bg tm-list-item-text">
                            <h3 className="tm-list-item-name">Hot Latte<span className="tm-list-item-price">$6.50</span></h3>
                            <p className="tm-list-item-description">Page contents are organized into 3 tabs to show different lists of items.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HotCoffee