import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TodasNoticias from './pages/TodasNoticias';
import TodasNoticiasDcom from './pages/TodasNoticiasDcom';
import Dcom from './pages/Dcom';

import ReactGA from "react-ga4";

const App = () => {

  useEffect(() => {
    ReactGA.initialize("G-F42VZ617CC");
    ReactGA.send('pageview');
  }, []);


  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/compras' exact element={<Dcom />} />
          <Route path='/destaques' element={<TodasNoticias />} />
          <Route path='/noticias' element={<TodasNoticias />} />
          <Route path='/compras/noticias' element={<TodasNoticiasDcom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
