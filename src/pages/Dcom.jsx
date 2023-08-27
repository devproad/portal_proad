import React, { Fragment, useState, useEffect } from 'react'
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
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Diretoria de Compras - PROAD</title>
        <meta name="description" content="A Diretoria de Compras coordena os processos de aquisições e contratações nacionais e internacionais no âmbito da Universidade Federal do Rio Grande do Norte (UFRN), e tem como missão promover soluções em compras institucionais." />
        <meta name="keywords" content="Diretoria de Compras, PROAD, aquisições, contratações, UFRN, processos de aquisição, aquisições nacionais, aquisições internacionais" />
        <meta name="robots" content="index" />
        <meta name="language" content="Portuguese" />
        <meta property='url' content='https://portalproad.ufrn.br/compras' />

        <meta property="og:title" content="Diretoria de Compras - PROAD/UFRN" />
        <meta property="og:description" content="A Diretoria de Compras coordena os processos de aquisições e contratações nacionais e internacionais no âmbito da Universidade Federal do Rio Grande do Norte (UFRN), e tem como missão promover soluções em compras institucionais." />
        <meta property="og:image" content="https://portalproad.ufrn.br/static/media/LogoDCOM.5a3c08ea2c37a9d3a1aa290450855e18.svg" />
        <meta property="og:url" content="https://portalproad.ufrn.br/compras" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diretoria de Compras - PROAD/UFRN" />
        <meta name="twitter:description" content="A Diretoria de Compras coordena os processos de aquisições e contratações nacionais e internacionais no âmbito da Universidade Federal do Rio Grande do Norte (UFRN), e tem como missão promover soluções em compras institucionais." />
        <meta name="twitter:image" content="https://portalproad.ufrn.br/static/media/LogoDCOM.5a3c08ea2c37a9d3a1aa290450855e18.svg" />
        <meta name="twitter:url" content="https://portalproad.ufrn.br/compras" />
      </Helmet>
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