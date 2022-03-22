import React from 'react'
import './BarraSuperior.css'
import constrastIcon from '../../assets/BarraSuperior/IconContrast.svg'
import zoomMinus from '../../assets/BarraSuperior/IconMinus.svg'
import zoomPlus from '../../assets/BarraSuperior/IconPlus.svg'
import iconSearch from '../../assets/BarraSuperior/IconSearch.svg'
import font from '../../assets/BarraSuperior/IconFont.svg'

const BarraSuperior = () => {
    return (
        <div className="barraSuperior">
                <div className='centralizado'>
                    <a href='#' id='alto_constraste'>
                        <img src={constrastIcon} className="IconeContraste" alt="Alto Constraste"></img>
                    </a>

                    <div className='barraPesquisa'>
                        <a href='#'>
                        <img src={iconSearch} className="iconeBuscar" alt="Botão Busca"></img>
                        </a>
                        <input type="text" placeholder="Pesquise aqui" />
                    </div>

                    <a href='#' id='fonteMenos'>
                        <img src={zoomMinus} className="fonteMenos" alt="Fonte Menos"></img>
                    </a>
                    
                    <img src={font} className="fonte" alt="Fonte"></img>

                    <a href='#' id='fonteMais'>
                        <img src={zoomPlus} className="fonteMais" alt="Fonte Mais"></img>
                    </a>
            </div>
        </div>
    );
}

export default BarraSuperior;