import React from 'react'
import axios from 'axios';
import NoticiaItem from '../NoticiaItem/NoticiaItem';
import '../TodasNoticias/todasNoticias.css';

export default class TodasNoticias extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`http://localhost:1337/api/noticias?populate=*`)
      .then(res => {
        const data = res.data.data;
        this.setState({ data });
      })
  }
  render() {
    return (
      <div className='todasNoticias'>
        <h1 className='NoticiasTitulo'>Todas Notícias</h1>
        <hr className='linhaNoticias'></hr>
          <div className="cards-noticias">
            {this.state.data.map(data =>
              <NoticiaItem key={data.id} imagem={"http://localhost:1337" + data.attributes.Image.data[0].attributes.formats.thumbnail.url} titulo={data.attributes.Title} descricaoNoticia={data.attributes.descricaoDestaques} data={data.attributes.Date} />
            )}
          </div>
      </div>
    );
  }

}