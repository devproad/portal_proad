import './DiretoriasCoord.css'
import CashLogo from '../../assets/DiretoriasCoordenadorias/CashLogo.svg'
import Logistic from '../../assets/DiretoriasCoordenadorias/Logistic.svg'
import SecurityLogo from '../../assets/DiretoriasCoordenadorias/SecurityLogo.svg'
import ShopeLogo from '../../assets/DiretoriasCoordenadorias/ShopLogo.svg'
import ContractLogo from '../../assets/DiretoriasCoordenadorias/ContractLogo.svg'
import{Link} from "react-router-dom"

export default function DiretoriasCoord(){

  return(
    <section className="DiretCoord">
      <div className="container-DiretCoord">
        <div className="header-DiretCoord">
        <Link to="/" className='link-DiretCoord'>
          <p>Diretorias</p>
          </Link>
          <Link to="/Coord" className='link-DiretCoord'>
          <p className=''>Coordenadorias</p>
          </Link>
        </div>  
        <div className="itens-DiretCoord">
          <div className="item-DiretCoord">
            <img src={CashLogo} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>Convênios</h1>
              <p className="item-description">É responsável por supervisionar as atividades relacionadas à execução, ao controle e à prestação de contas de convênios, parcerias ou congêneres. Emitir parecer técnico sobre a viabilidade de execução financeira das despesas contidas no plano de trabalho de convênios, parcerias ou congêneres firmados pela universidade, no que couber.  </p>
            </div>
          </div>
          <div className="item-DiretCoord">
            <img src={SecurityLogo} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>Transportes</h1>
              <p className="item-description">É responsável por coordenar a gestão da frota de veículos de uso comum e de uso institucional, em conformidade com a legislação aplicável ao uso de veículos oficiais, bem com as normas internas complementares emanadas pela Reitoria. </p>
            </div> 
          </div>
          
          <Link to="/compras" className='link-DiretCoord'>
          <div className="item-DiretCoord">
            <img src={ShopeLogo} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>Gestão da Informação</h1>
              <p className="item-description">É responsável por  planejar, coordenar e organizar o sistema de arquivos da UFRN em sua forma documental e eletrônica, bem como os serviços de correspondência, de comunicação com a comunidade externa à UFRN e de segurança da informação.  </p>
            </div>
          </div>
          </Link>
          <div className="item-DiretCoord">
            <img src={ContractLogo} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>Espaços Físicos Comuns</h1>
              <p className="item-description">É responsável por receber e coordenar as solicitações de autorização de uso dos espaços físicos comuns da UFRN, fazendo o registro e controle das reservas e dos eventuais pagamentos, bem como a comunicação com os setores de aula, de concursos e da segurança patrimonial.</p>
            </div>
          </div>
          <div className="item-DiretCoord">
            <img src={Logistic} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>Administrativa</h1>
              <p className="item-description">É responsável por inserir e acompanhar dados nos sistemas de informação e de gestão, manter disponíveis materiais de consumo e equipamentos, controlar o protocolo, a tramitação interna, a distribuição e a expedição de processos e documentos.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}