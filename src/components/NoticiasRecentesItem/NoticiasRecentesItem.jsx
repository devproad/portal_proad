import React from 'react'
import './NoticiasRecentesItem.css'

const NoticiasRecentes = (props) => {
    const titMaxCaracteres = 55;
    const descMaxCaracteres = 150;
    return (
        <div className='noticiasRecentesItem' id={props.id}>
            <div className='itemNoticiasRecentes'>
                <div className='barraItemNoticias'>
                    <span className='dataNoticiasRecentes'>{props.data}</span>
                </div>
                <div className='conteudoNoticiasRecentes'>
                 
                    {props.titulo.length > titMaxCaracteres ? 
                        <h1 className='tituloNoticiasRecentes'>{props.titulo.substring(0, titMaxCaracteres)}...</h1>
                        : <h1 className='tituloNoticiasRecentes'>{props.titulo}</h1>
                    }
                 
                    {props.descricao.length > descMaxCaracteres ?
                            <p className='DescricaoNoticiasRecentes'>{props.descricao.substring(0, descMaxCaracteres)}...</p>
                            : <p className='DescricaoNoticiasRecentes'>{props.descricao}</p>
                    }

                </div>
            </div>

        </div>
    );
}

export default NoticiasRecentes;