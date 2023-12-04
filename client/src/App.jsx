import React from "react";
import Home from "./Compoents/Coffee/Home";
import { Routes, Route } from "react-router-dom";
import Background from "./Compoents/Coffee/Background";
// import About from "./Compoents/About"
import { CoffeeContextTwo } from "./Context/CoffeeContext";
import IcedCoffee from "./Compoents/Coffee/IcedCoffee";
import About from "./Compoents/Coffee/About";
import SpecialItems from "./Compoents/Coffee/SpecialItems"
import Contact from "./Compoents/Coffee/Contact"
import HirevacHome from "./Compoents/Hirevac/HirevacHome";
import HirevacAbout from "./Compoents/Hirevac/HirevacAbout";
import HeaderHirevac from "./Compoents/Hirevac/HeaderHirevac";
import FeaturedJob from "./Compoents/Hirevac/FeaturedJob";
import ExpertsHirevac from "./Compoents/Hirevac/ExpertsHirevac";

function App() {
  return (
    <>
      <CoffeeContextTwo>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinkmenu" element={<IcedCoffee />} />
          <Route path="/about" element={<About />} />
          <Route path="/special" element={<SpecialItems />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<HeaderHirevac />}>
            <Route path="/hirevac" element={<HirevacHome />} />
            <Route path="/hirevac/about" element={<HirevacAbout />} />
            <Route path="/hirevac/jobs" element={<FeaturedJob />} />
            <Route path="/hirevac/freelacer" element={<ExpertsHirevac />} />
          </Route>
          {/* </HeaderHirevac> */}
        </Routes >
      </CoffeeContextTwo>
    </>
  )
}

export default App
