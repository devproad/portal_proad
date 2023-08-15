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
        <Menu.Item key="1.1">EXEMPLO 1</Menu.Item>
        <Menu.Item key="1.2">EXEMPLO 2</Menu.Item>
        <Menu.Item key="1.3">EXEMPLO 3</Menu.Item>
        <Menu.Item key="1.4">EXEMPLO 4</Menu.Item>
      </SubMenu>
      <Menu.Item key="1">NOTÍCIAS</Menu.Item>
      <Menu.Item key="4">  <a onClick={() => openModal(
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
      <Menu.Item key="3">QUEM SOMOS</Menu.Item>
      <Menu.Item key="4">CONTATO</Menu.Item>
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
