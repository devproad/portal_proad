import './nossosServiços.css'
import image01 from '../../assets/NossosServiços/image01.svg'
import image02 from '../../assets/NossosServiços/image02.svg'
import image03 from '../../assets/NossosServiços/image03.svg'
import image04 from '../../assets/NossosServiços/image04.svg'
import line from '../../assets/NossosServiços/line.svg'

export default function NossosServicos() {
  return (
    <div className="container-services" id='nossos-servicos'>
      <div className="header-services">
        <h1>Nossos Serviços</h1>
        <p>A Pró-Reitoria de Administração, subordinada diretamente à Reitoria,  é o órgão responsável pela supervisão e coordenação das áreas de contabilidade, finanças, material, patrimônio, segurança, transportes e serviços gerais da UFRN, a qual compete:</p>
      </div>
      <div className="icons-services icons-descriptions">

        <span className='bloco-nossos-servicos'>
          <img src={image01} alt="" />
          <p>Assessorar o Reitor em assuntos administrativos;</p>
        </span>

          <img className='linha-nossos-servicos' src={line} alt="" />

        <span className='bloco-nossos-servicos'>
        <img src={image02} alt="" />
        <p>Orientar as diversas unidades da UFRN em assuntos administrativos de
          qualquer natureza;</p>
        </span>

        <img className='linha-nossos-servicos' src={line} alt="" />
        
        <span className='bloco-nossos-servicos'>
        <img src={image03} alt="" />

      
        <p>Coordenar as ações pertinentes às áreas de administração financeira,
          patrimonial, licitações, contratos, convênios e serviços gerais;</p>
        </span>

        <img className='linha-nossos-servicos' src={line} alt="" />

        <span className='bloco-nossos-servicos'>
        <img src={image04} alt="" />
        <p>Praticar todos os demais atos relativos à administração, ainda que não
          especificados neste artigo.</p>
        </span>
      </div>

    </div>
  )
}