import './Menu.css'
import logoProad from '../../assets/Menu/LogoPROAD.svg'
import arrow from '../../assets/Menu/ArrowMenu.svg'

const Menu = () => {
    return (
        <div className="menu">
            <ul className='menuLinks'>
                <li><a href='#'>INÍCIO</a></li>
                    <li id='dropdown'><a href='#'>INSTITUICIONAL <img id="dropdownArrow" src={arrow}></img></a></li>
                        <ul className='dropdownMenu'>
                            <li><a href='#'>EXEMPLO 1</a></li>
                            <li><a href='#'>EXEMPLO 2</a></li>
                            <li><a href='#'>EXEMPLO 3</a></li>
                            <li><a href='#'>EXEMPLO 4</a></li>
                        </ul>
                <li><a href='#'>NOTÍCIAS</a></li>
            </ul>
            <img src={logoProad} alt='Logo Proad'></img>
            <ul className='menuLinks'>
                <li><a href='#'>DOCUMENTOS</a></li>
                <li><a href='#'>QUEM SOMOS</a></li>
                <li><a href='#'>CONTATO</a></li>
            </ul>
        </div>
    );
}

export default Menu;