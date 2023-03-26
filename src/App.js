import './App.css';
import Header from './Component/Pages/Header/Header';
import Navbar from './Component/NavBar/Navbar';
import Proyects from './Component/Pages/Proyects/Proyects';
import About from './Component/Pages/About/About';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>

     
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/*" element={<Header />} />
        <Route path="/inicio" element={<Header />}/>
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
 </div>
  );
}

export default App;
