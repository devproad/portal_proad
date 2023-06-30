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
