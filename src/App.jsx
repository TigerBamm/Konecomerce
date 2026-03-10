
import Navbar from "./components/Navbar";
import Homepages from './Pages/Homepages';
import Women from "./Pages/Women";
import Kid from "./Pages/Kid";
import Men from "./Pages/Men";
import CardDetail from './Pages/CardDetail';
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
      </Routes>
    </BrowserRouter>
    <Footer />
</div>
    
    

     
  )
}

export default App



