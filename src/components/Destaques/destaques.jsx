import './destaques.css';
import { Link} from 'react-router-dom';
import { useState } from 'react';


export default function Destaques(props){

  const [selectedLink, setSelectedLink] = useState(null);

  const handleClick = (selected) => {
    setSelectedLink(selected);
    props.onLinkSelected(selected);
  };


  return(
    <div className="container-destaques">
      <div className="header-destaques">
        <span onClick={() => handleClick("noticias")}>Notícias</span>
        <span onClick={() => handleClick("editais_licitacoes")}>Editais & Licitações</span>
        <span onClick={() => handleClick("editais_homologados")}>Editais Homologados</span>
      </div>
      <div className="cards-destaques">
          
            {props.children}
        
      </div>
      <div className="footer-destaques">
        <Link to="/destaques">Vizualizar todos</Link>
      </div>
    </div>
  )
}