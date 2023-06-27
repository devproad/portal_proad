import './nossosServiços.css'
import metaprocesso from '../../../assets/NossosServiços/diretoria-compras.jpg'
export default function NossosServicos() {
  return (
    <div className="container-services" id='nossos-servicos'>
      <div className="header-services">
        <h1 className="title-services">Nossos Serviços</h1>

        <img src={metaprocesso} alt="Meta Processo" className="img-services img-services-dcom" />
      
      </div>

    </div>
  )
}