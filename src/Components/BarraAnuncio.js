import "../css/BarraAnuncio.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function BarraAnuncio() {
    return(
        <div className="barraAnuncio-container">
            <p className="TextBarraAnuncio">Envíos a todas las Islas Canarias</p>
            <a href="https://www.linkedin.com/in/christiandobao/"><LinkedInIcon/></a>
        </div>

    )
}
