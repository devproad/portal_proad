import React from 'react'
import './NoticiasRecentes.css'

const NoticiasRecentes = () => {
    return (
        <div className='noticiasRecentes'>
            <h1 className='noticiasRecentesTitulo'>Notícias  recentes</h1>
            <hr className='linhaNoticiasRecentes'></hr>
            <div className='gridNoticiasRecentes'>
               
                <div className='itemNoticiasRecentes'>
                    <div className='barraItemNoticias'>
                       <span className='dataNoticiasRecentes'>09 SET 2021</span>
                    </div>
                    <div className='conteudoNoticiasRecentes'>
                        <h1 className='tituloNoticiasRecentes'>EDITAL DE DESFAZIMENTO POR DOAÇÃO Nº 01-2021</h1>
                        <p  className='DescricaoNoticiasRecentes'>A Universidade Federal do Rio Grande do Norte, por meio da Comissão de Classificação, Avaliação e Desfazimento de Torres Autoportantes, TORNA PÚBLICO o Edital de Desfazimento de bens por doação n° 01/2021</p>
                    </div>
                </div>

                <div className='itemNoticiasRecentes'>
                        <div className='barraItemNoticias'>
                        <span className='dataNoticiasRecentes'>09 SET 2021</span>
                        </div>
                        <div className='conteudoNoticiasRecentes'>
                            <h1 className='tituloNoticiasRecentes'>Cartilha Assinatura Eletrônica de Documentos</h1>
                            <p  className='DescricaoNoticiasRecentes'>A Coordenadoria de Gestão da Informação (CGI), lançou uma cartilha com orientações quanto ao procedimento de assinatura eletrônica de documentos, com o objetivo de aperfeiçoar a gestão de documentos, a partir de um instrumento prático para uso no cotidiano da comunidade universitária.</p>
                        </div>
                </div>

                <div className='itemNoticiasRecentes'>
                    <div className='barraItemNoticias'>
                       <span className='dataNoticiasRecentes'>09 SET 2021</span>
                    </div>
                    <div className='conteudoNoticiasRecentes'>
                        <h1 className='tituloNoticiasRecentes'>RESULTADO DA SELEÇÃO DE BOLSISTA</h1>
                        <p  className='DescricaoNoticiasRecentes'>A Pró-Reitoria de Administração divulga o resultado final do processo seletivo simplificado regido pelo edital nº 001/2021-PROAD/UFRN, que oferta de 02 (duas) vagas de bolsas na área de Tecnologia da Informação (Desenvolvimento WEB).</p>
                    </div>
                </div>

                <div className='itemNoticiasRecentes'>
                    <div className='barraItemNoticias'>
                       <span className='dataNoticiasRecentes'>09 SET 2021</span>
                    </div>
                    <div className='conteudoNoticiasRecentes'>
                        <h1 className='tituloNoticiasRecentes'>EDITAL DE DESFAZIMENTO POR DOAÇÃO Nº 01-2021</h1>
                        <p  className='DescricaoNoticiasRecentes'>A Universidade Federal do Rio Grande do Norte, por meio da Comissão de Classificação, Avaliação e Desfazimento de Torres Autoportantes, TORNA PÚBLICO o Edital de Desfazimento de bens por doação n° 01/2021</p>
                    </div>
                </div>

                <div className='itemNoticiasRecentes'>
                    <div className='barraItemNoticias'>
                       <span className='dataNoticiasRecentes'>09 SET 2021</span>
                    </div>
                    <div className='conteudoNoticiasRecentes'>
                        <h1 className='tituloNoticiasRecentes'>Cartilha Assinatura Eletrônica de Documentos</h1>
                        <p  className='DescricaoNoticiasRecentes'>A Coordenadoria de Gestão da Informação (CGI), lançou uma cartilha com orientações quanto ao procedimento de assinatura eletrônica de documentos, com o objetivo de aperfeiçoar a gestão de documentos, a partir de um instrumento prático para uso no cotidiano da comunidade universitária.</p>
                    </div>
                </div>

                <div className='itemNoticiasRecentes'>
                    <div className='barraItemNoticias'>
                       <span className='dataNoticiasRecentes'>09 SET 2021</span>
                    </div>
                    <div className='conteudoNoticiasRecentes'>
                        <h1 className='tituloNoticiasRecentes'>RESULTADO DA SELEÇÃO DE BOLSISTA</h1>
                        <p  className='DescricaoNoticiasRecentes'>A Pró-Reitoria de Administração divulga o resultado final do processo seletivo simplificado regido pelo edital nº 001/2021-PROAD/UFRN, que oferta de 02 (duas) vagas de bolsas na área de Tecnologia da Informação (Desenvolvimento WEB).</p>
                    </div>
                </div>

                <a className='visualizarNoticias' href='#'>Vizualizar todas as noticias</a>
            </div>
        </div>
    );
}

export default NoticiasRecentes;