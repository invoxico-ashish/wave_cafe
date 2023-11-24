import React from 'react'

function About() {
    return (
        <>
            <div id="about" className="tm-page-content">
                <div className="tm-black-bg tm-mb-20 tm-about-box-1">
                    <h2 className="tm-text-primary tm-about-header">About Wave Cafe</h2>
                    <div className="tm-list-item tm-list-item-2">
                        {/* <img src="img/about-1.png" alt="Image" className="tm-list-item-img tm-list-item-img-big"> */}
                        <div className="tm-list-item-text-2">
                            <p>Wave Cafe is a one-page video background HTML CSS template from Tooplate. You can use this for your business websites.</p>
                            <p>You can also use this for your client websites which you get paid for your website services. Please tell your friends about us.</p>
                        </div>
                    </div>
                </div>
                <div className="tm-black-bg tm-mb-20 tm-about-box-2">
                    <div className="tm-list-item tm-list-item-2">
                        <div className="tm-list-item-text-2">
                            <h2 className="tm-text-primary">How we began</h2>
                            <p>If you wish to support us, please contact Tooplate. Thank you. Duis bibendum erat nec ipsum consectetur sodales.</p>
                        </div>
                        {/* <img src="img/about-2.png" alt="Image" className="tm-list-item-img tm-list-item-img-big tm-img-right"> */}
                    </div>
                    <p>Donec non urna elit. Quisque ut magna in dui mattis iaculis eu finibus metus. Suspendisse vel mi a lacus finibus vehicula vel ut diam. Nam pellentesque, mi quis ullamcorper.</p>
                </div>
            </div>
        </>
    )
}

export default About