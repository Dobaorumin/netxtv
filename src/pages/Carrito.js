import CheckOut from "../Components/CheckOut";
import "../css/Cart.css";
import BarraAnuncio from "../Components/BarraAnuncio";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useStateValue } from "../utils/StateProvider";
import { getBasketTotal } from "../utils/reducer";
import { AddShoppingCart } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";


export default function Carrito() {
  const [{ localCarrito }] = useStateValue();
  return (
    <>
      <BarraAnuncio />
      <NavBar />
      <div className="container-out">
        <h1 className="Titulo">Carrito</h1>
        {localCarrito?.length === 0 ? (
            <div className="cart-total">
          <h1>
            Tu carrito está actualmente vacío, recuerda que puedes añadir
            productos a tu carrito pulsando en el boton:{" "}
            {
              <IconButton style={{backgroundColor:"steelblue"}}>
                <AddShoppingCart size="large" ></AddShoppingCart>
              </IconButton>
            }
          </h1>
            <h4 style={{textAlign:"center"}}>! Visita nuestras categorias y encuentra tu producto ideal ¡</h4>
            <a href="/#comprar">Categorias</a>
          </div>
        ) : null}
        {localCarrito?.length === 0 ? null : <div className="cart-out">
          <div className="products-out">
            {localCarrito?.map((item) => (
              <CheckOut key={item._id} item={item}></CheckOut>
            ))}
          </div>
          <div className="cart-total">
            <p>
              <span>Precio Total:</span>
              <span>{getBasketTotal(localCarrito)} €</span>
            </p>
            <p>
              <span>Número de productos:</span>
              <span>{localCarrito?.length}</span>
            </p>
            <a href="/Pago">Pagar</a>
          </div>
        </div>}
      </div>
      <Footer />
    </>
  );
}
