import BarraAnuncio from "../Components/BarraAnuncio";
import Categorias from "../Components/Categorias";
import Footer from "../Components/Footer";
import GetProductos from "../Components/GetProducts";
import Header from "../Components/Header";
import NavBar from "../Components/Navbar";

export default function Home() {
    return (
        <>
        <BarraAnuncio/>
        <NavBar/>
        <Header/>
        <Categorias/>
        <GetProductos/>
        <Footer/>
        </>
    )
}