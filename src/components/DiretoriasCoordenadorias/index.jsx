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
          <a href="">Diretorias</a>
          <a href="">Coordenadorias</a>
        </div>  
        <div className="itens-DiretCoord">
          <div className="item-DiretCoord">
            <img src={CashLogo} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>Diretoria de Contabilidade</h1>
              <p className="item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet in eos laudantium architecto quaerat, nesciunt, placeat optio labore distinctio maiores odit vitae ratione. Quam veritatis sit assumenda. Quaerat, quia suscipit.</p>
            </div>
          </div>
          <div className="item-DiretCoord">
            <img src={Logistic} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>diretoria de Logistica</h1>
              <p className="item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet in eos laudantium architecto quaerat, nesciunt, placeat optio labore distinctio maiores odit vitae ratione. Quam veritatis sit assumenda. Quaerat, quia suscipit.</p>
            </div>
          </div>
          <Link to="/dcom" className='link-DiretCoord'>
          <div className="item-DiretCoord">
            <img src={ShopeLogo} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>diretoria de compras</h1>
              <p className="item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet in eos laudantium architecto quaerat, nesciunt, placeat optio labore distinctio maiores odit vitae ratione. Quam veritatis sit assumenda. Quaerat, quia suscipit.</p>
            </div>
          </div>
          </Link>
          <div className="item-DiretCoord">
            <img src={ContractLogo} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>diretoria de contratos</h1>
              <p className="item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet in eos laudantium architecto quaerat, nesciunt, placeat optio labore distinctio maiores odit vitae ratione. Quam veritatis sit assumenda. Quaerat, quia suscipit.</p>
            </div>
          </div>
          <div className="item-DiretCoord">
            <img src={SecurityLogo} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>diretoria de segurança</h1>
              <p className="item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet in eos laudantium architecto quaerat, nesciunt, placeat optio labore distinctio maiores odit vitae ratione. Quam veritatis sit assumenda. Quaerat, quia suscipit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}