import { Modal } from 'antd';
import DocumentosItem from '../Dcom/DocumentosItem/DocumentosItem';
import './noticiaExpandida.css';
import Linkify from 'react-linkify';

const NoticiaExpandida = (props) => {
    return (
        <Modal title={props.titulo} open={props.open} footer={false} onCancel={props.onCancel}>
            <p>{props.dataPostagem}</p>
            <p>
                <Linkify componentDecorator={(decoratedHref, decoratedText, key) => ( <a target="blank" rel="noopener" href={decoratedHref} key={key}> {decoratedText} </a> )} >
                    {props.conteudo}
                </Linkify>
            </p>
            <p>
                <strong>{props.autor}</strong> <br />
                <strong>{props.fonte}</strong>
            </p>
            {props.docTitulo && props.docLink && (
                <DocumentosItem titulo={props.docTitulo} link={props.docLink} />
            )}

            <div className='noticia-expandida-tag-container'>
                {props.tags && props.tags.map((tag) => <span className='noticia-expandida-tag'>{tag}</span>)}
            </div>
        </Modal>
    );
}

export default NoticiaExpandida;
