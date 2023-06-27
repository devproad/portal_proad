import React from 'react'
import './Contato.css'
import whatsapp from '../../../assets/Contato/whatsapp.svg'
import mail from '../../../assets/Contato/EmailIcon.svg'
import tel from '../../../assets/Contato/TelIcon.svg'

const Contato = () => {
    return (
        <div className='contato' id='contato'>
            <h1 className='titulo'>CONTATO</h1>
            <div className='parent'>

                <div className='div1'>
                    <div className='bloco-contatos'>
                        <span className='subtitulo'>Whatsapp</span> <br />

                        <div className='contatos'>
                            <img src={whatsapp} alt='Whatsapp'></img>
                            <a className='subtitulo' href="https://wa.me/5584994806899">(84) 99480-6899 (Direção)</a> 
                        </div>

                        <div className='contatos'>
                            <img src={whatsapp} alt='Whatsapp'></img>
                            <a className='subtitulo' href="https://wa.me/5584994216182">(84) 99421-6182 (DFI)</a>
                        </div>
                        
                        <div className='contatos'>
                            <img src={whatsapp} alt='Whatsapp'></img>
                            <a className='subtitulo' target="_blank" rel="noopener" href="https://wa.me/5584991936375">(84) 99193-6375 (DFE)</a> 
                        </div>

                        <div className='contatos'>
                            <img src={whatsapp} alt='Whatsapp'></img>
                            <a className='subtitulo' target="_blank" rel="noopener" href="https://wa.me/5584992045432">(84) 99204-5432 (DPGC)</a> 
                        </div>

                        <span className='subtitulo'>Email</span> <br />
                        <div className='contatos'>
                            <img src={mail} alt='Email'></img>
                            <a className='subtitulo' href="mailto:diretoriacomprasufrn@gmail.com">diretoriacomprasufrn@gmail.com</a>
                        </div>
                    </div>

                </div>

                <div className='div2'>
                    <span className='subtitulo'>Localização</span> <br />
                    <p className='localizacao'>
                    Campus Universitário Lagoa Nova, CEP 59078-970 | Natal/RN - Brasil
                    </p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3969.1223104915357!2d-35.2061421033188!3d-5.838379100689283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff833a9ec07d%3A0x1e056f6104c0de5a!2sDiretoria%20de%20Compras%20%2F%20Diretoria%20de%20Log%C3%ADstica%20-%20UFRN!5e0!3m2!1spt-BR!2sbr!4v1685602638950!5m2!1spt-BR!2sbr" title='mapa' className='mapaReitoria' width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contato;