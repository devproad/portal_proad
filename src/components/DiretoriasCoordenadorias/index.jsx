import React, { useState } from 'react';
import './DiretoriasCoord.css';
import CashLogo from '../../assets/DiretoriasCoordenadorias/CashLogo.svg';
import Logistic from '../../assets/DiretoriasCoordenadorias/Logistic.svg';
import SecurityLogo from '../../assets/DiretoriasCoordenadorias/SecurityLogo.svg';
import ShopeLogo from '../../assets/DiretoriasCoordenadorias/ShopLogo.svg';
import ContractLogo from '../../assets/DiretoriasCoordenadorias/ContractLogo.svg';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

const DiretoriasCoord = (props) => {
  const [isDiretoria, setIsDiretoria] = useState(true);


  const fundoDiretoriaStyle = props.isDark
    ? 'background: linear-gradient(93.93deg, #004053 45.4%, #027ba1 99.79%);'
    : 'background: linear-gradient(93.93deg, #00607d 45.4%, #0089b2 99.79%);';

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModalVisible(true);
  }



  const diretoriaContent = (

    <div className="itens-DiretCoord">

      <div className="item-DiretCoord">
        <img src={CashLogo} alt="logo" />
        <div className="item-content">
          <h1 className='item-title'>Diretoria de Contabilidade</h1>
          <p className="item-description">É um órgão central do sistema de administração financeira e contábil
            da Universidade. Responsável por assessorar o Reitor em assuntos administrativos,
            constitui-se pela divisão de Administração Financeira, que se subdivide em: Setor
            de Execução Orçamentária, Setor de Análise e Liquidação de Despesa, e Setor de Finanças; </p>
        </div>
      </div>


      <div className="item-DiretCoord">
        <img src={SecurityLogo} alt="logo" />
        <div className="item-content">
          <h1 className='item-title'>diretoria de segurança</h1>
          <p className="item-description">Finalidade de planejar, coordenar, executar e avaliar a segurança patrimonial. É constituída apenas pela Divisão Operacional que compete em: orientar as diversas unidades da UFRN em assuntos de segurança, coordenar as ações pertinentes à segurança, executar medidas de segurança em sua forma presencial e ostensiva, por meio de equipamentos eletrônicos de proteção e de monitoramento. </p>
        </div>
      </div>



      <div className="item-DiretCoord">
        <Link to="/compras" className='link-DiretCoord'>
          <img src={ShopeLogo} alt="logo" />
          <div className="item-content">
            <h1 className='item-title'>diretoria de compras</h1>
            <p className="item-description">Tem como finalidade planejar, coordenar e executar as aquisições de bens e contratações de serviços institucionais no âmbito nacional e internacional. A unidade é constituída pela Direção, Divisão de Fase Interna de Compras, Divisão de Fase Externa de Compras e Divisão de Planejamento e Gerenciamento de Compras.”</p>
          </div>
        </Link>
      </div>

      <div className="item-DiretCoord">
        <img src={ContractLogo} alt="logo" />
        <div className="item-content">
          <h1 className='item-title'>diretoria de contratos</h1>
          <p className="item-description">Possui a finalidade de planejar, acompanhar a execução físico-financeira e coordenar a fiscalização administrativa dos contratos de obras e serviços de engenharia, cessão patrimonial e de serviços de natureza continuada, em consonância com as políticas e diretrizes de governança em contratações e aquisições regulamentadas pelo Conselho de Administração da UFRN. É constituída por: Divisão de Formalização e Acompanhamento de Contratos, e  Divisão de Fiscalização de Contratos.</p>
        </div>
      </div>

      <div className="item-DiretCoord">
        <img src={Logistic} alt="logo" />
        <div className="item-content">
          <h1 className='item-title'>diretoria de Logistica</h1>
          <p className="item-description">Responsável por coordenar as ações pertinentes às áreas de administração financeira, patrimonial, licitações, contratos, convênios, logística, gestão da informação e serviços gerais. Possui a finalidade de realizar o controle patrimonial dos bens móveis e imóveis e a gerência física e contábil dos almoxarifados de suprimentos de material de consumo e de manutenção de obras. É constituída por:  Divisão de Controle e Registro Contábil, Divisão de Patrimônio, Divisão de Almoxarifado Central e Divisão de Almoxarifado de Manutenção.</p>
        </div>
      </div>

    </div>

  );


  const coordenadoriasContent = (
    <div className="itens-DiretCoord">

      <div className="item-DiretCoord">
        <img src={CashLogo} alt="logo" />
        <div className="item-content">
          <h1 className='item-title'>Convênios</h1>
          <p className="item-description">É responsável por supervisionar as atividades relacionadas à execução, ao controle e à prestação de contas de convênios, parcerias ou congêneres. Emitir parecer técnico sobre a viabilidade de execução financeira das despesas contidas no plano de trabalho de convênios, parcerias ou congêneres firmados pela universidade, no que couber.  </p>
        </div>
      </div>

      <div className="item-DiretCoord">
        <img src={SecurityLogo} alt="logo" />
        <div className="item-content">
          <h1 className='item-title'>Transportes</h1>
          <p className="item-description">É responsável por coordenar a gestão da frota de veículos de uso comum e de uso institucional, em conformidade com a legislação aplicável ao uso de veículos oficiais, bem com as normas internas complementares emanadas pela Reitoria. </p>
        </div>
      </div>


      <div className="item-DiretCoord">
        <img src={ShopeLogo} alt="logo" />
        <div className="item-content">
          <h1 className='item-title'>Gestão da Informação</h1>
          <p className="item-description">É responsável por  planejar, coordenar e organizar o sistema de arquivos da UFRN em sua forma documental e eletrônica, bem como os serviços de correspondência, de comunicação com a comunidade externa à UFRN e de segurança da informação.  </p>
        </div>
      </div>

      <div className="item-DiretCoord">
        <img src={ContractLogo} alt="logo" />
        <div className="item-content">
          <h1 className='item-title'>Espaços Físicos Comuns</h1>
          <p className="item-description">É responsável por receber e coordenar as solicitações de autorização de uso dos espaços físicos comuns da UFRN, fazendo o registro e controle das reservas e dos eventuais pagamentos, bem como a comunicação com os setores de aula, de concursos e da segurança patrimonial.</p>
        </div>
      </div>

      <div className="item-DiretCoord">
        <img src={Logistic} alt="logo" />
        <div className="item-content">
          <h1 className='item-title'>Administrativa</h1>
          <p className="item-description">É responsável por inserir e acompanhar dados nos sistemas de informação e de gestão, manter disponíveis materiais de consumo e equipamentos, controlar o protocolo, a tramitação interna, a distribuição e a expedição de processos e documentos.</p>
        </div>
      </div>

      <a onClick={() => openModal(
        'SCDP ', <>
        <p>SCDP - Sistema de Concessão de Diárias e Passagens</p>
        <h1></h1>
        <h1 className='titulo-atendimento'>EQUIPE</h1>
          Ricardo <br/>
          Jorge<br/>
          Marcelino<br/>
          Josenilma<br/>
          Priscila<br/>
      </>
      )}>



        <div className="item-DiretCoord">
          <img src={Logistic} alt="logo" />
          <div className="item-content">
            <h1 className='item-title'>Sistema de Concessão de Diárias e Passagens</h1>
            <p className="item-description">É responsavel por...
            Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            
            </p>
          </div>
        </div>
      </a>

    </div>
  );

  return (
    <section className="DiretCoord" style={{ background: fundoDiretoriaStyle }}>
      <div className="container-DiretCoord">
        <div className="header-DiretCoord">
          <p onClick={() => setIsDiretoria(true)} className={`link-DiretCoord ${isDiretoria ? 'active' : ''}`}>
            Diretorias
          </p>
          <p onClick={() => setIsDiretoria(false)} className={`link-DiretCoord ${isDiretoria ? '' : 'active'}`}>
            Coordenadorias
          </p>
        </div>

        {isDiretoria ? diretoriaContent : coordenadoriasContent}
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
    </section>
  );
};

export default DiretoriasCoord;
