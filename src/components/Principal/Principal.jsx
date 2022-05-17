import React from 'react'
import axios from 'axios';
import './Principal.css'
import MenuLateral from '../MenuLateral/MenuLateral';
import NoticiasRecentes from '../NoticiasRecentes/NoticiasRecentes';
import LinksImportantes from '../LinksImportantes/LinksImportantes'
import UltimosDocumentos from '../UltimosDocumentos/UltimosDocumentos';
import NoticiaDetalhada from '../NoticiaDetalhada/NoticiaDetalhada';
import SitesUteis from '../SitesUteis/sitesuteis';
import Destaques from '../Destaques/destaques';
import NoticiasRecentesItem from '../NoticiasRecentesItem/NoticiasRecentesItem';



export default class Principal extends React.Component {
    state = {
      data: []
    }
  
    componentDidMount() {
      axios.get(`http://127.0.0.1:1337/api/noticias`)
        .then(res => {
          console.log(res.data.data);
          const data = res.data.data;
          this.setState({ data });
        })
    }
render() {
    return (
        <div className='Principal'>
            <div className='esquerdo'>
                <Destaques></Destaques>
                <NoticiasRecentes>

                        {this.state.data.map(data =>
                            <NoticiasRecentesItem key={data.id} titulo={data.attributes.Title} descricao={data.attributes.Description} data={data.attributes.Date}/>
                        )}

                </NoticiasRecentes>
                <NoticiaDetalhada></NoticiaDetalhada>
            </div>
            <div className='direito'>
                <MenuLateral>
                    <UltimosDocumentos></UltimosDocumentos>
                    <LinksImportantes></LinksImportantes>
                    <SitesUteis></SitesUteis>
                </MenuLateral>
            </div>
        </div>
        );
    }

}