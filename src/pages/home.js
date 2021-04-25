import BarraAnuncio from "../Components/BarraAnuncio";
import Categorias from "../Components/Categorias";
import Footer from "../Components/Footer";
import GetProductos from "../Components/GetProducts";
import ImageSlider from "../Components/ImageSlider";
import NavBar from "../Components/Navbar";

export default function Home() {
    return (
        <>
        <BarraAnuncio/>
        <NavBar/>
        <ImageSlider/>
        <Categorias/>
        <GetProductos/>
        <Footer/>
        
        </>
    )
}