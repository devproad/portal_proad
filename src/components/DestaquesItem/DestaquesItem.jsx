import { useState } from 'react';
import NoticiaExpandida from '../noticiaExpandida/noticiaExpandida';
import './DestaquesItem.css'


const DestaquesItem = (props) => {
    const titMaxCaracteres = 40;
    const descMaxCaracteres = 120;
    const [modalVisible, setModalVisible] = useState(false);

    const handleModalOpen = () => {
        setModalVisible(true);
    };

    return (
        <div className="card-destaque" id={props.id}>
            <div className="content-destaque" onClick={handleModalOpen}>
                <img src={props.imagem} alt="" className="image-card" />

                {props.titulo.length > titMaxCaracteres ?
                    <h1 className='title-card'>{props.titulo.substring(0, titMaxCaracteres)}...</h1>
                    : <h1 className='title-card'>{props.titulo}</h1>
                }

                {props.descricaoDestaques.length > descMaxCaracteres ?
                    <p className='description-card'>{props.descricaoDestaques.substring(0, descMaxCaracteres)}...</p>
                    : <p className='description-card'>{props.descricaoDestaques}</p>
                }
            </div>

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
    );
}

export default DestaquesItem;