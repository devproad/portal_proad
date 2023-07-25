import React from 'react'
import './NoticiasRecentes.css'
import { Link} from 'react-router-dom';

const NoticiasRecentes = (props) => {
    return (
        <div className='noticiasRecentes'>
            <h1 className='noticiasRecentesTitulo'>Notícias  recentes</h1>
            <hr className='linhaNoticiasRecentes'></hr>
            <div className='gridNoticiasRecentes'>
                {props.children}
            </div>
            <Link className='visualizarNoticias' to="/noticias">Visualizar todas as noticias</Link>
        </div>
    );
}

export default NoticiasRecentes;