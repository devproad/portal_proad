import React from 'react'
import axios from 'axios';
import NoticiaItem from '../NoticiaItem/NoticiaItem'
import '../TodasNoticias/todasNoticias.css';

export default class TodasNoticias extends React.Component {
  state = {
    data: [],
    data_noticias: []
  }

  // componentDidMount() {
  //   axios.get(`http://localhost:1337/api/noticias?populate=*`)
  //     .then(res => {
  //       const data = res.data.data;
  //       this.setState({ data });
  //     })

    componentDidMount() {
      axios.get('https://raw.githubusercontent.com/RubenFilipe07/proad-json/main/noticias.json')
      .then(response => {
        const data_noticias = response.data.data_noticias;
        this.setState({ data_noticias });
        console.log(this.state.data_noticias);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className='todasNoticias'>
        <h1 className='NoticiasTitulo'>Todas Notícias</h1>
        <hr className='linhaNoticias'></hr>
          <div className="cards-noticias">
            {this.state.data_noticias.map(data_noticias =>
            <NoticiaItem key={data_noticias.id} titulo={data_noticias.attributes.Title} descricaoNoticia={data_noticias.attributes.Description} data={data_noticias.attributes.Date} imagem={data_noticias.attributes.Image.data[0].attributes.formats.thumbnail.url} />

            )}
          </div>
      </div>
    );
  }

}