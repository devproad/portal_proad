import './Menu.css'
import logoProad from '../../assets/Menu/LogoPROAD.svg'
import arrow from '../../assets/Menu/ArrowMenu.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal } from 'antd';


import ContatoModal from '../Dcom/ContatoModal/ContatoModal';
import ContatoModalHorizontal from '../Dcom/ContatoModal/ContatoModalHorizontal';


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

                            <DocumentosItem titulo='Cartilha Assinatura Eletrônica' link='/documentos/Cartilha Assinatura Eletrônica_Atualizada.pdf' />
                            <DocumentosItem titulo='CÓDIGO DE CONDUTA DOS AGENTES PÚBLICOS E ESTUDANTES DA UFRN' link='/documentos/CÓDIGO DE CONDUTA DOS AGENTES PÚBLICOS E ESTUDANTES DA UFRN.pdf' />
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

                <li id='dropdown'><a href='#'>QUEM SOMOS <img id="dropdownArrow" src={arrow}></img></a></li>
                <ul className='dropdownMenu'>
                    <li><a onClick={() => openModal(
                        'APRESENTAÇÃO', <>
                        <p>
                            A Pró-Reitoria de Administração, subordinada diretamente à Reitoria, é o órgão responsável pela supervisão e coordenação das áreas de contabilidade, finanças, material, patrimônio, segurança, transportes e serviços gerais da UFRN, a qual compete:<br />
                            <ul>
                                <li>Assessorar o Reitor em assuntos administrativos;</li>
                                <li>Orientar as diversas unidades da UFRN em assuntos administrativos de qualquer natureza;</li>
                                <li>Coordenar as ações pertinentes às áreas de administração financeira, patrimonial, licitações, contratos, convênios e serviços gerais;</li>
                                <li>Praticar todos os demais atos relativos à administração, ainda que não especificados neste artigo.</li>
                            </ul>
                        </p>
                    </>
                    )}>APRESENTAÇÃO</a></li>

                    <li>
                        <a
                            onClick={() =>
                                openModal(
                                    'EQUIPE',
                                    <>
                                        <div>
                                            <h1 className='titulo-atendimento'>Gabinete do Pró-Reitor</h1>

                                            <p>
                                                Pró-Reitora: Maria do Carmo Araújo de Medeiros Fernandes de
                                                Oliveira <br />
                                                Tel. (84) 3342-2328/ 99132-2952 <br />
                                                E-mail: proad@reitoria.ufrn.br, mariadocarmo@ufrn.br
                                            </p>

                                            <p>
                                                Pró-Reitora Adjunta: Profa. Izabel de Medeiros Coelho<br />
                                                Tel. (84) 3342-2328/ 99229-6501<br />
                                                E-mail: proad@reitoria.ufrn.br, izabel.coelho@ufrn.br
                                            </p>

                                            <h1 className='titulo-atendimento'>Secretaria Administrativa</h1>


                                            <p>
                                                Email: secretariaproad@reitoria.ufrn.br<br />
                                                Tel. (84) 3342-2328 – ramais 302, 304, 305 – 99224-0096<br />
                                                Coordenador: Pedro Rodrigues Gonçalves<br />
                                            </p>

                                            <p>
                                                Tel. (84) 3342-2328 – 99193-6073 – 99193-6022<br />
                                                Email: secretariaproad@reitoria.ufrn.br
                                            </p>


                                            <p>João Maria da Silva<br />Email: joaomariabird@gmail.com</p>
                                            <p>José Eduardo Alves Nunes<br />Email: telefoniamovel@reitoria.ufrn.br</p>
                                            <p>Katyuscia Vanessa Gonçalves e Silva<br />Email: katy@reitoria.ufrn.br</p>
                                            <p>Eliene Andrade Silva de Lima</p>
                                        </div>

                                        <div>
                                            <h1 className='titulo-atendimento'>Seção de Bolsas</h1>
                                            <p>
                                                <p>
                                                    Regina Câmara do Nascimento<br />
                                                    Tel. (84) 3215-3313 – 99167-6587<br />
                                                    Email: bolsas@reitoria.ufrn.br<br />
                                                </p>
                                                <p>
                                                    Jacqueline de Medeiros Cruz<br />
                                                    Email: jacquelinedemedeiros@yahoo.com.br<br />
                                                </p>
                                                <p>
                                                    Bolsistas: Ellen kauanna da Costa Oliveira<br />
                                                </p>
                                            </p>
                                        </div>

                                        <h1 className='titulo-atendimento'>Sistemas SCDP</h1>

                                        <p>
                                            <p>
                                                Ricardo José Leite de Oliveira<br />
                                                Tel. (84) 3342-2228 r. 104- 99224-0096<br />
                                                Email: ricardo.leite@reitoria.ufrn.br<br />
                                            </p>
                                            <p>
                                                Jorge Ricardo Dias Santiago Marcelino dos Santos Dantas<br />
                                            </p>
                                            <p>
                                                Josenilma Carla de Souza<br />
                                            </p>
                                            <p>
                                                Priscila Rafaele Silva Rodrigues do Amaral
                                            </p>
                                        </p>
                                    </>
                                )
                            }
                        >
                            EQUIPE
                        </a>
                    </li>


                    <li><a onClick={() => openModal(
                        'SOBRE GESTORAS', <>
                        <p>
                            <strong>
                                Maria do Carmo Araújo de Medeiros Fernandes de Oliveira<br />
                                Pró-Reitora de Administração</strong>
                            <p>
                                Possui graduação em Direito pela Universidade do Estado do Rio Grande do
                                Norte (2009) e graduação em Administração pela Universidade Federal do Rio
                                Grande do Norte (2008). Especialista em Direito Civil e Processual Civil pela
                                Universidade Federal do Rio Grande do Norte (2011). Mestre em Gestão
                                Pública pela Universidade Federal do Rio Grande do Norte (2014). É
                                Administradora na Universidade Federal do Rio Grande do Norte, onde já atuou
                                como Assessora Administrativa do Centro de Educação no período de 2012 a
                                junho de 2014. Exerceu, de julho de 2014 a maio de 2019, o cargo de PróReitora Adjunta de Administração na Universidade Federal do Rio Grande do
                                Norte. Desde junho de 2019 exerce o cargo de Pró-Reitora de Administração
                                da UFRN, no qual participou e participa de Comissões e Comitês relacionados
                                à sua área de atuação, dentre os quais destacamos: participação Comitê de
                                Governança Estratégica e no Comitê Gestor de Aquisições e Contratações
                                (CGAC) da Universidade Federal do Rio Grande do Norte.
                            </p>

                            <strong>
                                Izabel de Medeiros Coelho<br />
                                Pró-Reitora Adjunta</strong>
                            <p>
                                Possui graduação em CIÊNCIAS CONTÁBEIS pela Universidade Federal do
                                Rio Grande do Norte (2004); Possui graduação em Direito pela Universidade
                                Potiguar (2010), e Mestrado em Ciências Contábeis - Programa MultiInstitucional e Interegional em Ciências Contábeis UFRN, UFRN e UnB (2012).
                                Atualmente é professora assistente da Universidade Federal do Rio Grande do
                                Norte e desde junho de 2019 exerce o cargo de Pró-Reitora Adjunta de
                                Administração da UFRN, no qual participou e participa de Comissões e
                                Comitês relacionados à sua área de atuação. Tem experiência na área de
                                Administração, com ênfase em Ciências Contábeis.
                            </p>
                        </p>
                    </>
                    )}>SOBRE GESTORAS</a></li>

                    <li><a onClick={() => openModal(
                        'UNIDADES', <>
                        A PROAD é constituída pelas seguintes unidades:<br />
                        <ul>
                            <li>Assessoria Técnica – ASTEC</li>
                            <li>Coordenadoria Administrativa – CA</li>
                            <li>Coordenadoria de Transportes – CGT</li>
                            <li>Coordenadoria de Convênios – CC</li>
                            <li>Coordenadoria de Gestão de Espaços Físicos – CGEF</li>
                            <li>Coordenadoria de Gestão da Informação – CGI</li>
                            <li>Diretoria de Contabilidade e Finanças – DCF</li>
                            <li>Diretoria de Contratos – DC</li>
                            <li>Diretoria de Logística – DL</li>
                            <li>Diretoria de Compras – DCOM</li>
                            <li>Diretoria de Segurança Patrimonial – DSP</li>
                        </ul>
                    </>
                    )}>UNIDADES</a></li>
                </ul>


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
            </ul >


            <Modal
                title={modalTitle}
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            > <p>
                    {modalContent}

                </p>
            </Modal>
        </div >

    );
}

export default Menu;