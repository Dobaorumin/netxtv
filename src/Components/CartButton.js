import { ShoppingCart } from "@material-ui/icons";
import { IconButton, Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import {useStateValue} from "../utils/StateProvider"

export default function CartButton(){
    const [{localCarrito}] = useStateValue();
    return (
        <Link to="/carrito">
      <IconButton
        style={{
          position: "fixed",
          bottom: 0,  
          margin: "20px",
          background: "white",
          zIndex: "10",
          boxShadow: "0px 2px 2px #2px 3px 10px rgb(0 0 0 / 15%)",
        }}
        arial-label="show cart items"
        color="inherit"
      >
        <Badge badgeContent={localCarrito?.length} color="secondary" style={{margin:"-4px"}}>
          <ShoppingCart fontSize="small" color="primary" />
        </Badge>
      </IconButton>
    </Link>
    )
}