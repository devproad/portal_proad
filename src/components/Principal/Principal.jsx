import React from 'react'
import './Principal.css'
import MenuLateral from '../MenuLateral/MenuLateral';
import NoticiasRecentes from '../NoticiasRecentes/NoticiasRecentes';
import LinksImportantes from '../LinksImportantes/LinksImportantes'
import UltimosDocumentos from '../UltimosDocumentos/UltimosDocumentos';
import NoticiaDetalhada from '../NoticiaDetalhada/NoticiaDetalhada';
import SitesUteis from '../SitesUteis/sitesuteis';
import Destaques from '../Destaques/destaques';

const Principal = () => {
    return (
        <div className='Principal'>
            <div className='esquerdo'>
                <Destaques></Destaques>
                <NoticiasRecentes></NoticiasRecentes>
                <NoticiaDetalhada></NoticiaDetalhada>
            </div>
            <div className='direito'>
                <MenuLateral>
                    <UltimosDocumentos></UltimosDocumentos>
                    <LinksImportantes></LinksImportantes>
                    <SitesUteis></SitesUteis>
                </MenuLateral>
            </div>
        </div>
    );
}

export default Principal;