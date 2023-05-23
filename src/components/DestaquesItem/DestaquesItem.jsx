import React from 'react'
import './DestaquesItem.css'

const DestaquesItem = (props) => {
    return (
            <div className="card-destaque" id={props.id}>
                <img src={props.imagem} alt="" className="image-card" />
                <h1 className="title-card">{props.titulo}</h1>
                <p className="description-card">{props.descricaoDestaques}</p>
                <p className="data-card">{props.data}</p>
            </div>
  );
}

export default DestaquesItem;