import { Menu, Dropdown, Button } from 'antd';
import { BarsOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Modal } from 'antd';
import logoProad from '../../assets/Menu/LogoPROAD.svg'
import './MenuMobile.css'
import DocumentosItem from '../../components/Dcom/Banner/DocumentosItem/DocumentosItem'


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
      <Menu.Item key="4"> <a onClick={() => openModal(
        'QUEM SOMOS', <>
        <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
        </p>
      </>
      )}>QUEM SOMOS</a></Menu.Item>

      <SubMenu key="sub2" title="CONTATO">
        <Menu.Item key="2.1">
          <a onClick={() => openModal(
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
