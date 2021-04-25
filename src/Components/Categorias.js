import "../css/Categorias.css";

export default function Categorias() {
  return (
    <section>
      <h1 className="title">Categorias</h1>
      <div className="container">
      <a className="categoria-card TV" href="/">
      <div className="wrap">
        <div className="image__img">
        </div>
        <div className="image__overlay">
          <div className="img__title">Smart TV</div>
          <a href="#!">Ver más</a>
        </div>
      </div>
      </a>
      <a className="categoria-card Portatil" href="/">
      <div className="wrap">
        <div className="image__img"></div>
        <div className="image__overlay">
          <div className="img__title">Portatiles</div>
          <a href="#!">Ver más</a>
        </div>
      </div>
      </a>
      <a className="categoria-card Gaming" href="/">
      <div className="wrap">
        <div className="image__img"></div>
        <div className="image__overlay">
          <div className="img__title">PC Gaming</div>
          <a href="#!">Ver más</a>
        </div>
      </div>
      </a>
      <a className="categoria-card Monitor" href="/">
      <div className="wrap">
        <div className="image__img"></div>
        <div className="image__overlay">
          <div className="img__title">Monitores</div>
          <a href="#!">Ver más</a>
        </div>
      </div>
      </a>
      <a className="categoria-card Movil" href="/">
      <div className="wrap">
        <div className="image__img"></div>
        <div className="image__overlay">
          <div className="img__title">Smartphones</div>
          <a href="#!">Ver más</a>
        </div>
      </div>
      </a>
      </div>
    </section>
  );
}
