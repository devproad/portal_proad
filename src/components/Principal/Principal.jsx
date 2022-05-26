import React from 'react'
import axios from 'axios';
import './Principal.css'
import MenuLateral from '../MenuLateral/MenuLateral';
import NoticiasRecentes from '../NoticiasRecentes/NoticiasRecentes';
import LinksImportantes from '../LinksImportantes/LinksImportantes'
import UltimosDocumentos from '../UltimosDocumentos/UltimosDocumentos';
import UltimosDocumentosItem from '../UltimosDocumentosItem/UltimosDocumentosItem'
import NoticiaDetalhada from '../NoticiaDetalhada/NoticiaDetalhada';
import SitesUteis from '../SitesUteis/sitesuteis';
import Destaques from '../Destaques/destaques';
import NoticiasRecentesItem from '../NoticiasRecentesItem/NoticiasRecentesItem';
import DestaquesItem from '../DestaquesItem/DestaquesItem';



export default class Principal extends React.Component {
    state = {
      data: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:1337/api/noticias?populate=*`)
        .then(res => {
            console.log(res.data.data)
          const data = res.data.data;
          this.setState({ data });
        })
    }
render() {
    return (
        <div className='Principal'>
            <div className='esquerdo'>
                <Destaques>
                        {this.state.data.map(data =>
                            <DestaquesItem key={data.id}  imagem={"http://localhost:1337"+data.attributes.Image.data[0].attributes.formats.thumbnail.url} titulo={data.attributes.Title} descricaoDestaques={data.attributes.descricaoDestaques} data={data.attributes.Date}/>
                        )}
                </Destaques>
                <NoticiasRecentes>

                        {this.state.data.map(data =>
                            <NoticiasRecentesItem key={data.id} titulo={data.attributes.Title} descricao={data.attributes.Description} data={data.attributes.Date}/>
                        )}

                </NoticiasRecentes>
                <NoticiaDetalhada></NoticiaDetalhada>
            </div>
            <div className='direito'>
                <MenuLateral>
                    <UltimosDocumentos>
                        {this.state.data.map(data =>
                            <UltimosDocumentosItem key={data.id} titulo={data.attributes.Title} linkDocumento = {"http://localhost:1337"+data.attributes.Arquivo.url}/>
                        )}
                    </UltimosDocumentos>
                    <LinksImportantes></LinksImportantes>
                    <SitesUteis></SitesUteis>
                </MenuLateral>
            </div>
        </div>
        );
    }

}