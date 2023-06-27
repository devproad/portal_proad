import React, {Fragment, useState, useEffect} from 'react'
import BarraSuperior from '../components/BarraSuperior/BarraSuperior'
import Menu from '../components/Dcom/Menu/Menu'
import Contato from '../components/Dcom/Contato/Contato'
import Footer from '../components/Footer/Footer'
import DiretoriasCoord from '../components/Dcom/DiretoriasCoordenadorias';
import NossosServicos from '../components/Dcom/NossosServiços';
import Banner from '../components/Dcom/Banner/Banner';
import Principal from '../components/Principal/PrincipalDcom';
import Equipe from '../components/Dcom/Equipe/Equipe';
import MenuMobile from '../components/Dcom/Menu/MenuMobile';

const Dcom = () => {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 728);

    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth > 1000);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


    return (
        <Fragment>
            <Banner></Banner>
            <BarraSuperior></BarraSuperior>
            {isDesktop ? <Menu /> : <MenuMobile />}
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