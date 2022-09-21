import React from 'react'
import { Fragment } from 'react/cjs/react.production.min';
import LinksImportantes from '../components/LinksImportantes/LinksImportantes';
import BarraSuperior from '../components/BarraSuperior/BarraSuperior'
import Menu from '../components/Menu/Menu';
import MenuLateral from '../components/MenuLateral/MenuLateral';
import SitesUteis from '../components/SitesUteis/sitesuteis';
import TodosDestaques from '../components/TodosDestaques/TodosDestaques'
import UltimosDocumentos from '../components/UltimosDocumentos/UltimosDocumentos';



const Noticias = () => {
    return (
        <Fragment>
            <BarraSuperior></BarraSuperior>
            <Menu></Menu>
            <div className='Principal'>
                <div className='esquerdo'>
                    <TodosDestaques></TodosDestaques>
                </div>
                <div className='direito'>
                    <MenuLateral>
                        <UltimosDocumentos></UltimosDocumentos>
                        <LinksImportantes></LinksImportantes>
                        <SitesUteis></SitesUteis>
                    </MenuLateral>

                </div>
            </div>
        </Fragment>
    );
}

export default Noticias;