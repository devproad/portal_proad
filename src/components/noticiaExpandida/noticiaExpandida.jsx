import {Modal} from 'antd'
import DocumentosItem from '../documentosItem/documentosItem';

const noticiaExpandida = (props) => {
    <Modal title={props.titulo} visible={props.visible} onOk={props.onOk} onCancel={props.onCancel}>
        <p>{props.dataPostagem}</p>
        <p>{props.conteudo}</p>
        <p>
            <strong>Autor: {props.autor}</strong>
            <strong>Fonte: {props.fonte}</strong>
        </p>
        <DocumentosItem titulo={props.docTitulo} link={props.docLink}/>
        
        Tags: {props.tags.map((tag) => {
            return <span>{tag}</span>
        })}
        
    </Modal>
}

export default noticiaExpandida;

