import React, { useEffect, useState } from 'react'
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
import { useMediaQuery } from 'react-responsive'


const Principal = (props) => {


    const [data_editais_homologados, setDataEditaisHomologados] = useState([]);
    const [data_editais_licitacoes, setDataEditaisLicitacoes] = useState([]);
    const [data_noticias, setDataNoticias] = useState([]);
    const [selectedLink, setSelectedLink] = useState('noticias');
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });


    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/devproad/proad-json/main/noticias-migracao.json')
            .then(response => {
                const data_noticias = response.data;
                setDataNoticias(data_noticias);
                console.log(data_noticias);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    const textoPrincipal = Array.from(document.querySelectorAll('.Principal p, .Principal h1, .esquerdo a, .direito a, .header-destaques span'));
    const classesAzul = Array.from(document.querySelectorAll('.TituloNoticiaDetalhada, .NoticiaDetalhadaPaginacao, .btnDownloadNoticiaDetalhada, .nomeEquipe'));
    const classesDestacadas = Array.from(document.querySelectorAll('.UltimosDocumentosTitulo, .noticiasRecentesTitulo, .LinksImportantesTitulo'));
    const fundoServicos = Array.from(document.querySelectorAll('.container-services'));
    const formularioContato = Array.from(document.querySelectorAll('form input, form textarea'));
    const blocoContatoLetras = Array.from(document.querySelectorAll('.contato h1, .contato span, .contato a, .contato form label, .localizacao'));
    const blocoEquipe = Array.from(document.querySelectorAll('.equipe'));
    const itemEquipe = Array.from(document.querySelectorAll('.itemEquipe, .cargoEquipe, .descEquipe, .emailEquipe a, .CaminhoNoticiaDetalhada'));
    const blocoNoticias = Array.from(document.querySelectorAll('.card-destaque, .itemNoticiasRecentes'));

    if (props.isDark === true) {
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
        blocoNoticias.forEach((item) => {
            item.style = 'box-shadow: rgb(255 255 255 / 10%) 0px 1px 7px 2px;  background-color: #303030;'
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
        blocoNoticias.forEach((item) => {
            item.style = 'box-shadow: 0px 1px 9px 4px rgb(0 0 0 / 10%); background-color: #FFFFFF;'
        })

    }

    const handleLinkSelected = (selected) => {
        setSelectedLink(selected);
    };

    return (
        <div className='Principal'>
            <div className='esquerdo'>
                <Destaques onLinkSelected={handleLinkSelected}>
                    <Carousel>
                        {selectedLink === 'noticias' ? (
                            data_noticias.filter(item => item.tags.includes("proad")).map(data_noticias => (
                                <DestaquesItem
                                    key={data_noticias.titulo}
                                    imagem={data_noticias.imagem}
                                    titulo={data_noticias.titulo}
                                    descricaoDestaques={data_noticias.descricao}
                                    data_noticias={data_noticias.dataPublicacao}
                                />
                            ))
                        ) : null}
                        {selectedLink === 'editais_licitacoes' ? (
                            data_noticias.filter(item => item.tags.includes("proad")).map(data_noticias => (
                                <DestaquesItem
                                    key={data_noticias.titulo}
                                    imagem={data_noticias.imagem}
                                    titulo={data_noticias.titulo}
                                    descricaoDestaques={data_noticias.descricao}
                                    data_noticias={data_noticias.dataPublicacao}
                                />
                            ))
                        ) : null}
                        {selectedLink === 'editais_homologados' ? (
                            data_noticias.filter(item => item.tags.includes("proad")).map(data_noticias => (
                                <DestaquesItem
                                    key={data_noticias.titulo}
                                    imagem={data_noticias.imagem}
                                    titulo={data_noticias.titulo}
                                    descricaoDestaques={data_noticias.descricao}
                                    data_noticias={data_noticias.dataPublicacao}
                                />
                            ))
                        ) : null}
                    </Carousel>

                </Destaques>

                <NoticiasRecentes>
                    {
                        isMobile ? (
                            data_noticias.slice(0, 2).map(data_noticias => (
                                <NoticiasRecentesItem
                                    key={data_noticias.titulo}
                                    titulo={data_noticias.titulo}
                                    descricao={data_noticias.descricao}
                                    data_noticias={data_noticias.dataPublicacao.slice(0, 10)}
                                />
                            ))
                        ) : (
                            data_noticias.slice(0, 6).map(data_noticias => (
                                <NoticiasRecentesItem
                                    key={data_noticias.titulo}
                                    titulo={data_noticias.titulo}
                                    descricao={data_noticias.descricao}
                                    data_noticias={data_noticias.dataPublicacao.slice(0, 10)}
                                />
                            ))
                        )

                    }

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

export default Principal;







