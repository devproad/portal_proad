import React from 'react'
import './Banner.css'
import logoProad from '../../../assets/Banner/Logo_Proad.svg'
import arrow from '../../../assets/Banner/Arrow.svg'
import logoUfrn from '../../../assets/Banner/Logo_UFRN.svg'
import facebook from '../../../assets/Banner/facebook.svg'
import instagram from '../../../assets/Banner/instagram.svg'
import linkedin from '../../../assets/Banner/linkedin.svg'

const Banner = () => {
    return (
        <div className='bannerDcom'>
            <div className='bannerTopo'>
                <div className='bannerMenu'>
                 <img src={logoUfrn} alt="UFRN"></img>
                    <div className='bannerMenuRedes'>
                    
                        <a href='https://www.instagram.com/proadufrn/'>
                            <img src={instagram} alt="Instagram"></img>
                        </a>
                
                    </div>  
                </div>

            </div>

            <div className='bannerLadoEsquerdo'>
                <h1>Diretoria de Compras</h1>
                <p className='bannerDescricao'>A Diretoria de Compras coordena os processos de aquisições e contratações nacionais e internacionais no âmbito da Universidade Federal do Rio Grande do Norte (UFRN), e tem como missão “promover soluções em compras institucionais”.</p>
               
                <div className='botoes'>
                    <button id='btnQuemSomos'>     
                        <a href='#'>Quem Somos</a>
                    </button>

                    <button id='btnContato'>
                        <a href='#'>Contato</a> 
                    </button>
                </div>
            </div>

            <div className='bannerLadoDireito'>
                <div className='bannerLogo'>
                </div>
            </div>

            <div className='bannerBase'>
                <a href='#menu'>
                    <img className='arrowImage' src={arrow} alt="Seta" width={20}></img>
                </a>
            </div>
        </div>
    );
}

export default Banner;