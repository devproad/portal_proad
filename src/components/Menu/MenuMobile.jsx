import { Menu, Dropdown, Button } from 'antd';
import {  BarsOutlined } from '@ant-design/icons';
import logoProad from '../../assets/Menu/LogoPROAD.svg'
import './MenuMobile.css'
const { SubMenu } = Menu;

const menu = (
  <Menu>
     <SubMenu key="sub1"  title="INSTITUICIONAL">
        <Menu.Item key="1.1">EXEMPLO 1</Menu.Item>
        <Menu.Item key="1.2">EXEMPLO 2</Menu.Item>
        <Menu.Item key="1.3">EXEMPLO 3</Menu.Item>
        <Menu.Item key="1.4">EXEMPLO 4</Menu.Item>
    </SubMenu>
    <Menu.Item key="1">NOTÍCIAS</Menu.Item>
    <Menu.Item key="2">DOCUMENTOS</Menu.Item>
    <Menu.Item key="3">QUEM SOMOS</Menu.Item>
    <Menu.Item key="4">CONTATO</Menu.Item>
  </Menu>
);

const Navbar = () => {
  return (
    <div className="menuMobile">

      <div className='menu-bloco'>
      
      <Dropdown overlay={menu} trigger={['click']}>
        <Button type="text" icon={<BarsOutlined style={{ fontSize: '28px', color: '#08c' }} />} className="mobile-menu-button" />
        </Dropdown>

      <img src={logoProad} alt='Logo Proad' className='logoProadMobile'></img>
      </div>
    </div>
  );
};

export default Navbar;
