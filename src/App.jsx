import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Noticias from './pages/Noticias';
import TodasNoticias from './pages/TodasNoticias';
import Dcom from './pages/Dcom';
import Coord from './pages/Coord';

 const App = (props) => (
  <div className='App'>
     <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/dcom' exact element={<Dcom/>}></Route>
        <Route path='/coord' element={<Coord/>}></Route>
        <Route path='/destaques' element={<Noticias/>}></Route>
        <Route path='/noticias' element={<TodasNoticias/>}></Route>
      </Routes>
    </BrowserRouter>
  

  </div>
)

export default App;