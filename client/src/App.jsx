import React from "react";
import Home from "./Compoents/Home";
import { Routes, Route } from "react-router-dom";
import Background from "./Compoents/Background";
// import About from "./Compoents/About"
import { CoffeeContextTwo } from "./Context/CoffeeContext";
import IcedCoffee from "./Compoents/Coffee/IcedCoffee";
import About from "./Compoents/About";
import SpecialItems from "./Compoents/Coffee/SpecialItems"
import Contact from "./Compoents/Contact"

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
        </Routes >
      </CoffeeContextTwo>
    </>
  )
}

export default App
