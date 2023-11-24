import React from 'react'

function Contact() {
    return (
        <>

            <div id="contact" className="tm-page-content">
                <div className="tm-black-bg tm-contact-text-container">
                    <h2 className="tm-text-primary">Contact Wave</h2>
                    <p>Wave Cafe Template has a video background. You can use this layout for your websites. Please contact Tooplate's Facebook page. Tell your friends about our website.</p>
                </div>
                <div className="tm-black-bg tm-contact-form-container tm-align-right">
                    <form action="" method="POST" id="contact-form">
                        <div className="tm-form-group">
                            <input type="text" name="name" className="tm-form-control" placeholder="Name" required="" />
                        </div>
                        <div className="tm-form-group">
                            <input type="email" name="email" className="tm-form-control" placeholder="Email" required="" />
                        </div>
                        <div className="tm-form-group tm-mb-30">
                            <textarea rows="6" name="message" className="tm-form-control" placeholder="Message" required=""></textarea>
                        </div>
                        <div>
                            <button type="submit" className="tm-btn-primary tm-align-right">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact