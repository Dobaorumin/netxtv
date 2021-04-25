import { useEffect, useState,useStateValue } from "react";
import { getProductos } from "../http/api";
import { makeStyles } from "@material-ui/core/styles";
import "../css/Card.css";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  action: {
    marginTop: "1rem",
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
}));

export default function GetProductos() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  //const [[basket], dispatch] = useStateValue();
  const [product, setProduct] = useState([]);

  const handleExpandClick = () => {
    setExpanded(true);
  };

  const addToBasket = () => {
  };

  useEffect(() => {
    getProductos().then((value) => {
      setProduct(value);
    });
  }, []);
  return (
    <>
    <h1>Productos</h1>
      {product.map((data) => {
        const image = `http://localhost:1337${data.Imagen[0].formats.small.url}`
        console.log(data);
        return (
        <>
          <Card key={data.id} className={classes.root}>
            <CardHeader
              action={
                <Typography
                  className={classes.action}
                  variant="h5"
                  color="textSecondary"
                >
                  {`${data.Precio}€`}
                </Typography>
              }
              title={data.Titulo}
              subheader={data.created_at.split("T")[0]}
            />
            <CardMedia className={classes.media} image={image}/>
            <CardContent />
          </Card>
          </>
        );
      })}
    </>
  );
}
