import BarraSuperior from '../components/BarraSuperior/BarraSuperior';
import Menu from '../components/Menu/Menu';
import Contato from '../components/Contato/Contato';
import Footer from '../components/Footer/Footer';
import Equipe from '../components/Equipe/Equipe';
import DiretoriasCoord from '../components/DiretoriasCoordenadorias';
import NossosServicos from '../components/NossosServiços';
import Banner from '../components/Banner/Banner';
import Principal from '../components/Principal/Principal';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalTheme from '../globals';
import { lightTheme, darkTheme } from '../theme';
import MenuMobile from '../components/Menu/MenuMobile';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);
  const [theme, setTheme] = useState('light');
  const [isDark, setIsDark] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
      setIsDark(true);
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('light');
      setIsDark(false);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
    if (localTheme === 'dark') {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const handleBannerFocusChange = (isFocused) => {
    setIsBannerVisible(isFocused);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Helmet>
        <title>PROAD</title>
        <meta name="description" content="Sendo diretamente subordinada à Reitoria, a PROAD é um órgão responsável pela supervisão e coordenação das áreas de contabilidade, finanças, material, patrimônio, segurança, transportes, gestão da informação e contratos administrativos da UFRN. Emite pareceres sobre assuntos de sua competência, delega as atribuições aos servidores envolvidos nas ações da Pró-Reitoria. É subdividida por diretorias e coordenadorias que cada uma com sua função específica consegue administrar a universidade buscando sempre o êxito." />
        <meta name="keywords" content="PROAD, UFRN, Pró-Reitoria de Administração, coordenação administrativa, contabilidade, finanças, material, patrimônio, segurança universitária, transportes universitários, gestão da informação, contratos administrativos, pareceres universitários" />
        <meta name="robots" content="index" />
        <meta name="language" content="Portuguese" />

        <meta property="og:title" content="Pró-Reitoria de Administração - UFRN" />
        <meta property="og:description" content="Sendo diretamente subordinada à Reitoria, a PROAD é um órgão responsável pela supervisão e coordenação das áreas de contabilidade, finanças, material, patrimônio, segurança, transportes, gestão da informação e contratos administrativos da UFRN." />
        <meta property="og:image" content="https://portalproad.ufrn.br/static/media/Logo_Proad.8a0fef926a12d2cf93c5a70a0a284a77.svg" />
        <meta property="og:url" content="https://portalproad.ufrn.br/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pró-Reitoria de Administração - UFRN" />
        <meta name="twitter:description" content="Sendo diretamente subordinada à Reitoria, a PROAD é um órgão responsável pela supervisão e coordenação das áreas de contabilidade, finanças, material, patrimônio, segurança, transportes, gestão da informação e contratos administrativos da UFRN." />
        <meta name="twitter:image" content="https://portalproad.ufrn.br/static/media/Logo_Proad.8a0fef926a12d2cf93c5a70a0a284a77.svg" />
        <meta name="twitter:url" content="https://portalproad.ufrn.br/" />
      </Helmet>
      <GlobalTheme />
      {isBannerVisible && (
        <Banner isDark={isDark} onFocusChange={handleBannerFocusChange} />
      )}
      <BarraSuperior toggleTheme={toggleTheme} isDark={isDark}></BarraSuperior>
      {isDesktop ? <Menu isDark={isDark} /> : <MenuMobile />}
      <DiretoriasCoord isDark={isDark}></DiretoriasCoord>
      <Principal isDark={isDark}></Principal>
      <NossosServicos></NossosServicos>
      <Contato></Contato>
      <Equipe></Equipe>
      <Footer></Footer>
    </ThemeProvider>
  );
};

export default Home;
