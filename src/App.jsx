import Navbar from './components/Navbar';
import Homepages from './Pages/Homepages';
import Contact from './Pages/Contact';
import Aboutus from './Pages/Aboutus';
import Shop from './Pages/Shop';
import CardDetail from './Pages/CardDetail';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    
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
