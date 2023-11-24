import React from 'react'
import waveCafe from "../assets/wave-cafe-video-bg.mp4";

function Background() {
    return (
        <>
            <div className="background-container">
                <video id="background-video" className="background-video" autoPlay loop muted>
                    <source src={waveCafe} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    )
}

export default Background