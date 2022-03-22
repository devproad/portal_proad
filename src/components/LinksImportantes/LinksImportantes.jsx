import React from 'react'
import './LinksImportantes.css'
import abrirLink from '../../assets/LinksImportantes/AbrirLink.svg'

const LinksImportantes = () => {
    return (
        <div className='LinksImportantes'>
            <h1 className='LinksImportantesTitulo'>Links Importantes</h1>
            
            <hr />
            
            <div className='LinksBloco'>
                <img src={abrirLink} alt='links'></img>
                <a href="#">Receita</a>
            </div>

            <div className='LinksBloco'>
                <img src={abrirLink} alt='links'></img>
                <a href="#">CRC/RN</a>
            </div>

            <div className='LinksBloco'>
                <img src={abrirLink} alt='links'></img>
                <a href="#">Prefeitura de Natal</a>
            </div>

            <div className='LinksBloco'>
                <img src={abrirLink} alt='links'></img>
                <a href="#">SEMUT</a>
            </div>

            <div className='LinksBloco'>
                <img src={abrirLink} alt='links'></img>
                <a href="#">Governo do RN</a>
            </div>

            <div className='LinksBloco'>
                <img src={abrirLink} alt='links'></img>
                <a href="#">Secretaria de tributação</a>
            </div>
        </div>
    );
}

export default LinksImportantes;