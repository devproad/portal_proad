import './destaques.css'
import image from '../../assets/Destaques/image1.jpg'

export default function Destaques(){
  return(
    <div className="container-destaques">
      <div className="header-destaques">
        <a href="">Destaques</a>
        <a href="">Editais & Licitações</a>
        <a href="">Editais Homologados</a>
      </div>
      <div className="cards-destaques">
          <div className="card-destaque">
            <img src={image} alt="" className="image-card" />
            <h3 className="title-card">resultado da seleção de bolsista </h3>
            <p className="description-card">Resultado final do processo seletivo simplificado regido pelo edital nº 001/2021-PROAD/UFRN</p>
            <p className="data-card">09 SET 2021 </p>
          </div>
          <div className="card-destaque">
            <img src={image} alt="" className="image-card" />
            <h3 className="title-card">resultado da seleção de bolsista </h3>
            <p className="description-card">Resultado final do processo seletivo simplificado regido pelo edital nº 001/2021-PROAD/UFRN</p>
            <p className="data-card">09 SET 2021 </p>
          </div>
          <div className="card-destaque">
            <img src={image} alt="" className="image-card" />
            <h3 className="title-card">resultado da seleção de bolsista </h3>
            <p className="description-card">Resultado final do processo seletivo simplificado regido pelo edital nº 001/2021-PROAD/UFRN</p>
            <p className="data-card">09 SET 2021 </p>
          </div>
      </div>
      <div className="footer-destaques">
        <div className="circle-destaques">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <a href="#">Vizualizar todos</a>
      </div>
    </div>
  )
}