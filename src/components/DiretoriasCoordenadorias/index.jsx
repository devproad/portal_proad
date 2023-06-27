import './DiretoriasCoord.css'
import CashLogo from '../../assets/DiretoriasCoordenadorias/CashLogo.svg'
import Logistic from '../../assets/DiretoriasCoordenadorias/Logistic.svg'
import SecurityLogo from '../../assets/DiretoriasCoordenadorias/SecurityLogo.svg'
import ShopeLogo from '../../assets/DiretoriasCoordenadorias/ShopLogo.svg'
import ContractLogo from '../../assets/DiretoriasCoordenadorias/ContractLogo.svg'
import{Link} from "react-router-dom"

const DiretoriasCoord = (props) => {
  const fundoDiretoria = Array.from(document.querySelectorAll('.DiretCoord'));

  if(props.isDark === true){
    fundoDiretoria.forEach((item) => {  
       item.style = 'background: linear-gradient(93.93deg, #004053 45.4%, #027ba1 99.79%);'
  })
  }else{
    fundoDiretoria.forEach((item) => {
        item.style = 'background: linear-gradient(93.93deg, #00607d 45.4%, #0089b2 99.79%);'
    })
  }


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
              <p className="item-description">Tem como finalidade planejar, coordenar e executar as aquisições de bens e contratações de serviços institucionais no âmbito nacional e internacional. A unidade é constituída pela Direção, Divisão de Fase Interna de Compras, Divisão de Fase Externa de Compras e Divisão de Planejamento e Gerenciamento de Compras.”</p>
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

export default DiretoriasCoord;