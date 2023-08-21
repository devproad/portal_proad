import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import TodasNoticias from './pages/TodasNoticias';
import TodasNoticiasDcom from './pages/TodasNoticiasDcom';
import Dcom from './pages/Dcom';
import ReactGA from 'react-ga';

 const App = () => (
  useEffect(() => {
    ReactGA.initialize('G-F42VZ617CC');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []),

  <div className='App'>
     <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/compras' exact element={<Dcom/>}></Route>
        <Route path='/destaques' element={<TodasNoticias/>}></Route>
        <Route path='/noticias' element={<TodasNoticias/>}></Route>
        <Route path='/compras/noticias' element={<TodasNoticiasDcom/>}></Route>
      </Routes>
    </BrowserRouter>
  

  </div>
)

export default App;