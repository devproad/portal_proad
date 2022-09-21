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
import Carousel from '../Carousel/Carousel'



export default class Principal extends React.Component {
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
       
    const textoPrincipal = Array.from(document.querySelectorAll('.Principal p, .Principal h1, .headerSitesUteis, .esquerdo a, .direito a'));
    const classesAzul = Array.from(document.querySelectorAll('.TituloNoticiaDetalhada, .NoticiaDetalhadaPaginacao, .btnDownloadNoticiaDetalhada'));
    const classesDestacadas = Array.from(document.querySelectorAll('.UltimosDocumentosTitulo, .noticiasRecentesTitulo, .LinksImportantesTitulo'));
    const fundoServicos = Array.from(document.querySelectorAll('.container-services'));
    const formularioContato = Array.from(document.querySelectorAll('form input, form textarea'));
    const blocoContatoLetras = Array.from(document.querySelectorAll('.contato h1, .contato span, .contato a, .contato form label, .localizacao'));
    if(this.props.isDark === true){
        textoPrincipal.forEach((item) => {  
            item.style = 'color: #FFFFFF;'
      })
        classesAzul.forEach((item) => {
            item.style = 'color: #FFFFFF;'
        })
        classesDestacadas.forEach((item) => {
            item.style = 'color: #FFFFFF;'
        })
        fundoServicos.forEach((item) => {
            item.style = 'background: linear-gradient(93.93deg, rgb(0, 64, 83) 45.4%, rgb(2, 123, 161) 99.79%);'
        })
        formularioContato.forEach((item) => {
            item.style = 'background: #FFFF;'
        })
        blocoContatoLetras.forEach((item) => {
            item.style = 'color: #FFFFFF;'
        })
    }else{
        textoPrincipal.forEach((item) => {
            item.style = 'color: #4E4E4E;'
        }) 
        classesAzul.forEach((item) => {
            item.style = 'color: #003C4F;'
        })
        classesDestacadas.forEach((item) => {
            item.style = 'color: #282828;'
        })
        fundoServicos.forEach((item) => {
            item.style = 'background: linear-gradient(95.93deg, #0089b2 45.4%, #00607d 99.79%);'
        })
        formularioContato.forEach((item) => {
            item.style = 'background: rgba(229, 229, 229, 0.4);'
        })
        blocoContatoLetras.forEach((item) => {
            item.style = 'color: #004d64;'
        })
    }
      
    return (
        <div className='Principal'>
            <div className='esquerdo'>
                <Destaques>
                    <Carousel>
                        {this.state.data.map(data =>
                            <DestaquesItem key={data.id}  imagem={"http://localhost:1337"+data.attributes.Image.data[0].attributes.formats.thumbnail.url} titulo={data.attributes.Title} descricaoDestaques={data.attributes.descricaoDestaques} data={data.attributes.Date}/>
                        )}
                    </Carousel>
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