import './DiretoriasCoord.css'
import CashLogo from '../../../assets/DiretoriasCoordenadorias/CashLogo.svg'
import Logistic from '../../../assets/DiretoriasCoordenadorias/Logistic.svg'
import SecurityLogo from '../../../assets/DiretoriasCoordenadorias/SecurityLogo.svg'
import ShopeLogo from '../../../assets/DiretoriasCoordenadorias/ShopLogo.svg'
import ContractLogo from '../../../assets/DiretoriasCoordenadorias/ContractLogo.svg'
import { Link } from "react-router-dom"
import { useState } from 'react';
import { Modal } from 'antd';
import ContatoModal from '../../Dcom/ContatoModal/ContatoModal';

const DiretoriasCoord = (props) => {
  const fundoDiretoria = Array.from(document.querySelectorAll('.DiretCoord'));

  if (props.isDark === true) {
    fundoDiretoria.forEach((item) => {
      item.style = 'background: linear-gradient(93.93deg, #004053 45.4%, #027ba1 99.79%);'
    })
  } else {
    fundoDiretoria.forEach((item) => {
      item.style = 'background: linear-gradient(93.93deg, #00607d 45.4%, #0089b2 99.79%);'
    })
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setModalVisible(true);
  }


  return (
    <section className="DiretCoord">
      <div className="container-DiretCoord">
        <div className="header-DiretCoord">
          <Link to="/dcom" className='link-DiretCoord'>
            <p>ESTRUTURA ORGANIZACIONAL</p>
          </Link>
        </div>
        <div className="itens-DiretCoord">
        <div className="item-DiretCoord-Dcom" onClick={() => openModal(
            'Direção', <>
            <p>
              Conforme o Regimento Interno da Reitoria, compete ao Diretor de Compras: <br />
              <p>
                I - Planejar, coordenar e executar as contratações institucionais de âmbito nacional e internacional de forma a subsidiar o desenvolvimento das atividades da UFRN e apoiar administrativamente as demais unidades requisitantes no desenvolvimento de instrumentos de planejamento de contratações.
              </p>
              <p>
                III – Responder pela execução dos planos de trabalho referentes ao planejamento e gerenciamento de contratações da Universidade.
              </p>
              <p>
                IV – Utilizar aplicações de tecnologia de informação e comunicação para subsidiar a melhoria de processos de planejamento e gerenciamento de contratações.
              </p>
              <p>
                V – Coordenar e supervisionar as atividades e responsabilidades atribuídas às divisões vinculadas à diretoria.
              </p>
              <p>
                VI – Recomendar alterações e adaptações na estrutura organizacional da Diretoria de modo a assegurar a eficiência.
              </p>
              <p>
                VII – Fornecer com presteza e em tempo hábil informações às instâncias superiores e diversos órgãos de controle do poder público, sempre que solicitado.
              </p>

              <ContatoModal nome='João Paulo Paiva (Diretor)' emailSecundario="joao.paulo.paiva@ufrn.br" telefone="(84)99480-6899" />

            </p>
          </>
          )}>
            <img src={ContractLogo} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>DIREÇÃO</h1>
              <p className="item-description">Tem a finalidade de planejar, coordenar e executar as aquisições de bens e materiais e contratações de serviços institucionais de âmbito nacional e internacional.</p>
            </div>
          </div>
          <div className="item-DiretCoord-Dcom" onClick={() => openModal(
            'DFI', <>
            <p>
              À Divisão de Fase Interna de Compras compete: <br />
              <p>
                I – formalizar os processos licitatórios para aquisição de bens e materiais em sua fase interna; II – elaborar minutas de editais dos processos licitatórios para aquisição de bens e materiais;
              </p>

              <p>III – auxiliar as equipes de planejamento na realização de pesquisas de mercado;</p>

              <p>IV – disponibilizar as informações inerentes aos processos licitatórios para aquisição de bens e materiais nos sítios oficiais do Governo Federal;</p>

              <p>VI – formalizar os processos licitatórios para contratação de serviços em sua fase interna;</p>

              <p>VI – elaborar minutas de contratos e termos aditivos; </p>

              <p>VII – elaborar minutas de editais dos processos licitatórios para contratação de serviços; </p>

              <p>VIII – auxiliar as equipes de planejamento na realização de pesquisas de mercado; </p>

              <p>IX – disponibilizar as informações inerentes aos processos licitatórios para contratação de serviços nos sítios oficiais do Governo Federal; </p>

              <p>X – formalizar os processos de contratações diretas nacionais e internacionais para contratação de serviços.</p>


              <ContatoModal nome='Chianc Leocádio de Lima (Chefe)' emailPrimario="chianc.leocadio@ufrn.br" telefone="(84) 99899-3667" />

            </p>
          </>
          )}>
            <img src={SecurityLogo} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>DIVISÃO DE FASE INTERNA</h1>
              <p className="item-description">A Divisão de Fase interna (DFI) é responsável pela instrução e formalização dos processos de compras da UFRN.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet condimentum metus. Duis pulvinar maximus diam sed imperdiet. Cras condimentum eu quam at auctor. </p>
            </div>
          </div>

         
            <div className="item-DiretCoord-Dcom" onClick={() => openModal(
              'DFE', <>
              <p>
                À Divisão de Fase Externa de Compras compete:  <br />
                <p>
                  I – coordenar e gerenciar a fase externa dos processos licitatórios destinados à aquisição de bens e materiais e contratação de serviços, nas suas diversas modalidades e segundo o regramento da legislação pertinente;
                </p>

                <p>II – receber, analisar e encaminhar às unidades responsáveis, quando necessário, impugnações e questionamentos interpostos ao processo licitatório; </p>

                <p>III – receber os documentos pertinentes ao objeto licitado, referentes à habilitação ou às suas propostas; </p>

                <p>IV – avaliar os referidos documentos conforme estabelecido em Lei e as exigências contidas no edital, procedendo com a habilitação e classificação dos licitantes que atendam tais exigências; </p>

                <p>VI – elaborar minutas de contratos e termos aditivos; </p>

                <p>V – realizar diligências, quando necessário e previsto em edital, para auxiliar no julgamento e avaliação dos documentos e informações prestadas pelos proponentes; </p>

                <p>VI – receber recursos apresentados, dando o devido prosseguimento legal;  </p>

                <p>VII – formalizar e conduzir a publicação dos atos cabíveis aos certames licitatórios, de acordo com a modalidade de disputa. </p>


                <ContatoModal nome='Adriana da Silva Cardoso (Chefe)' telefone="(84) 98746-7713" emailPrimario="licitacaoufrn@gmail.com" />

              </p>
            </>
            )}>
              <img src={ShopeLogo} alt="logo" />
              <div className="item-content">
                <h1 className='item-title'>DIVISÃO DE FASE EXTERNA</h1>
                <p className="item-description">Cabe a Divisão de Fase externa (DFE) coordenar e gerenciar a fase externa dos processos licitatórios. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet condimentum metus. Duis pulvinar maximus diam sed imperdiet. Cras condimentum eu quam at auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet condimentum metus. </p>
              </div>
            </div>
       
          
        

          <div className="item-DiretCoord-Dcom" onClick={() => openModal(
                            'DPGC', <>
                            <p>
                                À Divisão de Planejamento e Gerenciamento de Compras compete: <br />
                                <p>
                                    I – planejar a fase interna das licitações, fazendo interface com a fase externa;
                                </p>
                                <p>
                                    II – gerir o catálogo e grupos de materiais;
                                </p>
                                <p>
                                    III – acompanhar as equipes de planejamento;
                                </p>
                                <p>
                                    IV – gerenciar as atas de registro de preços;
                                </p>
                                <p>
                                    V – estabelecer relacionamento entre unidades requisitantes da UFRN, Diretoria de Compras e mercado fornecedor;
                                </p>
                                <p>
                                    VI – controlar e acompanhar os processos para pagamento e os empenhos junto aos fornecedores dos bens e serviços contratados;
                                </p>
                                <p>
                                    VII – controlar e acompanhar as notificações para fins de apuração de inadimplências.
                                </p>

                                <ContatoModal nome='Rute Clea Pereira de Noronha (Chefe)'  telefone="(84) 99204-5432" emailPrimario="rute.noronha@ufrn.br" />

                            </p>
                        </>
                        )} >
            <img src={CashLogo} alt="logo" />
            <div className="item-content">
              <h1 className='item-title'>DIVISÃO DE PLANEJAMENTO DE GERENCIAMENTO DE COMPRAS</h1>
              <p className="item-description">Cabe a Divisão de Planejamento de Gerenciamento de Compras (DPGC) coordenar o planejamento das contratações por meio de
                licitação que resultam futuramente em itens disponibilizados em atas SRP (próprias ou de outros órgãos por meio de adesão), bem como das
                contratações diretas. </p>
            </div>
          </div>

        </div>
      </div>

      <Modal
        title={modalTitle}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      > <p>
          {modalContent}

        </p>
      </Modal>
    </section>
  )
}

export default DiretoriasCoord;