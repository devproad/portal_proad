import React from 'react'
import './NoticiasRecentesItem.css'

const NoticiasRecentes = (props) => {
    return (
        <div className='noticiasRecentesItem' id={props.id}>
                <div className='itemNoticiasRecentes'>
                    <div className='barraItemNoticias'>
                       <span className='dataNoticiasRecentes'>{props.data}</span>
                    </div>
                    <div className='conteudoNoticiasRecentes'>
                        <h1 className='tituloNoticiasRecentes'>{props.titulo}</h1>
                        <p  className='DescricaoNoticiasRecentes'>{props.descricao}</p>
                    </div>
                </div>

        </div>
    );
}

export default NoticiasRecentes;