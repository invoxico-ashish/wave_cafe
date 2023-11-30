import React from 'react'
import HeaderHirevac from './HeaderHirevac'
import CategorySecHirevac from './CategorySecHirevac';
import SliderSecHirevac from './SliderSecHirevac';
import "../../styles/Hirevaccss/style.css";
import "../../styles/Hirevaccss/responsive.css"
import HirevacAbout from './HirevacAbout';


function HomeHirevac() {
  return (
    <>
      <div className='hero_area'>
        <HeaderHirevac />
        <SliderSecHirevac />
      </div>
      <CategorySecHirevac />
      <HirevacAbout />
    </>

  )
}

export default HomeHirevac