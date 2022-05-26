import React from 'react'
import './UltimosDocumentos.css'

const UltimosDocumentos = (props) => {
    return (
        <div className='UltimosDocumentos'>
            <h1 className='UltimosDocumentosTitulo'>Últimos Documentos</h1>
            
            <hr />
            
            <div className='LinksBloco'>
                <span>{props.children}</span>
            </div>

        </div>
    );
}

export default UltimosDocumentos;