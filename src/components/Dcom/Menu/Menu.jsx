import './Menu.css'
import logoDcom from '../../../assets/Menu/LogoDCOM.svg'
import arrow from '../../../assets/Menu/ArrowMenu.svg'

import instagram from '../../../assets/Informacoes/Instagram_Icon.svg'
import { Modal } from 'antd';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import ContatoModal from '../ContatoModal/ContatoModal';
import DocumentosItem from '../Banner/DocumentosItem/DocumentosItem';

import ContatoModalHorizontal from '../ContatoModal/ContatoModalHorizontal';


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



        <div className="menuDcom">
            <ul className='menuLinks'>
                <li><Link to='/'>INÍCIO</Link></li>
                <li id='dropdown'><a href='#'>INSTITUICIONAL <img id="dropdownArrow" src={arrow}></img></a></li>
                <ul className='dropdownMenu'>
                    <li>
                        <a onClick={() => openModal(
                            'Direção', <>
                            <p>
                                Conforme o Regimento Interno da Reitoria, compete ao Diretor de Compras: <br />
                                <p>
                                    I - Planejar, coordenar e executar as contratações institucionais de âmbito nacional e internacional de forma a subsidiar o desenvolvimento das atividades da UFRN e apoiar administrativamente as demais unidades requisitantes no desenvolvimento de instrumentos de planejamento de contratações.
                                </p>
                                <p>
                                    III – Responder pela execução dos planos de trabalho referentes ao planejamento e gerenciamento de contratações da Universidade.
                                </p>
                                <p>
                                    IV – Utilizar aplicações de tecnologia de informação e comunicação para subsidiar a melhoria de processos de planejamento e gerenciamento de contratações.
                                </p>
                                <p>
                                    V – Coordenar e supervisionar as atividades e responsabilidades atribuídas às divisões vinculadas à diretoria.
                                </p>
                                <p>
                                    VI – Recomendar alterações e adaptações na estrutura organizacional da Diretoria de modo a assegurar a eficiência.
                                </p>
                                <p>
                                    VII – Fornecer com presteza e em tempo hábil informações às instâncias superiores e diversos órgãos de controle do poder público, sempre que solicitado.
                                </p>

                                <ContatoModal nome='João Paulo Paiva (Diretor)' emailPrimario="direcao@compras.ufrn.br" emailSecundario="joao.paulo.paiva@ufrn.br" telefone="(84) 99480-6899" />

                            </p>
                        </>
                        )}>
                            Direção
                        </a>
                    </li>

                    <li>
                        <a onClick={() => openModal(
                            'DPGC', <>
                            <p>
                                À Divisão de Planejamento e Gerenciamento de Compras compete: <br />
                                <p>
                                    I – planejar a fase interna das licitações, fazendo interface com a fase externa;
                                </p>
                                <p>
                                    II – gerir o catálogo e grupos de materiais;
                                </p>
                                <p>
                                    III – acompanhar as equipes de planejamento;
                                </p>
                                <p>
                                    IV – gerenciar as atas de registro de preços;
                                </p>
                                <p>
                                    V – estabelecer relacionamento entre unidades requisitantes da UFRN, Diretoria de Compras e mercado fornecedor;
                                </p>
                                <p>
                                    VI – controlar e acompanhar os processos para pagamento e os empenhos junto aos fornecedores dos bens e serviços contratados;
                                </p>
                                <p>
                                    VII – controlar e acompanhar as notificações para fins de apuração de inadimplências.
                                </p>

                                <ContatoModal nome='Rute Clea Pereira de Noronha (Chefe)' emailPrimario="rute.noronha@ufrn.br" telefone="(84) 99204-5432" />

                            </p>
                        </>
                        )}>
                            DPGC
                        </a>
                    </li>

                    <li>
                        <a onClick={() => openModal(
                            'DFI', <>
                            <p>
                                À Divisão de Fase Interna de Compras compete: <br />
                                <p>
                                    I – formalizar os processos licitatórios para aquisição de bens e materiais em sua fase interna; II – elaborar minutas de editais dos processos licitatórios para aquisição de bens e materiais;
                                </p>

                                <p>III – auxiliar as equipes de planejamento na realização de pesquisas de mercado;</p>

                                <p>IV – disponibilizar as informações inerentes aos processos licitatórios para aquisição de bens e materiais nos sítios oficiais do Governo Federal;</p>

                                <p>VI – formalizar os processos licitatórios para contratação de serviços em sua fase interna;</p>

                                <p>VI – elaborar minutas de contratos e termos aditivos; </p>

                                <p>VII – elaborar minutas de editais dos processos licitatórios para contratação de serviços; </p>

                                <p>VIII – auxiliar as equipes de planejamento na realização de pesquisas de mercado; </p>

                                <p>IX – disponibilizar as informações inerentes aos processos licitatórios para contratação de serviços nos sítios oficiais do Governo Federal; </p>

                                <p>X – formalizar os processos de contratações diretas nacionais e internacionais para contratação de serviços.</p>


                                <ContatoModal nome='Chianc Leocádio de Lima (Chefe)' emailPrimario="chianc.leocadio@ufrn.br" telefone="(84) 99899-3667" />


                            </p>
                        </>
                        )}>
                            DFI
                        </a>
                    </li>

                    <li>
                        <a onClick={() => openModal(
                            'DFE', <>
                            <p>
                                À Divisão de Fase Externa de Compras compete:  <br />
                                <p>
                                    I – coordenar e gerenciar a fase externa dos processos licitatórios destinados à aquisição de bens e materiais e contratação de serviços, nas suas diversas modalidades e segundo o regramento da legislação pertinente;
                                </p>

                                <p>II – receber, analisar e encaminhar às unidades responsáveis, quando necessário, impugnações e questionamentos interpostos ao processo licitatório; </p>

                                <p>III – receber os documentos pertinentes ao objeto licitado, referentes à habilitação ou às suas propostas; </p>

                                <p>IV – avaliar os referidos documentos conforme estabelecido em Lei e as exigências contidas no edital, procedendo com a habilitação e classificação dos licitantes que atendam tais exigências; </p>

                                <p>VI – elaborar minutas de contratos e termos aditivos; </p>

                                <p>V – realizar diligências, quando necessário e previsto em edital, para auxiliar no julgamento e avaliação dos documentos e informações prestadas pelos proponentes; </p>

                                <p>VI – receber recursos apresentados, dando o devido prosseguimento legal;  </p>

                                <p>VII – formalizar e conduzir a publicação dos atos cabíveis aos certames licitatórios, de acordo com a modalidade de disputa. </p>


                                <ContatoModal nome='Adriana da Silva Cardoso (Chefe)' emailPrimario="licitacaoufrn@gmail.com" telefone="(84) 98746-7713" />


                            </p>
                        </>
                        )}>
                            DFE
                        </a>
                    </li>

                    <li>
                        <a onClick={() => openModal(
                            'Diretoria de Compras', <>
                            <p>
                                A Diretoria de Compras coordena os processos de aquisições e contratações nacionais e internacionais no âmbito da Universidade Federal do Rio Grande do Norte (UFRN), e tem como missão “promover soluções em compras institucionais”. Portanto, seu principal objetivo é disponibilizar itens em Atas de Registro de Preço, e formalizar adesões e contratações diretas para atender as demandas da comunidade universitária.
                            </p>

                            <p>
                                A estrutura organizacional é composta pela Direção, Divisão de Fase Interna de Compras, Divisão de Fase Externa de Compras e Divisão de Planejamento e Gerenciamento de Compras, e conta com 42 de funcionários.
                            </p>
                        </>
                        )}>
                            Sobre
                        </a>
                    </li>


                    <li>
                        <a onClick={() => openModal(
                            'Atendimento', <>
                            <p>
                                A Diretoria de Compras aderiu ao Programa de Gestão e Desempenho desde o mês de fevereiro de 2023, optando pela modalidade de trabalho híbrida. Desse modo, o atendimento ocorre de forma presencial e remota, com a escala de servidores nas instalações físicas da unidade. Já o expediente dos funcionários terceirizados permanece de forma integral no prédio.
                            </p>

                            <p>
                                O horário de atendimento: segunda a sexta-feira, das 8h às 17h.
                            </p>
                        </>
                        )}>
                            Atendimento
                        </a>
                    </li>

                    <li>
                        <a onClick={() => openModal(
                            'Organograma', <>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt officia eveniet commodi asperiores rerum similique minus eligendi, aliquid delectus ad ratione soluta. Deserunt quia distinctio nobis placeat! Reprehenderit, neque perferendis!
                            </p>
                        </>
                        )}>
                            Organograma
                        </a>
                    </li>
                </ul>
                <li id='dropdown'><a href='#'>DOCUMENTOS <img id="dropdownArrow" src={arrow}></img></a></li>
                <ul className='dropdownMenu dropDownDocumentos'>
                    <li>
                        <a onClick={() => openModal(
                            'Legislação de compras', <>
                            <DocumentosItem titulo="DECRETO Nº 5.450, DE 31 DE MAIO DE 2005" link="http://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/decreto/d5450.htm" descricao="Regulamenta o pregão, na forma eletrônica, para aquisição de bens e serviços comuns, e dá outras providências." />

                            <DocumentosItem titulo="DECRETO Nº 7.892, DE 23 DE JANEIRO DE 2013" link="http://www.planalto.gov.br/ccivil_03/_Ato2011-2014/2013/Decreto/D7892.htm" descricao="Regulamenta o Sistema de Registro de Preços previsto no art. 15 da Lei nº 8.666, de 21 de junho de 1993." />

                            <DocumentosItem titulo="INSTRUÇÃO NORMATIVA Nº 1/2018 – SEGES/MPDG" link="" descricao="Dispõe sobre o Sistema de Planejamento e Gerenciamento de Contratações e sobre a elaboração do Plano Anual de Contratações de bens, serviços, obras e soluções de tecnologia da informação e comunicações no âmbito da Administração Pública federal direta, autárquica e fundacional." />

                            <DocumentosItem titulo="INSTRUÇÃO NORMATIVA Nº 5/2014 – SEGES/MPDG (ALTERADA PELA IN 3/2017)" link="" descricao="Dispõe sobre o procedimento administrativo para a realização de pesquisa de preços para a aquisição de bens e contratação de serviços em geral." />

                            <DocumentosItem titulo="INSTRUÇÃO NORMATIVA Nº 5/2017 – SEGES/MPDG" link="https://www.comprasgovernamentais.gov.br/images/conteudo/ArquivosCGNOR/IN-n-05-de-26-de-maio-de-2017---Hiperlink.pdf" descricao="Dispõe sobre as regras e diretrizes do procedimento de contratação de serviços sob o regime de execução indireta no âmbito da Administração Pública federal direta, autárquica e fundacional." />

                            <DocumentosItem titulo="LEI N° 8.666, DE 12 DE JUNHO DE 1993" link="http://www4.planalto.gov.br/legislacao/" descricao="Regulamenta o art. 37, inciso XXI, da Constituição Federal, institui normas para licitações e contratos da Administração Pública e dá outras providências." />

                            <DocumentosItem titulo="LEI Nº 10.520, DE 17 DE JULHO DE 2002" link="http://www.planalto.gov.br/ccivil_03/leis/2002/l10520.htm" descricao="Institui, no âmbito da União, Estados, Distrito Federal e Municípios, nos termos do art. 37, inciso XXI, da Constituição Federal, modalidade de licitação denominada pregão, para aquisição de bens e serviços comuns, e dá outras providências." />

                            <DocumentosItem titulo="LEI Nº 12.462, DE 4 DE AGOSTO DE 2011" link="http://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12462.htm" descricao="Institui o Regime Diferenciado de Contratações Públicas – RDC." />

                            <DocumentosItem titulo="LEI COMPLEMENTAR Nº 123, DE 14 DE DEZEMBRO DE 2006" link="http://www.planalto.gov.br/ccivil_03/Leis/LCP/Lcp123.htm" descricao="Institui o Estatuto Nacional da Microempresa e da Empresa de Pequeno Porte." />

                            <DocumentosItem titulo="LEI Nº 10.520, DE 17 DE JULHO DE 2002" link="http://www.planalto.gov.br/ccivil_03/leis/2002/l10520.htm" descricao="Institui, no âmbito da União, Estados, Distrito Federal e Municípios, nos termos do art. 37, inciso XXI, da Constituição Federal, modalidade de licitação denominada pregão, para aquisição de bens e serviços comuns, e dá outras providências." />

                            <DocumentosItem titulo="Lei nº 14.133/2021, DE 1º DE ABRIL DE 2021" link="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l14133.htm" descricao="Lei de Licitações e Contratos Administrativos." />

                        </>
                        )}>
                            Legislação de compras
                        </a>
                    </li>

                    <li>
                        <a onClick={() => openModal(
                            'Planos de Gestão', <>
                            <DocumentosItem titulo="Planejamento Estratégico 2020-2023" link="/documentos/Planejamento Estratégico Diretoria de Compras UFRN 2020 2023.pdf" />
                        </>
                        )}>
                            Planos de Gestão
                        </a>
                    </li>

                    <li>
                        <a onClick={() => openModal(
                            'Relatórios de gestão', <>
                            <DocumentosItem titulo="Relatório de Gestão 2020" link="/documentos/RELATÓRIO DE GESTÃO 2020 - Diretoria de Compras.pdf" />
                            <DocumentosItem titulo="Relatório de Gestão 2021" link="/documentos/Relatório de Gestão 2021 - Diretoria de Compras.pdf" />
                            <DocumentosItem titulo="Relatório de Gestão 2022" link="/documentos/Relatório de Gestão 2022 (Diretoria de Compras).pdf" />

                        </>
                        )}>
                            Relatórios de gestão
                        </a>
                    </li>
                    <li><a href='#'>Painel de Indicadores</a></li>
                    <li><a href='#'>Matriz de Priorização de Compras</a></li>
                    <li>
                        <a onClick={() => openModal(
                            'Planos de Contratações Anuais ', <>
                            Para consultar todos os planos de contratação anuais registrados pela UFRN, acesse o link: <a href="#">(Exemplo)</a>

                        </>
                        )}>
                            Planos de Contratações Anuais
                        </a>
                    </li>
                </ul>
            </ul>
            <img src={logoDcom} alt='Logo Proad' className='logoProad'></img>
            <ul className='menuLinks'>
                <li id='dropdown'><a href='#'>ORIENTAÇÕES<img id="dropdownArrow" src={arrow}></img></a></li>
                <ul className='dropdownMenu dropDownManuais'>
                    <li><a href='#'>Coleta de demandas</a></li>
                    <li><a href='#'>Check List</a></li>
                    <li><a href='#'>Cartilhas</a></li>
                    <li><a href='#'>Manuais</a></li>
                    <li>  <a onClick={() => openModal(
                        'Fluxos Processuais', <>
                        <p>A Diretoria de Compras disponibiliza os fluxos processuais aplicados às compras e contratações da UFRN, conforme links abaixo:</p>

                        <DocumentosItem titulo="Adesão SRP – Lei n° 8.666/1993" link="https://drive.google.com/file/d/18bktC1330JZ2s19dKJx_Y-Noo29rKhHd/view?usp=sharing" />
                        <DocumentosItem titulo="Contratação Direta – Lei n° 8.666/1993" link="https://drive.google.com/file/d/1ALtTt8NZjPOxjYstD-YDHarOVVQlxxjP/view?usp=sharing" />
                        <DocumentosItem titulo="Importação – Lei n° 8.666/1993" link="https://drive.google.com/file/d/1oTxqTPxiBxGHtDxbBD0r9gB9pJqxgW-E/view?usp=sharing" />
                        <DocumentosItem titulo="Pagamento de artigos e inscrições – Lei 8.666/1993" link="https://drive.google.com/file/d/1ohM12pksIrq68nunkffAzqN7t7844ysc/view?usp=sharing" />
                        <DocumentosItem titulo="Participação em IRP – Lei n° 8.666/1993" link="https://drive.google.com/file/d/1R_eer9ilz2PsBe6UVwm4oaaNUORISybv/view?usp=sharing" />
                        <DocumentosItem titulo="Pregão Eletrônico – Lei n° 8.666/1993" link="https://drive.google.com/file/d/17A3sseWtaB0NOpyxwZCywNOWHgx1CAr-/view?usp=sharing" />
                        <DocumentosItem titulo="Dispensa de Licitação Eletrônica – Lei n° 14.133/2021" link="https://drive.google.com/file/d/1N2xN_01NLCLV2jLA-1-70PAX0jKJ22Gg/view?usp=sharing" />
                        <DocumentosItem titulo="Inexigibilidade de Licitação – Lei n° 14.133/2021" link="https://drive.google.com/file/d/1yMy6V-mxIrd_t_ZK8fQZi54YSwi5-GCu/view?usp=sharing" />

                    </>
                    )}>
                        Fluxos processuais
                    </a></li>

                </ul>
                <li id='dropdown'><a href='#'>COMUNICAÇÃO <img id="dropdownArrow" src={arrow}></img></a></li>
                <ul className='dropdownMenu dropDownComunicacao'>
                    <li><a href='#'>Acompanhamento de processos</a></li>
                    <li><a href='https://sipac.ufrn.br/public/listaEditais.do?tipo=2&aba=p-editais-atas&buscaTodas=true&acao=544'>Atas vigentes</a></li>
                    <li><a href='https://sipac.ufrn.br/public/listaEditais.do?tipo=1&aba=p-comunicados'>Editais Abertos</a></li>
                    <li>
                        <a onClick={() => openModal(
                            'Agenda do Diretor ', <>
                            <iframe src="https://calendar.google.com/calendar/u/0/embed?src=proadufrn@gmail.com&ctz=America/Fortaleza&pli=1" style={{ border: 0 }} width="100%" height="600" frameborder="0" scrolling="no"></iframe>
                        </>
                        )}>
                            Agenda do Diretor 
                        </a>
                    </li>
        

                </ul>
                <li id='dropdown'><a href='#'>CONTATO <img id="dropdownArrow" src={arrow}></img></a></li>
                <ul className='dropdownMenu dropDownContato'>
                    <li>
                        <a onClick={() => openModal(
                            'Direção', <>
                             <p>
                                Para manter contato com a Direção, utilize os seguintes canais de comunicação:
                            </p>


                            <p>
                                E-mail: diretoriacomprasufrn@gmail.com<br />
                                Telefone: (84) 3342-2274 / Ramal 114
                            </p>

                            <p>
                                João Paulo Paiva (Diretor de Compras) <br />
                                E-mail: direcao@compras.ufrn.br / joao.paulo.paiva@ufrn.br <br />
                                Telefone/WhatsApp: (84)99480-6899
                            </p>


                            <ContatoModal nome='João Paulo Paiva (Diretor de Compras)' emailPrimario="joao.paulo.paiva@ufrn.br" telefone="(84) 99480-6899" />

                            <p>
                                Edjane Cortez (Secretária) <br />
                                E-mail:  edjane.cortez@ufrn.br <br />
                                Telefone/WhatsApp: (84) 99141-5018
                            </p>

                            <div className='grid-contatos'>

                            <p>
                                Matheus Wanderley <br />
                                E-mail: matheus.wanderley@ufrn.br <br />
                                Telefone/WhatsApp: (84) 98828-1950
                            </p>

                            <p>
                                Matheus Wanderley <br />
                                E-mail: matheus.wanderley@ufrn.br <br />
                                Telefone/WhatsApp: (84) 98828-1950
                            </p>

                            </div> 

                            <div className='grid-contatos'>

                            <ContatoModal nome='João Paulo Paiva (Diretor de Compras)' emailPrimario="joao.paulo.paiva@ufrn.br" telefone="(84) 99480-6899" />
                            <ContatoModal nome ='Edjane Cortez (Secretária)' emailPrimario="edjane.cortez@ufrn.br" telefone="(84) 99141-5018" />
                            <ContatoModal nome='Matheus Wanderley' emailPrimario="matheus.wanderley@ufrn.br" telefone="(84) 98828-1950" />

                            <ContatoModal nome='João Paulo Paiva (Diretor de Compras)' emailPrimario="joao.paulo.paiva@ufrn.br" telefone="(84) 99480-6899" />
                            <ContatoModal nome ='Edjane Cortez (Secretária)' emailPrimario="edjane.cortez@ufrn.br" telefone="(84) 99141-5018" />
                            <ContatoModal nome='Matheus Wanderley' emailPrimario="matheus.wanderley@ufrn.br" telefone="(84) 98828-1950" />

                            <ContatoModalHorizontal nome='João Paulo Paiva (Diretor de Compras)' emailPrimario="joao.paulo.paiva@ufrn.br" telefone="(84) 99480-6899" />
                            <ContatoModalHorizontal nome ='Edjane Cortez (Secretária)' emailPrimario="edjane.cortez@ufrn.br" telefone="(84) 99141-5018" />
                            <ContatoModalHorizontal nome='Matheus Wanderley' emailPrimario="matheus.wanderley@ufrn.br" telefone="(84) 98828-1950" />


                            </div>



                        </>
                        )}>
                            Direção
                        </a>
                    </li>

                    <li>
                        <a onClick={() => openModal(
                            'DFI', <>
                            <p>
                                Para manter contato com a Divisão de Fase Interna de Compras, utilize os seguintes canais de comunicação:
                            </p>


                            <p>
                                Chianc Leocádio de Lima (Chefe) <br />
                                E-mail: chianc.leocadio@ufrn.br <br />
                                Telefone/WhatsApp: (84) 99899-3667
                            </p>

                            <ContatoModal nome='Chianc Leocádio de Lima' emailPrimario="chianc.leocadio@ufrn.br" telefone="(84) 99899-3667" />

                            <p>
                                Thiago Correia <br />
                                E-mail: thiago.correia@ufrn.br <br />
                                Telefone/WhatsApp: (84)99639-6314
                            </p>

                            <ContatoModal nome='Thiago Correia' emailPrimario="thiago.correia@ufrn.br" telefone="(84)99639-6314" />

                            <p>
                                Chianc Leocádio de Lima (Chefe) <br />
                                E-mail: chianc.leocadio@ufrn.br <br />
                                Telefone/WhatsApp: (84) 99899-3667
                            </p>

                            <ContatoModal nome='Chianc Leocádio de Lima' emailPrimario="chianc.leocadio@ufrn.br" telefone="(84) 99899-3667" />

                            <p>
                                Thiago Correia <br />
                                E-mail: thiago.correia@ufrn.br <br />
                                Telefone/WhatsApp: (84)99639-6314
                            </p>

                            <ContatoModal nome='Thiago Correia' emailPrimario="thiago.correia@ufrn.br" telefone="(84)99639-6314" />
                        </>
                        )}>
                            DFI
                        </a>
                    </li>

                    <li>
                        <a onClick={() => openModal(
                            'DFE', <>
                            <p>
                                Para manter contato com a Divisão de Fase Externa de Compras, utilize os seguintes canais de comunicação:
                            </p>


                            <p>
                                Adriana da Silva Cardoso (Chefe)  <br />
                                E-mail: adriana.cardoso@ufrn.br  <br />
                                Telefone/WhatsApp: (84) 98746-7713
                            </p>

                            <ContatoModal nome='Chianc Leocádio de Lima' emailPrimario="chianc.leocadio@ufrn.br" telefone="(84) 99899-3667" />

                            <p>
                                Thiago Correia <br />
                                E-mail: thiago.correia@ufrn.br <br />
                                Telefone/WhatsApp: (84)99639-6314
                            </p>

                            <ContatoModal nome='Adriana da Silva Cardoso (Chefe)' emailPrimario="adriana.cardoso@ufrn.br" telefone="(84) 98746-7713" />

                            <p>
                                Bráulio Costa <br />
                                E-mail: braulio.costa@ufrn.br <br />
                                Telefone/WhatsApp: (84) 99993-9114
                            </p>

                            <ContatoModal nome='Bráulio Costa' emailPrimario="braulio.costa@ufrn.br" telefone="(84) 99993-9114" />

                            <p>
                                Adriana da Silva Cardoso (Chefe) <br />
                                E-mail: adriana.cardoso@ufrn.br <br />
                                Telefone/WhatsApp: (84) 98746-7713
                            </p>

                            <ContatoModal nome='Adriana da Silva Cardoso (Chefe)' emailPrimario="adriana.cardoso@ufrn.br" telefone="(84) 98746-7713" />

                            <p>
                                Bráulio Costa <br />
                                E-mail: braulio.costa@ufrn.br <br />
                                Telefone/WhatsApp: (84) 99993-9114
                            </p>

                            <ContatoModal nome='Bráulio Costa' emailPrimario="braulio.costa@ufrn.br" telefone="(84) 99993-9114" />
                        </>
                        )}>
                            DFE
                        </a>
                    </li>

                    <li>
                        <a onClick={() => openModal(
                            'DPGC', <>
                            <p>
                                Para manter contato a Divisão de Planejamento e Gerenciamento de Compras, utilize os seguintes canais de comunicação:
                            </p>


                            <p>
                                E-mail: planejamentodpgcufrn@gmail.com <br />
                                Telefone/WhatsApp: (84) 99204-5432
                            </p>

                            <p>
                                E-mail: poscomprasufrn@gmail.com <br />
                                Telefone/WhatsApp: (84) 99193-6070
                            </p>

                            <p>
                                Rute Clea Pereira de Noronha (Chefe) <br />
                                E-mail: rute.noronha@ufrn.br <br />
                                Telefone/WhatsApp: (84) 99204-5432
                            </p>

                            <ContatoModal nome='Rute Clea Pereira de Noronha (Chefe)' emailPrimario="rute.noronha@ufrn.br" telefone="(84) 99204-5432" />

                            <p>
                                Daniel Oliveira <br />
                                E-mail: daniel.oliveira@ufrn.br <br />
                                Telefone/WhatsApp: (84) 98821-4683
                            </p>

                            <ContatoModal nome='Daniel Oliveira' emailPrimario="daniel.oliveira@ufrn.br" telefone="84) 98821-4683" />



                        </>
                        )}>
                            DPGC
                        </a>
                    </li>
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