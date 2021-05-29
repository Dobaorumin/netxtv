import "../css/Categorias.css";
import {Link} from "react-router-dom"

export default function Categorias() {
  return (
    <section>
      <div id="comprar" className="title">Categorias</div>
      <div className="container">
      <Link to="/categorias/televisores"className="categoria-card TV" href="/">
      <div className="wrap">
        <div className="image__img">
        </div>
        <div className="image__overlay">
          <div className="img__title">Smart TV</div>
          <button href="#!">Ver más</button>
        </div>
      </div>
      </Link>
      <Link to="/categorias/portatiles" className="categoria-card Portatil" href="/">
      <div className="wrap">
        <div className="image__img"></div>
        <div className="image__overlay">
          <div className="img__title">Portatiles</div>
          <button href="#!">Ver más</button>
        </div>
      </div>
      </Link>
      <Link to="/categorias/ordenadores" className="categoria-card Gaming" href="/">
      <div className="wrap">
        <div className="image__img"></div>
        <div className="image__overlay">
          <div className="img__title">PC Gaming</div>
          <button href="#!">Ver más</button>
        </div>
      </div>
      </Link>
      <Link to="/categorias/monitores" className="categoria-card Monitor" href="/">
      <div className="wrap">
        <div className="image__img"></div>
        <div className="image__overlay">
          <div className="img__title">Monitores</div>
          <button href="#!">Ver más</button>
        </div>
      </div>
      </Link>
      <Link to="/categorias/moviles" className="categoria-card Movil" href="/">
      <div className="wrap">
        <div className="image__img"></div>
        <div className="image__overlay">
          <div className="img__title">Smartphones</div>
          <button href="#!">Ver más</button>
        </div>
      </div>
      </Link>
      </div>
    </section>
  );
}
