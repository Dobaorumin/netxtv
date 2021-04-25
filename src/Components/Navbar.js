import "../css/Navbar.css";
import { ShoppingCart } from "@material-ui/icons";
import { IconButton, Badge } from "@material-ui/core";

window.onload = function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const navSlide = () => {
    burger.addEventListener("click", () => {
      //togle Nav
      nav.classList.toggle("nav-active");
      navLinks.forEach((link, index) => {
        //animate links
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.8s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });
      burger.classList.toggle("toggle");
    });
  };

  navSlide();
};

export default function NavBar() {
  return (
    <>
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
        <Badge badgeContent={2} color="secondary" style={{margin:"-4px"}}>
          <ShoppingCart fontSize="small" color="primary" />
        </Badge>
      </IconButton>
      <nav className="NavContainer">
        <div className="logo">
          <h4 className="Logo">NetxTV</h4>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/televisores">TELEVISORES</a>
          </li>
          <li>
            <a href="/moviles-y-tablets">MÓVILES Y TRABLETS</a>
          </li>
          <li>
            <a href="/ordenadores">ORDENADORES</a>
          </li>
          <li>
            <a href="/monitores">MONITORES</a>
          </li>
          <li>
            <a href="/contacto">CONTACTO</a>
          </li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}
