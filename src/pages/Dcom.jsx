import React, {Fragment} from 'react'
import BarraSuperior from '../components/BarraSuperior/BarraSuperior'
import Menu from '../components/Menu/Menu'
import Contato from '../components/Contato/Contato'
import Footer from '../components/Footer/Footer'
import DiretoriasCoord from '../components/DiretoriasCoordenadorias';
import NossosServicos from '../components/NossosServiços';
import Banner from '../components/Dcom/Banner/Banner';
import Principal from '../components/Principal/Principal';


const Home = () => {
    return (
        <Fragment>
            <Banner></Banner>
            <BarraSuperior></BarraSuperior>
            <Menu></Menu>
            <DiretoriasCoord></DiretoriasCoord>
            <Principal></Principal>
            <NossosServicos></NossosServicos>
            <Contato></Contato>
            <Footer></Footer>
        </Fragment>
    );
}

export default Home;