import BarraSuperior from '../components/BarraSuperior/BarraSuperior'
import Menu from '../components/Menu/Menu'
import Contato from '../components/Contato/Contato'
import Footer from '../components/Footer/Footer'
import Equipe from '../components/Equipe/Equipe'
import DiretoriasCoord from '../components/DiretoriasCoordenadorias';
import NossosServicos from '../components/NossosServiços';
import Banner from '../components/Banner/Banner';
import Principal from '../components/Principal/Principal';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import GlobalTheme from "../globals";
import { lightTheme, darkTheme } from "../theme";

const Home = () => {
    const [ theme, setTheme ] = useState('light');
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        if (theme === "light") {
         window.localStorage.setItem("theme", "dark");
          setTheme("dark");
          setIsDark(true);
        } else {
        window.localStorage.setItem("theme", "light");
          setTheme("light");
          setIsDark(false);
        }
      };

      useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
        if (localTheme === "dark") {
          setIsDark(true);
        }else{
          setIsDark(false);
        }
      }, []);
    
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalTheme />
            <Banner isDark={isDark}></Banner>
            <BarraSuperior toggleTheme={toggleTheme} isDark={isDark}></BarraSuperior>
            <Menu isDark={isDark}></Menu>
            <DiretoriasCoord isDark={isDark}></DiretoriasCoord>
            <Principal isDark={isDark}></Principal>
            <NossosServicos></NossosServicos>
            <Contato></Contato>
            <Equipe></Equipe>
            <Footer></Footer>
        </ThemeProvider>
    );
}

export default Home;