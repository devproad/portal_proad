import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Noticias from './pages/Noticias';

export default (props) => (
  <div className='App'>
     <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/destaques' element={<Noticias/>}></Route>
      </Routes>
    </BrowserRouter>
  
   
  </div>
)