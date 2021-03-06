import React from 'react'
import './NoticiaItem.css'

const NoticiaItem = (props) => {
    return (
        <>
            <div className="card-noticia" id={props.id}>
                <img src={props.imagem} alt="" className="image-card" />
                <div className="content-noticia">
                    <p className="data-card">{props.data}</p>
                    <h3 className="title-card">{props.titulo}</h3>
                    <p className="description-card">{props.descricaoNoticia}</p>
                    <button className='botao-noticia'>Saiba mais</button>
                </div>
            </div>
            <hr className='linhaNoticias'></hr>
        </>
            
            
  );
}

export default NoticiaItem;