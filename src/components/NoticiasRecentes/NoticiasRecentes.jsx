import React from 'react'
import './NoticiasRecentes.css'

const NoticiasRecentes = (props) => {
    return (
        <div className='noticiasRecentes'>
            <h1 className='noticiasRecentesTitulo'>Notícias  recentes</h1>
            <hr className='linhaNoticiasRecentes'></hr>
            <div className='gridNoticiasRecentes'>
                {props.children}
            </div>
            <a className='visualizarNoticias' href='#'>Vizualizar todas as noticias</a>
        </div>
    );
}

export default NoticiasRecentes;