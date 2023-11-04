import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/'></Route>
        {/* <Route path='/routinedays/:id' element={}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
