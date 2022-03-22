import React from 'react';
import './App.css'
import BarraSuperior from './components/BarraSuperior/BarraSuperior'
import Menu from './components/Menu/Menu'
import Contato from './components/Contato/Contato'
import Footer from './components/Footer/Footer'
import Equipe from './components/Equipe/Equipe'
import DiretoriasCoord from './components/DiretoriasCoordenadorias';
import NossosServicos from './components/NossosServiços';
import Banner from './components/Banner/Banner';
import Principal from './components/Principal/Principal';

export default (props) => (
  <div className='App'>
    <Banner></Banner>
    <BarraSuperior></BarraSuperior>
    <Menu></Menu>
    <DiretoriasCoord></DiretoriasCoord>
    <Principal></Principal>
    <NossosServicos></NossosServicos>
    <Contato></Contato>
    <Equipe></Equipe>
    <Footer></Footer>
  </div>
)