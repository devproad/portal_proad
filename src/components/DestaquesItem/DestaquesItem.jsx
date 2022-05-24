import React from 'react'
import './DestaquesItem.css'

const DestaquesItem = (props) => {
    return (
            <div className="card-destaque" id={props.id}>
                <img src={props.imagem} alt="" className="image-card" />
                <h3 className="title-card">{props.titulo}</h3>
                <p className="description-card">{props.descricaoDestaques}</p>
                <p className="data-card">{props.data}</p>
            </div>
  );
}

export default DestaquesItem;