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
              <p className="item-description">É um órgão central do sistema de administração financeira e contábil 
              da Universidade. Responsável por assessorar o Reitor em assuntos administrativos,  
              constitui-se pela divisão de Administração Financeira, que se subdivide em: Setor 
              de Execução Orçamentária, Setor de Análise e Liquidação de Despesa, e Setor de Finanças; </p>
            </div>
          </div>
          <div className="item-DiretCoord">
            <img src={SecurityLogo} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>diretoria de segurança</h1>
              <p className="item-description">Finalidade de planejar, coordenar, executar e avaliar a segurança patrimonial. É constituída apenas pela Divisão Operacional que compete em: orientar as diversas unidades da UFRN em assuntos de segurança, coordenar as ações pertinentes à segurança, executar medidas de segurança em sua forma presencial e ostensiva, por meio de equipamentos eletrônicos de proteção e de monitoramento. </p>
            </div>
          </div>
          
          <Link to="/dcom" className='link-DiretCoord'>
          <div className="item-DiretCoord">
            <img src={ShopeLogo} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>diretoria de compras</h1>
              <p className="item-description">Responsável por orientar as unidades da UFRN em assuntos administrativos de qualquer natureza. Sua finalidade é planejar, coordenar e executar as aquisições de bens e materiais e contratações de serviços institucionais de âmbito nacional e internacional. É constituída por: Divisão de Planejamento e Gerenciamento de Compras; Divisão de Fase Interna de Compras e Divisão de Fase Externa de Compras.</p>
            </div>
          </div>
          </Link>
          <div className="item-DiretCoord">
            <img src={ContractLogo} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>diretoria de contratos</h1>
              <p className="item-description">Possui a finalidade de planejar, acompanhar a execução físico-financeira e coordenar a fiscalização administrativa dos contratos de obras e serviços de engenharia, cessão patrimonial e de serviços de natureza continuada, em consonância com as políticas e diretrizes de governança em contratações e aquisições regulamentadas pelo Conselho de Administração da UFRN. É constituída por: Divisão de Formalização e Acompanhamento de Contratos, e  Divisão de Fiscalização de Contratos.</p>
            </div>
          </div>
          <div className="item-DiretCoord">
            <img src={Logistic} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>diretoria de Logistica</h1>
              <p className="item-description">Responsável por coordenar as ações pertinentes às áreas de administração financeira, patrimonial, licitações, contratos, convênios, logística, gestão da informação e serviços gerais. Possui a finalidade de realizar o controle patrimonial dos bens móveis e imóveis e a gerência física e contábil dos almoxarifados de suprimentos de material de consumo e de manutenção de obras. É constituída por:  Divisão de Controle e Registro Contábil, Divisão de Patrimônio, Divisão de Almoxarifado Central e Divisão de Almoxarifado de Manutenção.</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}