import React from 'react'
import './UltimosDocumentos.css'
import abrirDocumentos from '../../assets/UltimosDocumentos/abrirDocumentos.svg'

const UltimosDocumentos = () => {
    return (
        <div className='UltimosDocumentos'>
            <h1 className='UltimosDocumentosTitulo'>Últimos Documentos</h1>
            
            <hr />
            
            <div className='LinksBloco'>
                <img src={abrirDocumentos} alt='links'></img>
                <a href="#">Edital Seleção Bolsista </a>
            </div>

            <div className='LinksBloco'>
                <img src={abrirDocumentos} alt='links'></img>
                <a href="#">Edital de desfazimento de bens</a>
            </div>

            <div className='LinksBloco'>
                <img src={abrirDocumentos} alt='links'></img>
                <a href="#">Cartilha Assinatura Eletrônica de Documentos</a>
            </div>
        </div>
    );
}

export default UltimosDocumentos;