import React from 'react'
import './Contato.css'
import whatsapp from '../../assets/Contato/whatsapp.svg'
import mail from '../../assets/Contato/EmailIcon.svg'
import tel from '../../assets/Contato/TelIcon.svg'
import instagram from '../../assets/Contato/Instagram.png'

const Contato = () => {
    return (
        <div className='contato' id='contato'>
            <h1 className='titulo'>CONTATO</h1>
            <div className='parent'>

                <div className='div1'>
                    <div className='bloco-contatos'>
                    <span className='subtitulo'>Telefones</span> <br />
                        <div className='contatos'>
                            <img src={tel} alt='Telefone'></img>
                            <a className='subtitulo'>(84) 3342-2328</a>
                        </div>

                        <div className='contatos'>
                            <img src={whatsapp} alt='Whatsapp'></img>
                            <a className='subtitulo' target="_blank" rel="noopener" href="https://wa.me/5584991936022">(84) 99193-6022</a>
                        </div>

                        <span className='subtitulo'>Email</span> <br />
                        <div className='contatos'>
                            <img src={mail} alt='Email'></img>
                            <a className='subtitulo' href="mailto:secretariaproad@reitoria.ufrn.br">secretariaproad@reitoria.ufrn.br</a>
                        </div>

                        <span className='subtitulo'>Instagram</span> <br />
                        <div className='contatos'>
                            <img src={instagram} alt='Instagram'></img>
                            <a className='subtitulo' href="https://www.instagram.com/proadufrn/">proadufrn</a>
                        </div>
                    </div>

                </div>

                <div className='div2'>
                    <span className='subtitulo'>Localização</span> <br />
                    <p className='localizacao'>Centro da Reitoria <br />
                        Campus Universitário Lagoa Nova, CEP 59078-970 | Natal/RN - Brasil
                    </p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.559750750371!2d-35.205610630617!3d-5.838775640967804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff9d0d533939%3A0x74e83eb2d823dfd5!2sReitoria%20da%20UFRN!5e0!3m2!1spt-BR!2sbr!4v1684819008626!5m2!1spt-BR!2sbr" title='mapa' className='mapaReitoria' width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Contato;