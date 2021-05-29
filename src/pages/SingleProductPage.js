import "../css/SingleProduct.css";
import { useEffect, useState } from "react";
import { getProduct } from "../http/api";
import { useParams } from "react-router";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";
import { actionTypes } from "../utils/reducer";
import { useStateValue } from "../utils/StateProvider";
import BarraAnuncio from "../Components/BarraAnuncio";

export default function SingleProduct() {
  const [, dispatch] = useStateValue();

  const [productInfo, setProductInfo] = useState(null);

  const { identificador } = useParams();

  const [numImagen, setNumImagen] = useState(0);

  useEffect(() => {
    getProduct(identificador).then((data) => {
      setProductInfo(data);
    });
  }, [identificador]);

  const cambiarImg = (index) => {
    setNumImagen(index);
  };

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        _id,
        price,
        title,
        description,
        created_at,
        newUrl,
      },
    });
  };

  if (productInfo === null) return null;

  const { _id, price, title, description, created_at, newUrl } = productInfo;

  return (
    <>
      <BarraAnuncio />
      <NavBar />
      <div className="small-container single-product">
        <div className="row">
          {productInfo ? (
            <>
              <div className="col-2">
                <img
                  src={newUrl[numImagen].url}
                  widht="100%"
                  alt="imagen"
                  id="ProductImg"
                ></img>
                <div className="small-img-row">
                  {productInfo.newUrl.map((data, index) => {
                    return (
                      <>
                        <div className="small-img-col">
                          <img
                            src={newUrl[index].url}
                            alt="He"
                            id="small-img"
                            key={index}
                            onClick={() => cambiarImg(index)}
                          ></img>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="col-2">
                <p>Ordenadores / Gaming</p>
                <h1>{title}</h1>
                <h4>{price}.00€</h4>
                <label>Cantidad</label>
                <input type="number" readOnly/>
                <a className="" onClick={addToBasket} href="#!">
                  Añadir al Carrito
                </a>
                <h3>Detalles del producto</h3>
                <br />
                <p>{description}</p>
              </div>
            </>
          ) : (
            <div>
              <h1>Cargando...</h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
