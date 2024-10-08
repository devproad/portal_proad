import './ContatoModal.css'
import email from '../../../assets/Contato/EmailIcon.svg'
import whatsapp from '../../../assets/Contato/whatsapp.svg'

const contatoModalHorizontal = (props) => {
    return (
        <div className="contatoModalHorizontal">
            <h1>{props.nome}</h1>


            {props.emailPrimario &&
                <div className="contatosModalHorizontal">
                    <img src={email} />
                    <a href={"mailto:" + props.emailPrimario}>
                        {props.emailPrimario}
                    </a>
                </div>
            }


            {props.emailSecundario &&
                <div className="contatosModalHorizontal">
                    <img src={email} />
                    <a href={"mailto:" + props.emailSecundario}>
                        {props.emailSecundario}
                    </a>
                </div>
            }

            {props.telefone &&
                <div className="contatosModalHorizontal">
                    <img src={whatsapp} />
                    <a target="_blank" rel="noopener" href={"https://wa.me/55" + props.telefone.replace(/\D/g, "")}>
                        {props.telefone}
                    </a>
                </div>
            }

            {props.telefoneSecundario &&
                <div className="contatosModalHorizontal">
                    <img src={whatsapp} />
                    <a target="_blank" rel="noopener" href={"https://wa.me/55" + props.telefoneSecundario.replace(/\D/g, "")}>
                        {props.telefoneSecundario}
                    </a>
                </div>
            }


        </div>



    );
}

export default contatoModalHorizontal;
