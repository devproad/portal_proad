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
        data: [],
        data_noticias: [],
        selectedLink: 'noticias',

    }

    // componentDidMount() {
    //   axios.get(`http://localhost:1337/api/noticias?populate=*`)
    //     .then(res => {
    //       const data = res.data.data;
    //       this.setState({ data });
    //     })
    // }

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

          axios.get('https://raw.githubusercontent.com/RubenFilipe07/proad-json/main/editais_licitacoes.json')
            .then(response => {
                const data_editais_licitacoes = response.data.data_editais_licitacoes;
                this.setState({ data_editais_licitacoes });
                console.log(this.state.data_editais_licitacoes);
                })
            .catch(error => {
                console.log(error);
                }
            );

            axios.get('https://raw.githubusercontent.com/RubenFilipe07/proad-json/main/editais_homologados.json')
            .then(response => {
                const data_editais_homologados = response.data.data_editais_homologados;
                this.setState({ data_editais_homologados });
                console.log(this.state.data_editais_homologados);
                }
            )
            .catch(error => {
                console.log(error);
                }
            );
      }

    render() {

        const textoPrincipal = Array.from(document.querySelectorAll('.Principal p, .Principal h1, .esquerdo a, .direito a'));
        const classesAzul = Array.from(document.querySelectorAll('.TituloNoticiaDetalhada, .NoticiaDetalhadaPaginacao, .btnDownloadNoticiaDetalhada, .nomeEquipe'));
        const classesDestacadas = Array.from(document.querySelectorAll('.UltimosDocumentosTitulo, .noticiasRecentesTitulo, .LinksImportantesTitulo'));
        const fundoServicos = Array.from(document.querySelectorAll('.container-services'));
        const formularioContato = Array.from(document.querySelectorAll('form input, form textarea'));
        const blocoContatoLetras = Array.from(document.querySelectorAll('.contato h1, .contato span, .contato a, .contato form label, .localizacao'));
        const blocoEquipe = Array.from(document.querySelectorAll('.equipe'));
        const itemEquipe = Array.from(document.querySelectorAll('.itemEquipe, .cargoEquipe, .descEquipe, .emailEquipe a, .CaminhoNoticiaDetalhada'));
        if (this.props.isDark === true) {
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
            blocoEquipe.forEach((item) => {
                item.style = 'background: linear-gradient(93.93deg, rgb(0, 64, 83) 45.4%, rgb(2, 123, 161) 99.79%);'
            })
            itemEquipe.forEach((item) => {
                item.style = 'background: rgba(0, 0, 0); color: #FFFFFF;'
            })
        } else {
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
            blocoEquipe.forEach((item) => {
                item.style = 'background: linear-gradient(95.93deg, #0089b2 45.4%, #00607d 99.79%);'
            })
            itemEquipe.forEach((item) => {
                item.style = 'background: #F4F4F4; color: #4E4E4E;'
            })
        }

        const handleLinkSelected = (selected) => {
            this.setState({ selectedLink: selected });
        };

        return (
            <div className='Principal'>
                <div className='esquerdo'>
                    <Destaques onLinkSelected={handleLinkSelected}>
                        <Carousel>
                            {this.state.selectedLink === 'noticias' ? (
                                this.state.data_noticias.filter(item => item.attributes.Tag.includes("noticias".toLowerCase()) && item.attributes.Tag.includes("dcom".toLowerCase())).map(data_noticias => (
                                    <DestaquesItem
                                        key={data_noticias.id}
                                        imagem={data_noticias.attributes.Image.data[0].attributes.formats.thumbnail.url}
                                        titulo={data_noticias.attributes.Title}
                                        descricaoDestaques={data_noticias.attributes.Description}
                                        data_noticias={data_noticias.attributes.Date}
                                    />
                                ))
                            ) : null}
                            {this.state.selectedLink === 'editais_licitacoes' ? (
                                this.state.data_noticias.filter(item => item.attributes.Tag.includes("editais_licitacoes".toLowerCase()) && item.attributes.Tag.includes("dcom".toLowerCase())).map(data_noticias => (
                                    <DestaquesItem
                                        key={data_noticias.id}
                                        imagem={data_noticias.attributes.Image.data[0].attributes.formats.thumbnail.url}
                                        titulo={data_noticias.attributes.Title}
                                        descricaoDestaques={data_noticias.attributes.Description}
                                        data_noticias={data_noticias.attributes.Date}
                                    />
                                ))
                            ) : null}
                            {this.state.selectedLink === 'editais_homologados' ? (
                                this.state.data_noticias.filter(item => item.attributes.Tag.includes("editais_homologados".toLowerCase()) && item.attributes.Tag.includes("dcom".toLowerCase())).map(data_noticias => (
                                    <DestaquesItem
                                        key={data_noticias.id}
                                        imagem={data_noticias.attributes.Image.data[0].attributes.formats.thumbnail.url}
                                        titulo={data_noticias.attributes.Title}
                                        descricaoDestaques={data_noticias.attributes.Description}
                                        data_noticias={data_noticias.attributes.Date}
                                    />
                                ))
                            ) : null}
                        </Carousel>

                    </Destaques>

                    <NoticiasRecentes>

                        {this.state.data_noticias.map(data_noticias =>
                            <NoticiasRecentesItem key={data_noticias.id} titulo={data_noticias.attributes.Title} descricao={data_noticias.attributes.Description} data_noticias={data_noticias.attributes.Date} />
                        )}

                    </NoticiasRecentes>

                </div>
                <div className='direito'>
                    <MenuLateral>
                        {/* <UltimosDocumentos>
                        {this.state.data.map(data =>
                            // <UltimosDocumentosItem key={data.id} titulo={data.attributes.Title} linkDocumento = {"http://localhost:1337"+data.attributes.Arquivo.url}/>
                         <UltimosDocumentosItem key={data.id} titulo={data.attributes.Title} linkDocumento = {data.attributes.Arquivo.url}/>
                            
                        )}
                    </UltimosDocumentos> */}
                        <LinksImportantes></LinksImportantes>
                        <SitesUteis></SitesUteis>
                    </MenuLateral>
                </div>
            </div>
        );
    }

}