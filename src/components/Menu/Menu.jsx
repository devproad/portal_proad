import './Menu.css'
import logoProad from '../../assets/Menu/LogoPROAD.svg'
import arrow from '../../assets/Menu/ArrowMenu.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from 'antd';


import DocumentosItem from '../../components/Dcom/Banner/DocumentosItem/DocumentosItem'


const Menu = (props) => {
    const textos = Array.from(document.querySelectorAll('.menuLinks a'));
    const dropdownMenu = Array.from(document.querySelectorAll('.dropdownMenu'));
    const dropdownArrow = Array.from(document.querySelectorAll('#dropdownArrow'));
    const logo = Array.from(document.querySelectorAll('.logoProad'));
    if (props.isDark === true) {
        textos.forEach((item) => {
            item.style = 'color: #FFFFFF;'
        })
        dropdownMenu.forEach((item) => {
            item.style = 'background: #303030;'
        })
        dropdownArrow.forEach((item) => {
            item.style = 'filter: brightness(300%);'
        })
        logo.forEach((item) => {
            item.style = 'filter: brightness(175%);'
        })
    } else {
        textos.forEach((item) => {
            item.style = 'color: #00607D;'
        })
        dropdownMenu.forEach((item) => {
            item.style = 'background: #FFFFFF;'
        })
        dropdownArrow.forEach((item) => {
            item.style = 'filter: brightness(100%);'
        })
        logo.forEach((item) => {
            item.style = 'filter: brightness(100%);'
        })
    }

    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState('');

    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setModalVisible(true);
    }



    return (
        <div className="menu">
            <ul className='menuLinks'>
                <li><Link to='/'>INÍCIO</Link></li>
                <li id='dropdown'><a href='#'>INSTITUICIONAL <img id="dropdownArrow" src={arrow}></img></a></li>
                <ul className='dropdownMenu'>
                    <li><a href='#'>EXEMPLO 1</a></li>
                    <li><a href='#'>EXEMPLO 2</a></li>
                    <li><a href='#'>EXEMPLO 3</a></li>
                    <li><a href='#'>EXEMPLO 4</a></li>
                </ul>
                <li><a href='#'>NOTÍCIAS</a></li>
            </ul>
            <img src={logoProad} alt='Logo Proad' className='logoProad'></img>
            <ul className='menuLinks'>
                <li>
                    <a onClick={() => openModal(
                        'DOCUMENTOS', <>
                        <p>

                            <DocumentosItem titulo='Cartilha Assinatura Eletrônica'  link='/documentos/Cartilha Assinatura Eletrônica_Atualizada.pdf' />
                            <DocumentosItem titulo='CÓDIGO DE CONDUTA DOS AGENTES PÚBLICOS E ESTUDANTES DA UFRN'  link='/documentos/CÓDIGO DE CONDUTA DOS AGENTES PÚBLICOS E ESTUDANTES DA UFRN.pdf' />
                            <DocumentosItem titulo="GESTAO PATRIMONIAL DE BENS MOVEIS NA UFRN" link='/documentos/GESTAO PATRIMONIAL DE BENS MOVEIS NA UFRN.pdf' />
                            <DocumentosItem titulo="ORGANOGRAMA PROAD" link='/documentos/ORGANOGRAMA_PROAD_NOVO.doc' />
                            <DocumentosItem titulo="Planejamento Estratégico Diretoria de Compras UFRN 2020-2023" link='/documentos/Planejamento Estratégico Diretoria de Compras UFRN 2020 2023 (1).pdf' />
                            <DocumentosItem titulo="PROAD E UNIDADES" link='/documentos/PROAD E UNIDADES.doc' />
                            <DocumentosItem titulo="SISTEMA DE GOVERNANÇA DA UFRN" link='/documentos/SISTEMA DE GOVERNANÇA DA UFRN.pdf' />
                            <DocumentosItem titulo="SOBRE GESTORAS" link='/documentos/SOBRE GESTORAS.doc' />
                        </p>
                    </>
                    )}>
                        DOCUMENTOS
                    </a>
                </li>
                <li><a href='#'>QUEM SOMOS</a></li>
                <li><a href='#'>CONTATO</a></li>
            </ul>



            <Modal
                title={modalTitle}
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            > <p>
                    {modalContent}

                </p>
            </Modal>
        </div>

    );
}

export default Menu;