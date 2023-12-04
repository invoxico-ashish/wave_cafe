import React from 'react';
import FooterHirevac from './FooterHirevac';
import ExpertsHirevac from './ExpertsHirevac';
import FeaturedJob from './FeaturedJob';
import CategorySecHirevac from './CategorySecHirevac';
import SliderSecHirevac from './SliderSecHirevac';
import HirevacAbout from './HirevacAbout';
import "../../styles/Hirevaccss/bootstrap.css"
import "../../styles/Hirevaccss/font-awesome.min.css";


function HirevacHome() {
    return (
        <>
            <div className='hero_area'>
                <SliderSecHirevac />
            </div>
            <CategorySecHirevac />
            <HirevacAbout />
            <FeaturedJob />
            <ExpertsHirevac />
            <FooterHirevac />
        </>
    );
};

export default HirevacHome