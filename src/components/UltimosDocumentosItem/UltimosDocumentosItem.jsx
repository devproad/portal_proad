import React from 'react'
import './UltimosDocumentosItem.css'
import abrirDocumentos from '../../assets/UltimosDocumentos/abrirDocumentos.svg'

const UltimosDocumentosItem = (props) => {
    return (
        <div className='ultimosDocumentosItem' id={props.id}>
                <div className='itemUltimosDocumentos'>
                    <div className='conteudoUltimosDocumentos'>
                        <img src={abrirDocumentos} alt='links'></img>
                        <a href={props.linkDocumento} className='tituloUltimosDocumentos'>{props.titulo}</a>
                    </div>
                </div>

        </div>
    );
}

export default UltimosDocumentosItem;