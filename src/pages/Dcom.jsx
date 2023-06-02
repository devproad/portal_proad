import React, {Fragment} from 'react'
import BarraSuperior from '../components/BarraSuperior/BarraSuperior'
import Menu from '../components/Dcom/Menu/Menu'
import Contato from '../components/Dcom/Contato/Contato'
import Footer from '../components/Footer/Footer'
import DiretoriasCoord from '../components/Dcom/DiretoriasCoordenadorias';
import NossosServicos from '../components/NossosServiços';
import Banner from '../components/Dcom/Banner/Banner';
import Principal from '../components/Principal/PrincipalDcom';
import Equipe from '../components/Dcom/Equipe/Equipe';


const Dcom = () => {
    return (
        <Fragment>
            <Banner></Banner>
            <BarraSuperior></BarraSuperior>
            <Menu></Menu>
            <DiretoriasCoord></DiretoriasCoord>
            <Principal></Principal>
            <NossosServicos></NossosServicos>
            <Contato></Contato>
            <Equipe></Equipe>
            <Footer></Footer>
        </Fragment>
    );
}

export default Dcom;