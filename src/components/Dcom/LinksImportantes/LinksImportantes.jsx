import React from 'react'
import './LinksImportantes.css'
import abrirLink from '../../../assets/LinksImportantes/AbrirLink.svg'

const LinksImportantes = () => {
    return (
        <div className='LinksImportantes'>
            <h1 className='LinksImportantesTitulo'>Links</h1>

            <hr />


            <div className='LinksBloco'>
                <img src={abrirLink} alt='links'></img>
                <a href="#">Acompanhamento de processos (SIPAC)</a>
            </div>
            <div className='LinksBloco'>
                <img src={abrirLink} alt='links'></img>
                <a href="#">Matriz de Priorização de Compras</a>
            </div>
            <div className='LinksBloco'>
                <img src={abrirLink} alt='links'></img>
                <a href="#">Painel de Indicadores</a>
            </div>
            <div className='LinksBloco'>
                <img src={abrirLink} alt='links'></img>
                <a href="#">PCA</a>
            </div>
            <div className='LinksBloco'>
                <img src={abrirLink} alt='links'></img>
                <a href="#">Atas homologadas</a>
            </div>
        </div>
    );
}

export default LinksImportantes;