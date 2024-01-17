import React from 'react'
import './Equipe.css'

import chianc from '../../../assets/Equipe/chianclima.jpeg'
import adrielly from '../../../assets/Equipe/adriellynunes.jpeg'
import thiago from '../../../assets/Equipe/thiagocorreia.jpeg'
import joao from '../../../assets/Equipe/joaopaulo.jpeg'
import adriana from '../../../assets/Equipe/adrianacardoso.jpeg'
import daniel from '../../../assets/Equipe/danieloliveira.jpeg'


const Equipe = () => {
    return (
        <div className='equipe'>

            <h1 className='tituloEquipe'>EQUIPE DE GESTORES</h1>

            <div className='gridEquipe'>
                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={joao} alt='perfil'></img>
                    <h1 className='nomeEquipe'>João Paulo Paiva</h1>
                    <span className='cargoEquipe'>Diretor de Compras</span>
                </div>

                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={chianc} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Chianc Leocádio</h1>
                    <span className='cargoEquipe'>Diretor (Substituto) <br/> Chefe da DFI</span>
                </div>

                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={thiago} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Thiago Correia</h1>
                    <span className='cargoEquipe'>Chefe da  DFI (Substituto)</span>
                </div>

                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={daniel} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Daniel Oliveira</h1>
                    <span className='cargoEquipe'>Chefe da DPGC</span>
                </div>

                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={adrielly} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Adrielly Nunes</h1>
                    <span className='cargoEquipe'>Chefe da DPGC (Substituta)</span>
                </div>

                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={adriana} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Adriana Cardoso</h1>
                    <span className='cargoEquipe'>Chefe da DFE</span>
                </div>

            </div>



        </div>
    );
}

export default Equipe;