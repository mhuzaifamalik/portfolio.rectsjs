import React from 'react';
// import logo from './logo.svg';

import './App.css';
import { BrowserRouter ,  Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Cursor from './component/Coursor';
import Theme from './component/Theme';
import Home from './Pages/home/Home';
import About from './Pages/about/About';
import Portfolio from './Pages/portfolio/Portfolio';
import Contact from './Pages/contact/Contact';
// import Planner from './Pages/Planner/Planner1';






function App() {
  return (
  <BrowserRouter>
      <Navbar />
      <Cursor />
      <Theme />
    <Routes>
      <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />    
        <Route path='/contact' element={<Contact />} />    
        {/* <Route path='/Theme' element={<Theme />} />         */}
      </Routes>  
  </BrowserRouter>
  );
}

export default App;
