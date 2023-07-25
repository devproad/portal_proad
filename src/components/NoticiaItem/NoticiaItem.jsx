import React, { useState } from 'react';
import './NoticiaItem.css';
import NoticiaExpandida from '../noticiaExpandida/noticiaExpandida';

const descLimiteCaracteres = 160;

const NoticiaItem = (props) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleModalOpen = () => {
        setModalVisible(true);
    };
    
    return (
        <>
            <div className="card-noticia" id={props.titulo}>
                <img src={props.imagem} alt={props.titulo} className="image-card" />
                <div className="content-noticia">
                    <p className="data-card">{props.data}</p>
                    <h3 className="title-card">{props.titulo}</h3>

                    {props.descricao.length > descLimiteCaracteres ?
                        <p className="description-card">{props.descricao.substring(0, descLimiteCaracteres)}...</p> : <p className="description-card">{props.descricao}</p> }

                    <button className='botao-noticia' onClick={handleModalOpen}>Saiba mais</button>
                    <NoticiaExpandida
                        open={modalVisible}
                        titulo={props.titulo}
                        dataPostagem={props.data}
                        conteudo={props.descricao}
                        autor={props.autor}
                        fonte={props.fonte}
                        docTitulo={props.docTitulo}
                        docLink={props.docLink}
                        tags={props.tags}
                        onCancel={() => setModalVisible(false)}
                    />
                </div>
            </div>
            <hr className='linhaNoticias' />
        </>
    );
}

export default NoticiaItem;
