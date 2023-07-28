import React, {Fragment, useState, useEffect} from 'react'
import LinksImportantes from '../components/LinksImportantes/LinksImportantes';
import BarraSuperior from '../components/BarraSuperior/BarraSuperior'
import Menu from '../components/Menu/Menu';
import MenuMobile from '../components/Menu/MenuMobile';
import MenuLateral from '../components/MenuLateral/MenuLateral';
import SitesUteis from '../components/SitesUteis/sitesuteis';
import TodasNoticias from '../components/Dcom/TodasNoticias/todasNoticias'


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