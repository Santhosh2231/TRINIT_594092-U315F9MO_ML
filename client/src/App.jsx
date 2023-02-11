import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Crops from './screens/Crops';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import CropPrice from './screens/CropPrice';
// import CropDisease from './screens/CropDisease';
import SoilCrop from './screens/SoilCrop';
// import Solutions from './screens/Solutions';
import Footer from './screens/Footer';
import SoilFertility from './screens/SoilFertility';

function App() {

  return (
   <BrowserRouter>
   <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element="#about" />
      {/* <Route path="/" element={<Solutions />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/soilanalysis" element={<SoilFertility />} />
      <Route path="/soilcropprediction" element={<SoilCrop />} />
      <Route path="/priceforecast" element={<Crops />} />
      {/* <Route path="/cropdisease" element={<CropDisease />} /> */}
      <Route path="/priceforecast/:crop" element={<CropPrice />} />
    </Routes>
    <Footer />
   </BrowserRouter>
  )
}

export default App
