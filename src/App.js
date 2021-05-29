import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Carrito from './pages/Carrito';
import SingleProduct from './pages/SingleProductPage';
import CheckOut from "./CheckoutForm/Checkout"
import ProductOnGrid from "./Components/ProductOnGrid"
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route exact path="/products/:identificador">
            <SingleProduct/>
        </Route>
        <Route exact path="/carrito">
            <Carrito/>
        </Route>
        <Route exact path="/monitores">
            <Home></Home>
        </Route>
        <Route exact path="/ordenadores">
            <Home></Home>
        </Route>
        <Route exact path="/moviles-y-tablets">
            <Home></Home>
        </Route>
        <Route exact path="/categorias/:nombre">
            <ProductOnGrid/>
        </Route>
        <Route exact path="/contacto">
            <Home></Home>
        </Route>
        <Route exact path="/Pago">
            <CheckOut/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
