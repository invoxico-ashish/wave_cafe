import React from 'react'

function About({ apiData }) {
    console.log(apiData, "apiDataapiDataapiDataapiDataapiData")
    return (
        <>
            <div id="about" className="tm-page-content details_box">
                {
                    apiData.map(a => (
                        <div className="tm-black-bg tm-mb-20 tm-about-box-1" key={a.id}>
                            <h2 className="tm-text-primary tm-about-header">{a.heading}</h2>
                            <div className="tm-list-item tm-list-item-2">
                                {/* <img src="img/about-1.png" alt="Image" className={a.id == 1 ? "tm-list-item-img tm-list-item-img-big" : "tm-list-item-img tm-list-item-img-big tm-img-right"} /> */}
                                <img src={`http://localhost:8000/public/${a.attachmentAbout[0].attachment_phy_path}`} alt="Image" className="tm-list-item-img tm-list-item-img-big" />
                                <div className="tm-list-item-text-2">
                                    <p>{a.short_desc}.</p>
                                    <p>{a.long_desc}.</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default About