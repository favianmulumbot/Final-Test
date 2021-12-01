import { Routes, Route, } from "react-router-dom";
import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
    </Routes>
  );
}

export default App;
