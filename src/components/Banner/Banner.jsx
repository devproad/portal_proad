import React from 'react'
import './Banner.css'
import logoProad from '../../assets/Banner/Logo_Proad.svg'
import arrow from '../../assets/Banner/Arrow.svg'
import logoUfrn from '../../assets/Banner/Logo_UFRN.svg'
import facebook from '../../assets/Banner/facebook.svg'
import instagram from '../../assets/Banner/instagram.svg'
import linkedin from '../../assets/Banner/linkedin.svg'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='bannerTopo'>
                <div className='bannerMenu'>
                 <img src={logoUfrn} alt="UFRN"></img>
                    <div className='bannerMenuRedes'>
                        <a href='#'>
                            <img src={facebook} alt="Facebook"></img>
                        </a>
                    
                        <a href='#'>
                            <img src={instagram} alt="Instagram"></img>
                        </a>
                    
                        <a href='#'> 
                            <img src={linkedin} alt="linkedin"></img>
                        </a>
                    </div>  
                </div>

            </div>

            <div className='bannerLadoEsquerdo'>
                <h1>Pró-Reitoria de Administração da UFRN</h1>
                <p>Sendo diretamente subordinada à Reitoria, a PROAD é um órgão responsável pela supervisão e coordenação das áreas de contabilidade, finanças, material, patrimônio, segurança, transportes, gestão da informação e contratos administrativos da UFRN. Emite pareceres sobre assuntos de sua competência, delega as atribuições aos servidores envolvidos nas ações da Pró-Reitoria. É subdividida por diretorias e coordenadorias que cada uma com sua função específica consegue administrar a universidade buscando sempre o êxito. </p>
               
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
                <img  src={logoProad} alt="Logo Proad" />
                </div>
            </div>

            <div className='bannerBase'>
                <a href='#'>
                    <img className='arrowImage' src={arrow} alt="Seta" width={20}></img>
                </a>
            </div>
        </div>
    );
}

export default Banner;