import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoticiaItem from '../NoticiaItem/NoticiaItem';
import '../TodasNoticias/todasNoticias.css';

const TodasNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const descLimiteCaracteres = 160;
  const titLimiteCaracteres = 40;

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/devproad/proad-json/main/noticias-migracao.json')
      .then(response => {
        const noticias = response.data;
        setNoticias(noticias);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='todasNoticias'>
      <h1 className='NoticiasTitulo'>Todas Notícias</h1>
      <hr className='linhaNoticias'></hr>
      <div className="cards-noticias">
        {noticias.map(noticias =>
          <NoticiaItem key={noticias.titulo} 
          titulo={noticias.titulo.length > titLimiteCaracteres ?
            noticias.titulo.substring(0, titLimiteCaracteres) + '...' : noticias.titulo}
          data={noticias.dataPublicacao} 
          descricao={noticias.descricao.length > descLimiteCaracteres ?
            noticias.descricao.substring(0, descLimiteCaracteres) + '...' : noticias.descricao}
          imagem={noticias.imagem} 
          autor={noticias.autor}  
          fonte={noticias.fonte}
          docTitulo={noticias.docTitulo}
          docLink={noticias.docLink}
          tags={noticias.tags}


          />
        )}
      </div>
    </div>
  );
}

export default TodasNoticias;
