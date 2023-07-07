import React, { Fragment } from 'react'
import './Informações.css'
import instagram from '../../../assets/Informacoes/Instagram_Icon.svg'
import abrirLink from '../../../assets/LinksImportantes/AbrirLink.svg'

const Informacoes = () => {
    return (
        <Fragment>
            <div className='LinksImportantes'>
                <h1 className='LinksImportantesTitulo'>Informações</h1>

                <hr />


                <div className='LinksBloco'>
                    <img src={abrirLink} alt='links'></img>
                    <a href="#">Sobre</a>
                </div>
                <div className='LinksBloco'>
                    <img src={abrirLink} alt='links'></img>
                    <a href="#">Orientações e Manuais</a>
                </div>
                <div className='LinksBloco'>
                    <img src={abrirLink} alt='links'></img>
                    <a href="#">Editais de licitações</a>
                </div>
                <div className='LinksBloco'>
                    <img src={abrirLink} alt='links'></img>
                    <a href="#">Legislação</a>
                </div>
                <div className='LinksBloco'>
                    <img src={abrirLink} alt='links'></img>
                    <a href="#">Contatos</a>
                </div>
            </div>

            <div className='LinksImportantes'>
                <h1 className='LinksImportantesTitulo'>Mídia</h1>

                <hr />


                <div className='midias'>
                    <a target="_blank" rel="noopener" href='https://www.instagram.com/proadufrn/'>
                        <img src={instagram} alt='Instagram'></img>
                    </a>
                </div>
            </div>



        </Fragment>
    );
}

export default Informacoes;