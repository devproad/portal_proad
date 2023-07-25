import { useState } from 'react'
import './NoticiasRecentesItem.css'
import NoticiaExpandida from '../noticiaExpandida/noticiaExpandida';

const NoticiasRecentes = (props) => {
    const titMaxCaracteres = 55;
    const descMaxCaracteres = 150;

    const [modalVisible, setModalVisible] = useState(false);

    const handleModalOpen = () => {
        setModalVisible(true);
    };


    return (
        <div className='noticiasRecentesItem' >
            <div className='itemNoticiasRecentes' onClick={handleModalOpen}>
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

export default NoticiasRecentes;