import React from 'react'
import './Equipe.css'
import perfil from '../../assets/Equipe/perfil.png'
import perfil2 from '../../assets/Equipe/perfil2.png'
import perfil3 from '../../assets/Equipe/perfil3.png'
import perfil4 from '../../assets/Equipe/perfil4.png'

const Equipe = () => {
    return (
        <div className='equipe'>

            <h1 className='tituloEquipe'>EQUIPE</h1>
            
            <div className='gridEquipe'>
                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={perfil} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Lorem <br/> Ipsum</h1>
                    <span className='cargoEquipe'>Bolsista</span>
                    <p className='descEquipe'>Graduando em Engenharia da Computação</p>
                    <span className='emailEquipe'><a href="mailto:#">loremipsum@ufrn.br</a></span>
                </div>

                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={perfil2} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Lorem <br/> Ipsum</h1>
                    <span className='cargoEquipe'>Bolsista</span>
                    <p className='descEquipe'>Graduando em Engenharia da Computação</p>
                    <span className='emailEquipe'><a href="mailto:#">loremipsum@ufrn.br</a></span>
                </div>

                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={perfil3} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Lorem <br/> Ipsum</h1>
                    <span className='cargoEquipe'>Bolsista</span>
                    <p className='descEquipe'>Graduando em Engenharia da Computação</p>
                    <span className='emailEquipe'><a href="mailto:#">loremipsum@ufrn.br</a></span>
                </div>

                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={perfil4} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Lorem <br/> Ipsum</h1>
                    <span className='cargoEquipe'>Bolsista</span>
                    <p className='descEquipe'>Graduando em Engenharia da Computação</p>
                    <span className='emailEquipe'><a href="mailto:#">loremipsum@ufrn.br</a></span>
                </div>        

                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={perfil} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Lorem <br/> Ipsum</h1>
                    <span className='cargoEquipe'>Bolsista</span>
                    <p className='descEquipe'>Graduando em Engenharia da Computação</p>
                    <span className='emailEquipe'><a href="mailto:#">loremipsum@ufrn.br</a></span>
                </div>

                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={perfil2} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Lorem <br/> Ipsum</h1>
                    <span className='cargoEquipe'>Bolsista</span>
                    <p className='descEquipe'>Graduando em Engenharia da Computação</p>
                    <span className='emailEquipe'><a href="mailto:#">loremipsum@ufrn.br</a></span>
                </div>

                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={perfil3} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Lorem <br/> Ipsum</h1>
                    <span className='cargoEquipe'>Bolsista</span>
                    <p className='descEquipe'>Graduando em Engenharia da Computação</p>
                    <span className='emailEquipe'><a href="mailto:#">loremipsum@ufrn.br</a></span>
                </div>

                <div className='itemEquipe'>
                    <img className='perfilEquipe' src={perfil4} alt='perfil'></img>
                    <h1 className='nomeEquipe'>Lorem <br/> Ipsum</h1>
                    <span className='cargoEquipe'>Bolsista</span>
                    <p className='descEquipe'>Graduando em Engenharia da Computação</p>
                    <span className='emailEquipe'><a href="mailto:#">loremipsum@ufrn.br</a></span>
                </div>                          

            </div>

        </div>
    );
}

export default Equipe;