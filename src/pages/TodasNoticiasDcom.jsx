import React, {Fragment} from 'react'
import LinksImportantes from '../components/LinksImportantes/LinksImportantes';
import BarraSuperior from '../components/BarraSuperior/BarraSuperior'
import Menu from '../components/Menu/Menu';
import MenuLateral from '../components/MenuLateral/MenuLateral';
import SitesUteis from '../components/SitesUteis/sitesuteis';
import TodasNoticias from '../components/Dcom/TodasNoticias/todasNoticias'
import UltimosDocumentos from '../components/UltimosDocumentos/UltimosDocumentos';



const TodasAsNoticias = () => {
    return (
        <Fragment>
            <BarraSuperior></BarraSuperior>
            <Menu></Menu>
            <div className='Principal'>
                <div className='esquerdo'>
                    <TodasNoticias></TodasNoticias>
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

export default TodasAsNoticias;