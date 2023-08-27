import Documento from '../../../assets/Modal/Documento.svg';

const DocumentosItem = (props) => {
    return (
        <div className='documentos-item'>
        <img src={Documento} alt={props.titulo} />
        <a target="_blank" rel="noopener" href={props.link}>{props.titulo}</a>
        <p>{props.descricao}</p>
    </div>

    );
}

export default DocumentosItem;
