import { useState } from 'react'
import Navigation from './components/Navigation/Navigation';
import Page1 from './components/Pages/Page1';
import './App.css'
import Page2 from './components/Pages/Page2';
import Page3 from './components/Pages/Page3';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
