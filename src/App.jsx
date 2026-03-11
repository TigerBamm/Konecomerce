
import Navbar from "./components/Navbar";
import Homepages from './Pages/Homepages';
import Women from "./Pages/Women";
import Kid from "./Pages/Kid";
import Men from "./Pages/Men";
import CardDetail from './Pages/CardDetail';
import CardDetailwomen from './Pages/CardDetailwomen';
import CardDetailkid from './Pages/CardDetailkid';
import CardDetailmen from './Pages/CardDetailmen';
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
<div>
  
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kid" element={<Kid />} />
        <Route path="/men" element={<Men />} />
        <Route path="/card-detail/:id" element={<CardDetail />} />
        <Route path="/card-detailwomen/:id" element={<CardDetailwomen />} />
        <Route path="/card-detailkid/:id" element={<CardDetailkid />} />
        <Route path="/card-detailmen/:id" element={<CardDetailmen />} />
      </Routes>
    </BrowserRouter>
    <Footer />
</div>
    
    

     
  )
}

export default App



