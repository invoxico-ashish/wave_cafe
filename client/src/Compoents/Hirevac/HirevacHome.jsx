import React from 'react';
import HomeHirevac from './HomeHirevac';
import { Routes, Route } from "react-router-dom";
import "../../styles/Hirevaccss/bootstrap.css"
import "../../styles/Hirevaccss/font-awesome.min.css";
// import "../../styles/Hirevaccss/style.css";
// import "../../styles/Hirevaccss/styles"


function HirevacHome() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeHirevac />} />
            </Routes>
        </>
        // <div>HirevacHome</div>
    )
}

export default HirevacHome