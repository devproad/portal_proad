import React, { Fragment, useState, useEffect } from 'react'
import LinksImportantes from '../components/LinksImportantes/LinksImportantes';
import BarraSuperior from '../components/BarraSuperior/BarraSuperior'
import Menu from '../components/Menu/Menu';
import MenuMobile from '../components/Menu/MenuMobile';
import MenuLateral from '../components/MenuLateral/MenuLateral';
import SitesUteis from '../components/SitesUteis/sitesuteis';
import TodasNoticias from '../components/TodasNoticias/todasNoticias'
import UltimosDocumentos from '../components/UltimosDocumentos/UltimosDocumentos';
import { Helmet } from 'react-helmet';

const TodasAsNoticias = () => {
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
            <Helmet>
                <title>PROAD</title>
                <meta name="description" content="Sendo diretamente subordinada à Reitoria, a PROAD é um órgão responsável pela supervisão e coordenação das áreas de contabilidade, finanças, material, patrimônio, segurança, transportes, gestão da informação e contratos administrativos da UFRN. Emite pareceres sobre assuntos de sua competência, delega as atribuições aos servidores envolvidos nas ações da Pró-Reitoria. É subdividida por diretorias e coordenadorias que cada uma com sua função específica consegue administrar a universidade buscando sempre o êxito." />
                <meta name="keywords" content="PROAD, UFRN, Pró-Reitoria de Administração, coordenação administrativa, contabilidade, finanças, material, patrimônio, segurança universitária, transportes universitários, gestão da informação, contratos administrativos, pareceres universitários" />
                <meta name="robots" content="noindex, nofollow" />
                <meta name="language" content="Portuguese" />
                <meta property='url' content='https://portalproad.ufrn.br/noticias' />

                <meta property="og:title" content="Pró-Reitoria de Administração - UFRN" />
                <meta property="og:description" content="Sendo diretamente subordinada à Reitoria, a PROAD é um órgão responsável pela supervisão e coordenação das áreas de contabilidade, finanças, material, patrimônio, segurança, transportes, gestão da informação e contratos administrativos da UFRN." />
                <meta property="og:image" content="https://portalproad.ufrn.br/static/media/Logo_Proad.8a0fef926a12d2cf93c5a70a0a284a77.svg" />
                <meta property="og:url" content="https://portalproad.ufrn.br/noticias" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Pró-Reitoria de Administração - UFRN" />
                <meta name="twitter:description" content="Sendo diretamente subordinada à Reitoria, a PROAD é um órgão responsável pela supervisão e coordenação das áreas de contabilidade, finanças, material, patrimônio, segurança, transportes, gestão da informação e contratos administrativos da UFRN." />
                <meta name="twitter:image" content="https://portalproad.ufrn.br/static/media/Logo_Proad.8a0fef926a12d2cf93c5a70a0a284a77.svg" />
                <meta name="twitter:url" content="https://portalproad.ufrn.br/noticias" />
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
                            {/* <UltimosDocumentos></UltimosDocumentos> */}
                            <LinksImportantes></LinksImportantes>
                            <SitesUteis></SitesUteis>
                        </MenuLateral>
                    </div>
                </div>
            ) : (
                <div className='Principal'>
                    <div className='esquerdo'>
                        <MenuLateral>
                            {/* <UltimosDocumentos></UltimosDocumentos> */}
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