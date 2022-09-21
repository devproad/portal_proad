import React, {Fragment} from 'react'
import BarraSuperior from '../components/BarraSuperior/BarraSuperior'
import Menu from '../components/Menu/Menu'
import Contato from '../components/Contato/Contato'
import Footer from '../components/Footer/Footer'
import Equipe from '../components/Equipe/Equipe'
import Coord from '../components/Coord';
import NossosServicos from '../components/NossosServiços';
import Banner from '../components/Banner/Banner';
import Principal from '../components/Principal/Principal';


const Coordenadorias = () => {
    return (
        <Fragment>
            <Banner></Banner>
            <BarraSuperior></BarraSuperior>
            <Menu></Menu>
            <Coord></Coord>
            <Principal></Principal>
            <NossosServicos></NossosServicos>
            <Contato></Contato>
            <Equipe></Equipe>
            <Footer></Footer>
        </Fragment>
    );
}

export default Coordenadorias;