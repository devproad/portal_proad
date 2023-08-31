import { Menu, Dropdown, Button } from 'antd';
import { BarsOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Modal } from 'antd';
import logoProad from '../../assets/Menu/LogoPROAD.svg'
import './MenuMobile.css'
import DocumentosItem from '../Dcom/DocumentosItem/DocumentosItem'

import ContatoModal from '../Dcom/ContatoModal/ContatoModal';



const { SubMenu } = Menu;

const Navbar = (props) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModalVisible(true);
  }

  const menu = (
    <Menu>
      <SubMenu key="sub1" title="INSTITUICIONAL">
        <Menu.Item key="1.1"><a href='https://calendar.google.com/calendar/u/0/embed?src=proadufrn@gmail.com&ctz=America/Fortaleza' target="_blank" rel='noopener'>Agenda Administrativa</a>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="2">NOTÍCIAS</Menu.Item>
      <Menu.Item key="3">  <a onClick={() => openModal(
        'DOCUMENTOS', <>
        <DocumentosItem titulo='Cartilha Assinatura Eletrônica' link='/documentos/Cartilha Assinatura Eletrônica_Atualizada.pdf' />
        <DocumentosItem titulo='CÓDIGO DE CONDUTA DOS AGENTES PÚBLICOS E ESTUDANTES DA UFRN' link='/documentos/CÓDIGO DE CONDUTA DOS AGENTES PÚBLICOS E ESTUDANTES DA UFRN.pdf' />
        <DocumentosItem titulo="GESTAO PATRIMONIAL DE BENS MOVEIS NA UFRN" link='/documentos/GESTAO PATRIMONIAL DE BENS MOVEIS NA UFRN.pdf' />
        <DocumentosItem titulo="ORGANOGRAMA PROAD" link='/documentos/ORGANOGRAMA_PROAD_NOVO.doc' />
        <DocumentosItem titulo="Planejamento Estratégico Diretoria de Compras UFRN 2020-2023" link='/documentos/Planejamento Estratégico Diretoria de Compras UFRN 2020 2023 (1).pdf' />
        <DocumentosItem titulo="PROAD E UNIDADES" link='/documentos/PROAD E UNIDADES.doc' />
        <DocumentosItem titulo="SISTEMA DE GOVERNANÇA DA UFRN" link='/documentos/SISTEMA DE GOVERNANÇA DA UFRN.pdf' />
        <DocumentosItem titulo="SOBRE GESTORAS" link='/documentos/SOBRE GESTORAS.doc' />
      </>
      )}>
        DOCUMENTOS
      </a></Menu.Item>
      <SubMenu key="sub2" title="QUEM SOMOS">
        <Menu.Item key="2.1">
          <a onClick={() => openModal(
            "APRESENTAÇÃO", <>
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
          )}>APRESENTAÇÃO</a>
        </Menu.Item>
        <Menu.Item key="2.2">
          <a onClick={() => openModal(
            'EQUIPE', <>
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
          )}>EQUIPE</a>
        </Menu.Item>
        <Menu.Item key="2.3">
          <a onClick={() => openModal(
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
          )}>SOBRE GESTORAS</a>
        </Menu.Item>

        <Menu.Item key="2.4">
          <a onClick={() => openModal(
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
          )}>UNIDADES</a>
        </Menu.Item>
      </SubMenu>



      <SubMenu key="sub3" title="CONTATO">
        <Menu.Item key="3.1">
          <a onClick={() => openModal(
            'Gabinete do Pró-Reitor', <>
            <p>Para manter contato, utilize os seguintes canais de comunicação:</p>
            <h1 className='titulo-atendimento'>Atendimento</h1>
            <ContatoModal telefone='(84) 3342-2328' emailPrimario="proad@reitoria.ufrn.br" />

            <h1 className='titulo-atendimento'>Pró-Reitora</h1>
            <ContatoModal nome='Maria do Carmo Araújo de Medeiros Fernandes de Oliveira' telefoneSecundario='(84) 99132-2952' emailSecundario="mariadocarmo@reitoria.ufrn.br" />

            <h1 className='titulo-atendimento' >Pró-Reitora Adjunta</h1>
            <ContatoModal nome='Profa. Izabel de Medeiros Coelho' telefoneSecundario='(84) 99229-6501' emailSecundario="izabel.coelho@reitoria.ufrn.br" />
          </>
          )}>Gabinete do Pró-Reitor</a>
        </Menu.Item>

        <Menu.Item key="3.2">
          <a onClick={() => openModal(
            'Secretaria Administrativa', <>
            <p>Para manter contato, utilize os seguintes canais de comunicação:</p>

            <h1 className='titulo-atendimento'>Atendimento</h1>
            <ContatoModal telefoneFixo='(84) 3342-2328 (Ramais 302, 304, 305)' telefone="(84) 99224-0096" emailPrimario="secretariaproad@reitoria.ufrn.br" />

            <h1 className='titulo-atendimento'>Coordenador</h1>
            <ContatoModal nome="Pedro Rodrigues Gonçalves" telefone="(84) 99193-6073" telefoneSecundario="(84) 99193-6022" />

            <h1 className='titulo-atendimento'>Equipe</h1>
            <ContatoModal nome="João Maria da Silva" emailPrimario="joaomariabird@gmail.com" />
            <ContatoModal nome="José Eduardo Alves Nunes" emailPrimario="telefoniamovel@reitoria.ufrn.br" />
            <ContatoModal nome="Katyuscia Vanessa Gonçalves e Silva" emailPrimario="katy@reitoria.ufrn.br" />
            <ContatoModal nome="Eliene Andrade Silva de Lima" />
          </>
          )}>Secretaria Administrativa</a>
        </Menu.Item>

        <Menu.Item key="3.3">
          <a onClick={() => openModal(
            'Seção de Bolsas', <>
            <p>Para manter contato, utilize os seguintes canais de comunicação:</p>

            <h1 className='titulo-atendimento'>Equipe</h1>
            <ContatoModal nome="Regina Câmara do Nascimento" telefoneFixo='(84) 3215-3313' telefoneSecundario="(84) 99167-6587" emailPrimario="bolsas@reitoria.ufrn.br" />
            <ContatoModal nome="Jacqueline de Medeiros Cruz" emailPrimario="jacquelinedemedeiros@yahoo.com.br" />

            <h1 className='titulo-atendimento'>Bolsistas</h1>
            <ContatoModal nome="Ellen kauanna da Costa Oliveira" />
          </>

          )}>Seção de Bolsas</a>
        </Menu.Item>


        <Menu.Item key="3.4">
          <a onClick={() => openModal(
            'SCDP', <>
            <p>Sistema de Concessão de Diárias e Passagens.</p>
            <p>Para manter contato, utilize os seguintes canais de comunicação:</p>

            <h1 className='titulo-atendimento'>Equipe</h1>
            <ContatoModal nome="Ricardo José Leite de Oliveira" telefoneFixo='(84) 3342-2228 (Ramal 104)' telefone="(84) 99224-0096" emailPrimario="ricardo.leite@reitoria.ufrn.br" />
            <ContatoModal nome="Jorge Ricardo Dias Santiago" />
            <ContatoModal nome="Marcelino dos Santos Dantas" />
            <ContatoModal nome="Josenilma Carla de Souza" />
            <ContatoModal nome="Priscila Rafaele Silva Rodrigues do Amaral" />
          </>
          )}>SCDP</a>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );


  return (
    <div className="menuMobile">

      <div className='menu-bloco'>

        <Dropdown overlay={menu} trigger={['click']}>
          <Button type="text" icon={<BarsOutlined style={{ fontSize: '28px', color: '#08c' }} />} className="mobile-menu-button" />
        </Dropdown>

        <img src={logoProad} alt='Logo Proad' className='logoProadMobile'></img>
      </div>
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

};

export default Navbar;
