import React, { Fragment, useState, useEffect } from 'react'
import LinksImportantes from '../components/LinksImportantes/LinksImportantes';
import BarraSuperior from '../components/BarraSuperior/BarraSuperior'
import Menu from '../components/Menu/Menu';
import MenuMobile from '../components/Menu/MenuMobile';
import MenuLateral from '../components/MenuLateral/MenuLateral';
import SitesUteis from '../components/SitesUteis/sitesuteis';
import TodasNoticias from '../components/Dcom/TodasNoticias/todasNoticias'
import { Helmet } from 'react-helmet';


const TodasAsNoticias = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1000);

    useEffect(() => {
        document.title = "Diretoria de Compras - PROAD";
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
                <meta name="robots" content="noindex, nofollow" />
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

            <BarraSuperior></BarraSuperior>
            {isDesktop ? <Menu /> : <MenuMobile />}
            {isDesktop ? (
                <div className='Principal'>
                    <div className='esquerdo'>
                        <TodasNoticias></TodasNoticias>
                    </div>
                    <div className='direito'>
                        <MenuLateral>
                            <LinksImportantes></LinksImportantes>
                            <SitesUteis></SitesUteis>
                        </MenuLateral>
                    </div>
                </div>
            ) : (
                <div className='Principal'>
                    <div className='esquerdo'>
                        <MenuLateral>
                            <LinksImportantes></LinksImportantes>
                            <SitesUteis></SitesUteis>
                        </MenuLateral>
                    </div>
                    <div className='direito'>
                        <TodasNoticias></TodasNoticias>
                    </div>
                </div>)}

        </Fragment>
    );
}

export default TodasAsNoticias;