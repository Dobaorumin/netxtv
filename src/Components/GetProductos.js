import { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import "../css/Card.css";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Collapse } from "@material-ui/core";
import { useStateValue } from "../utils/StateProvider";
import { actionTypes } from "../utils/reducer";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
    maxWidth: "345px",
    boxShadow:"0px 0px 8px 4px rgba(0,0,0,0.34)",
  },

  action: {
    marginTop: "1rem",
    marginRight:"1rem"
  },

  media: {
    height: "300px",
    paddingTop: "56.25%",
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },

  expandOpen: {
    transform: "rotate(180deg)",
  },

  title: {
    overflow: "hidden",
    maxHeight: "60px",
    textOverflow:"ellipsis",
    whiteSpace:"nowrap",
    width:"200px",
    fontSize:"large",
  },
}));

export default function GetProductos({
  data: { _id, price, title, description, created_at,newUrl },
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [{ localCarrito }, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
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
        newUrl
      },
    });
  };

  return (
    <>
      <Card key={_id} className={classes.root}>
    <Link style={{textDecoration:"none",color:"black"}} to={`/products/${_id}`}>
        <CardHeader
          action={
            <Typography
              className={classes.action}
              variant="h5"
              color="textSecondary"
            >
              {`${price}€`}
            </Typography>
          }
          title={<Typography className={classes.title}>{title}</Typography>}
          subheader={created_at.split("T")[0]}
        />
        <CardMedia
          className={classes.media}
          image={newUrl[0].url}
          />
        </Link>
        <CardActions disableSpacing>
          <IconButton arial-label="Add to cart" onClick={addToBasket}>
            <AddShoppingCart fontSize="default" />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paraph>{description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
