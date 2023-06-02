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
          <a href="#">Portal da UFRN</a>
        </div>
        <div className="item">
          <a href="#">Portal de Compras</a>
        </div>
        <div className="item">
          <a href="#">SIPAC</a>
        </div>
      </div>
    </div>
  )
}