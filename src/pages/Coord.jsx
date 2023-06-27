import React, {Fragment, useState, useEffect} from 'react'
import BarraSuperior from '../components/BarraSuperior/BarraSuperior'
import Menu from '../components/Menu/Menu'
import Contato from '../components/Contato/Contato'
import Footer from '../components/Footer/Footer'
import Equipe from '../components/Equipe/Equipe'
import Coord from '../components/Coord';
import NossosServicos from '../components/NossosServiços';
import Banner from '../components/Banner/Banner';
import Principal from '../components/Principal/Principal';
import MenuMobile from '../components/Menu/MenuMobile';


const Coordenadorias = () => {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);

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
              {isDesktop ? <Menu  /> : <MenuMobile />}
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