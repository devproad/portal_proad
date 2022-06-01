import './destaques.css';
import { Link} from 'react-router-dom';

export default function Destaques(props){
  return(
    <div className="container-destaques">
      <div className="header-destaques">
        <a href="">Notícias</a>
        <a href="">Editais & Licitações</a>
        <a href="">Editais Homologados</a>
      </div>
      <div className="cards-destaques">
          
            {props.children}
        
      </div>
      <div className="footer-destaques">
        <div className="circle-destaques">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <Link to="/destaques">Vizualizar todos</Link>
      </div>
    </div>
  )
}