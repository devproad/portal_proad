import './ContatoModal.css'
import email from '../../../assets/Contato/EmailIcon.svg'
import whatsapp from '../../../assets/Contato/whatsapp.svg'

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
                    <a href={"https://wa.me/55" + props.telefone.replace(/\D/g, "")}>
                        {props.telefone}
                    </a>
                </div>
            }


        </div>



    );
}

export default ContatoModal;


// João Paulo Paiva
// E-mail: direcao@compras.ufrn.br / joao.paulo.paiva@ufrn.br
// Telefone/WhatsApp: (84)99480-6899