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
                    <li><a href='https://calendar.google.com/calendar/u/0/embed?src=proadufrn@gmail.com&ctz=America/Fortaleza' target="_blank" rel='noopener'>Agenda Administrativa</a></li>
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
                <li><a onClick={() => openModal(
                    'QUEM SOMOS', <>
                    <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        </p>
                </>
                )}>QUEM SOMOS</a></li>
                  <li id='dropdown'><a href='#'>CONTATO <img id="dropdownArrow" src={arrow}></img></a></li>
                <ul className='dropdownMenu dropdownContatosPROAD'>
                    <li><a onClick={() => openModal(
                        'SCDP', <>
                        <p>SCDP - Sistema de Concessão de Diárias e Passagens</p>
                      
                        <h1 className='titulo-atendimento'>EQUIPE</h1>
                        <p>
                            Ricardo <br />
                            Jorge<br />
                            Marcelino<br />
                            Josenilma<br />
                            Priscila<br />
                        </p>
                        <p>
                         Contato: 84 99229-6490
                        </p>
                    </>
                    )}>SCDP</a></li>
             </ul>
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