import React from 'react'
import './Contato.css'
import formImage from '../../assets/Contato/DrawForm.svg'
import mail from '../../assets/Contato/EmailIcon.svg'
import tel from '../../assets/Contato/TelIcon.svg'

const Contato = () => {
    return (
        <div className='contato' id='contato'>
            <h1 className='titulo'>CONTATO</h1>
            <div className='parent'>
                <div className='div1'>                   

                    <form>
                    <div className='contatos'>
                        <img src={tel} alt='Email'></img> 
                        <span className='subtitulo'>(84) 3215-3305 / 3208</span> <br/>
                    </div>

                    <div className='contatos'>
                        <img src={mail} alt='Email'></img>
                        <a className='subtitulo' href="mailto:secretariaproad@reitoria.ufrn.br">secretariaproad@reitoria.ufrn.br</a>
                    </div>
                    
                        <label>Nome</label> <br/>
                        <input type="text" /> <br/>
                        <label>Email</label> <br/>
                        <input type="text" />  <br/>
                        <label>Assunto</label> <br/>
                        <input type="text" />  <br/>
                        <label>Mensagem</label> <br/>
                        <textarea></textarea> <br/>
                        <button id='btn_cancelar'>Cancelar</button>
                        <button id='btn_enviar'>Enviar</button>
                    </form>
                </div>

                <div className='div2'>
                         <span className='subtitulo'>Localização</span> <br/>
                        <p className='localizacao'>Centro da Reitoria <br/>
                        Campus Universitário Lagoa Nova, CEP 59078-970 | Natal/RN - Brasil
                        </p>
                    <img src={formImage} className='imagemForm' alt='Imagem do formulário'></img>
                </div>
            </div>
        </div>
    );
}

export default Contato;