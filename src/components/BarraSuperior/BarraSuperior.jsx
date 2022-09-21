import { React } from 'react'
import './BarraSuperior.css'
import constrastIcon from '../../assets/BarraSuperior/IconContrast.svg'
import zoomMinus from '../../assets/BarraSuperior/IconMinus.svg'
import zoomPlus from '../../assets/BarraSuperior/IconPlus.svg'
import iconSearch from '../../assets/BarraSuperior/IconSearch.svg'
import font from '../../assets/BarraSuperior/IconFont.svg'

const BarraSuperior = (props) => {
    const barraSuperior = Array.from(document.getElementsByClassName('barraSuperior'));
    const imagens = Array.from(document.getElementsByClassName('imgConstraste'));
    if(props.isDark === true){
        barraSuperior.forEach((item) => {
            item.style = 'background: #303030;'
        })
        imagens.forEach((item) => {   
         item.style = 'filter: invert(100%);'      
    })
    }else{
        barraSuperior.forEach((item) => {
            item.style = 'background:  #ffffff;'
        })
        imagens.forEach((item) => {
            item.style = 'filter: invert(0%);'
        })
    }

    return (
        <div className="barraSuperior">
                <div className='centralizado'>
                    <a id='alto_constraste'  onClick={props.toggleTheme}>
                        <img src={constrastIcon} className="IconeContraste imgConstraste" alt="Alto Constraste"></img>
                    </a>

                    <div className='barraPesquisa'>
                        <a href='/'>
                        <img src={iconSearch} className="iconeBuscar" alt="Botão Busca"></img>
                        </a>
                        <input type="text" placeholder="Pesquise aqui" />
                    </div>

                    <a href='/' id='fonteMenos'>
                        <img src={zoomMinus} className="fonteMenos imgConstraste" alt="Fonte Menos"></img>
                    </a>
                    
                    <img src={font} className="fonte imgConstraste" alt="Fonte"></img>

                    <a href='/' id='fonteMais'>
                        <img src={zoomPlus} className="fonteMais imgConstraste" alt="Fonte Mais"></img>
                    </a>
            </div>
        </div>
    );
}

export default BarraSuperior;