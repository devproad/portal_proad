import './Menu.css'
import logoProad from '../../assets/Menu/LogoPROAD.svg'
import arrow from '../../assets/Menu/ArrowMenu.svg'
import { Link} from 'react-router-dom';
const Menu = (props) => {
    const textos = Array.from(document.querySelectorAll('.menuLinks a'));
    const dropdownMenu = Array.from(document.querySelectorAll('.dropdownMenu'));
    const dropdownArrow = Array.from(document.querySelectorAll('#dropdownArrow'));
    const logo = Array.from(document.querySelectorAll('.logoProad'));
    if(props.isDark === true){
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
        item.style =  'filter: brightness(175%);'
    })
    }else{
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
            item.style =  'filter: brightness(100%);'
        })
    }


    return (
        <div className="menu">
            <ul className='menuLinks'>
                <li><Link to='/'>INÍCIO</Link></li>
                    <li id='dropdown'><a href='#'>INSTITUICIONAL <img id="dropdownArrow" src={arrow}></img></a></li>
                        <ul className='dropdownMenu'>
                            <li><a href='#'>EXEMPLO 1</a></li>
                            <li><a href='#'>EXEMPLO 2</a></li>
                            <li><a href='#'>EXEMPLO 3</a></li>
                            <li><a href='#'>EXEMPLO 4</a></li>
                        </ul>
                <li><a href='#'>NOTÍCIAS</a></li>
            </ul>
            <img src={logoProad} alt='Logo Proad' className='logoProad'></img>
            <ul className='menuLinks'>
                <li><a href='#'>DOCUMENTOS</a></li>
                <li><a href='#'>QUEM SOMOS</a></li>
                <li><a href='#'>CONTATO</a></li>
            </ul>
        </div>
    );
}

export default Menu;