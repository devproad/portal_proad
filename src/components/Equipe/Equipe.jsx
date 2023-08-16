import React from 'react'
import './Equipe.css'
import maria from '../../assets/Equipe/mariacarmo.png'
import izabel from '../../assets/Equipe/izabelmedeiros.png'

const Equipe = () => {
    return (
        <div className='equipe'>

            <h1 className='tituloEquipe'>EQUIPE</h1>

            <div className='gridEquipePROAD'>

                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={maria} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Maria do Carmo</h1>
                    <span className='cargoEquipe'>Pró-Reitora</span>
                    <span className='descEquipe'>Mestre em Gestão Pública</span>
                    <span className='emailEquipe'><a href='mailto:mariadocarmo@reitoria.ufrn.br'>mariadocarmo@reitoria.ufrn.br</a></span>

                </div>

                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={izabel} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Professora Izabel</h1>
                    <span className='cargoEquipe'>Pró-Reitora Adjunta</span>
                    
                    <span className='descEquipe'>Mestre em Ciências Contábeis</span>

                    <span className='emailEquipe'><a href='mailto:izabel.coelho@reitoria.ufrn.br'>izabel.coelho@reitoria.ufrn.br</a></span>
                </div>
            </div>

        </div>
    );
}

export default Equipe;