import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoticiaItem from '../NoticiaItem/NoticiaItem';
import '../TodasNoticias/todasNoticias.css';

const TodasNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/devproad/proad-json/main/noticias-migracao.json')
      .then(response => {
        const noticias = response.data;
        setNoticias(noticias);
        console.log(noticias);
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
          <NoticiaItem key={noticias.titulo} titulo={noticias.titulo} data={noticias.dataPublicacao} descricao={noticias.descricao} imagem={noticias.imagem} />
        )}

      </div>
    </div>
  );
}

export default TodasNoticias;
