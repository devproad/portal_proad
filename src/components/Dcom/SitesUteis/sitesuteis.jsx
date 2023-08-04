import './sitesuteis.css'

export default function SitesUteis() {
  return (
    <div className="containerSitesUteis">
      <div className="headerSitesUteis">
        <h1>Sites</h1>
        <hr />
      </div>
      <div className="itens">
        <div className="item">
          <a href="https://www.ufrn.br/" target="_blank" rel="noopener">Portal da UFRN</a>
        </div>
        <div className="item">
          <a href="https://www.gov.br/compras/pt-br" target="_blank" rel="noopener">Portal de Compras</a>
        </div>
        <div className="item">
          <a href="https://sipac.ufrn.br/" target="_blank" rel="noopener">SIPAC</a>
        </div>
      </div>
    </div>
  )
}