 clothing-shop
import Navbar from "./components/Navbar";
import Homepages from './Pages/Homepages';
import Contact from './Pages/Contact';
import Aboutus from './Pages/Aboutus';
import Shop from './Pages/Shop';
import CardDetail from './Pages/CardDetail';

import React from "react";
import Navbar from "./components/Navbar";


import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
clothing-shop
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/card-detail/:id" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

    <div>
      <Navbar />
      <h1 className="text-4xl text-red-500 font-bold">Tailwind Working!</h1>
    </div>
  );
}

export default App;

