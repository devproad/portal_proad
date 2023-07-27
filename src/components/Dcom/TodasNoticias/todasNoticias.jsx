import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoticiaItem from '../../NoticiaItem/NoticiaItem';
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
    
{noticias
  .filter(noticia => noticia.tags && noticia.tags.includes('compras'))
  .map(noticia => (
    <NoticiaItem
      key={noticia.titulo}
      titulo={noticia.titulo.length > titLimiteCaracteres ?
        noticia.titulo.substring(0, titLimiteCaracteres) + '...' : noticia.titulo}
      data={noticia.dataPublicacao}
      descricao={noticia.descricao.length > descLimiteCaracteres ?
        noticia.descricao.substring(0, descLimiteCaracteres) + '...' : noticia.descricao}
      imagem={noticia.imagem}
      autor={noticia.autor}
      fonte={noticia.fonte}
      tags={noticia.tags}
    />
  ))
}
      </div>
    </div>
  );
}

export default TodasNoticias;
