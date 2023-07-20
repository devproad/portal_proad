import React from 'react'
import './DestaquesItem.css'

const DestaquesItem = (props) => {
    const titMaxCaracteres = 55;
    const descMaxCaracteres = 150;

    return (
            <div className="card-destaque" id={props.id}>
                <img src={props.imagem} alt="" className="image-card" />

                {props.titulo.length > titMaxCaracteres ?
                    <h1 className='title-card'>{props.titulo.substring(0, titMaxCaracteres)}...</h1>
                    : <h1 className='title-card'>{props.titulo}</h1>
                }
                
                {props.descricaoDestaques.length > descMaxCaracteres ?
                    <p className='description-card'>{props.descricaoDestaques.substring(0, descMaxCaracteres)}...</p>
                    : <p className='description-card'>{props.descricaoDestaques}</p>
                }
                <p className="data-card">{props.data}</p>
            </div>
  );
}

export default DestaquesItem;