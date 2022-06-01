import React from 'react'
import axios from 'axios';

import DestaquesItem from '../DestaquesItem/DestaquesItem';

import '../TodosDestaques/TodosDestaques.css';

export default class TodosDestaques extends React.Component {
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
      <div className='todosDestaques'>
        <h1 className='DestaquesTitulo'>Todos os destaques</h1>
        <hr className='linhaDestaques'></hr>
          <div className="cards-destaques">
            {this.state.data.map(data =>
              <DestaquesItem key={data.id} imagem={"http://localhost:1337" + data.attributes.Image.data[0].attributes.formats.thumbnail.url} titulo={data.attributes.Title} descricaoDestaques={data.attributes.descricaoDestaques} data={data.attributes.Date} />
            )}
          </div>
      </div>
    );
  }

}