import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import "../css/Cart.css";
import { useStateValue } from "../utils/StateProvider";
import { actionTypes } from "../utils/reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
    padding: "2rem",
  },
  btn: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    padding: "10px",
  },
}));

export default function CheckOut({item}) {
  const [, dispatch] = useStateValue();
  const classes = useStyles();

  const deleteFromBasket = () =>
    dispatch({
      type: actionTypes.REMOVE_ITEMS,
      id: item._id,
    });

  return (
    <div className="product-out">
      <img
        alt="Imagen del producto"
        src={item?.newUrl[0].url}
      />
      <div className="product-info">
        <h3 className="product-name">{item?.title}</h3>
        <h4 className="product-price">Precio: {item?.price}€</h4>
        <p className="product-quantity">
          Cantidad <input value={item?._id} name="cantidad"></input>
        </p>
        <IconButton className={classes.btn} arial-label="Remove product">
          <DeleteIcon fontSize="default" onClick={deleteFromBasket} />
        </IconButton>
      </div>
    </div>
  );
}
