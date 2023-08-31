import './ContatoModal.css'
import email from '../../../assets/Contato/EmailIcon.svg'
import whatsapp from '../../../assets/Contato/whatsapp.svg'
import telefone from '../../../assets/Contato/TelIcon.svg'

const ContatoModal = (props) => {
    return (
        <div className="contatoModal">
            <h1>{props.nome}</h1>

            {props.emailPrimario &&
                <div className="contatosModal">
                    <img src={email} />
                    <a href={"mailto:" + props.emailPrimario}>
                        {props.emailPrimario}
                    </a>
                </div>
            }

            {props.emailSecundario &&
                <div className="contatosModal">
                    <img src={email} />
                    <a href={"mailto:" + props.emailSecundario}>
                        {props.emailSecundario}
                    </a>
                </div>
            }

            {props.telefone &&
                <div className="contatosModal">
                    <img src={whatsapp} />
                    <a target='_blank' rel='noopener' href={"https://wa.me/55" + props.telefone.replace(/\D/g, "")}>
                        {props.telefone}
                    </a>
                </div>
            }

            {props.telefoneSecundario &&
                <div className="contatosModal">
                    <img src={whatsapp} />
                    <a target='_blank' rel='noopener' href={"https://wa.me/55" + props.telefoneSecundario.replace(/\D/g, "")}>
                        {props.telefoneSecundario}
                    </a>
                </div>
            }

            {props.telefoneFixo && (
                <div className="contatosModal">
                    <img src={telefone} />
                    <span>{props.telefoneFixo}</span>
                   
                </div>
            )}


        </div>



    );
}

export default ContatoModal;
