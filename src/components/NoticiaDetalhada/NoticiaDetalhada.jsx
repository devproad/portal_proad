import React from 'react'
import './NoticiaDetalhada.css'
import Home from '../../assets/NoticiaDetalhada/home.svg'
import Download from '../../assets/NoticiaDetalhada/download.svg'
import setaEsquerda from '../../assets/NoticiaDetalhada/setaEsquerda.svg'
import setaDireita from '../../assets/NoticiaDetalhada/setaDireita.svg'


const NoticiaDetalhada = () => {
    return (
        <div className='noticiaDetalhada'>
            <div className='CaminhoNoticiaDetalhada'>
                <div className='LinkCaminhoNoticiaDetalhada'>
                    <a href='#'>
                    <img alt='Pagina principal' src={Home} width={20}></img>
                    </a>
                    <span>/</span>
                    <a href=''>Noticias</a>
                    <span>/</span>
                    <a href=''>EDITAL DE DESFAZIMENTO POR DOAÇÃO Nº 01-2021</a>
                    <span>&bull; </span>
                    <span className='CaminhoData'>09 SET 2021</span>
                </div>             
            </div>
           
            <h1 className='TituloNoticiaDetalhada'>EDITAL DE DESFAZIMENTO POR DOAÇÃO Nº 01-2021</h1>
            <p className='ConteudoNoticiaDetalhada'>A Universidade Federal do Rio Grande do Norte, por meio da Comissão de Classificação, Avaliação e Desfazimento de Torres Autoportantes, TORNA PÚBLICO o Edital de Desfazimento de bens por doação n° 01/2021, cujo objeto é o desfazimento de torres autoportantes ociosas. O preço global dos bens, objeto deste Edital, é R$ 229.000,00. As solicitações de doação poderão ser feitas até o dia 01 de outubro de 2021, conforme edital disponível abaixo.

            Para consulta ao processo, deverá acessar o endereço <a target="_blank" rel="noopener" href="https://sipac.ufrn.br/public/jsp/portal.jsf">https://sipac.ufrn.br/public/jsp/portal.jsf</a> no menu Consulta Processos e através do número do processo realizar a consulta.
            </p>
       
            <div className='btnDownloadNoticiaDetalhada'>
                <img alt='Download' src={Download} width={20}></img>
                <a href='#'>Edital_de_Doacao_N012021</a>
            </div>


            <div className='NoticiaDetalhadaPaginacao'>
                <div className='btnAnteriorNoticiaDetalhada'>
                    <img alt='Pagina Anterior' src={setaEsquerda} width={15}></img>
                    <a href='#'>Anterior</a>
                </div>

                <div className='btnProximaNoticiaDetalhada'>
                    <img alt='Proxima Pagina' src={setaDireita} width={15}></img>
                    <a href='#'>Próxima</a>
                </div>
            </div>

        </div>
    );
}

export default NoticiaDetalhada;