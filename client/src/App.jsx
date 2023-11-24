import React from "react"
import Home from "./Compoents/Home"
import { Routes, Route } from "react-router-dom"
import Background from "./Compoents/Background"
import About from "./Compoents/About"
import { CoffeeContextTwo } from "./Context/CoffeeContext"

function App() {
  return (
    <>
      <CoffeeContextTwo>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes >
      </CoffeeContextTwo>
    </>
  )
}

export default App
