import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {getProductosCategorias} from "../http/api";
import GetProductos from "./GetProductos"
import NavBar from "./Navbar";
import Footer from "./Footer";
import BarraAnuncio from "./BarraAnuncio";


const useStyles = makeStyles((theme) => ({
  root: {
    width:"auto",
    flexGrow: 1,
    padding: theme.spacing(3),
    minHeight:"800px",
  },
  grid: {
    marginTop: theme.spacing(3),
  },
}));

export default function ProductOnGrid() {
  const [product, setProduct] = useState([]);
  const { nombre } = useParams();
  const classes = useStyles();

  useEffect(() => {
    getProductosCategorias(nombre).then((data) => {
      setProduct(data);
    });
  }, [nombre]);
  
    

  return (
    <>
    <BarraAnuncio/>
    <NavBar/>
      <h1 className="Titulo">{nombre.toUpperCase()}</h1>
      <p className="results">Mostrando {product.length} resultados</p>
      <div className={classes.root}>
        <Grid className={classes.grid} container spacing={3}>
          {product.map((data,index) => {
            return(
            <Grid key={data._id} item xs={12} sm={6} md={4} lg={3}>
              <GetProductos key={data._id + index} data={data}/>
            </Grid>
            )
          })}
        </Grid>
      </div>
      <Footer/>
    </>
  );
}
