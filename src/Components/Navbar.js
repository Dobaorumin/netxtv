import "../css/Navbar.css";
import { useState } from "react";
import {BarsContent,Nav,Bars,NavMenu,NavBtn,NavBtnLink} from "./NavbarElements"
import CartButton from "./CartButton";

import styled from "styled-components"
import {NavLink as Link} from "react-router-dom";


const NavLink = styled(Link)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height:100%;
cursor:pointer;

    &.active {
        color:#15cdfc;
    }
`


export default function NavBar() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const onBurgerLinkClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };



  return (
    <div>
    <CartButton/>
    <Nav>
      <NavLink to="/">
        <h1>NetXTV</h1>
      </NavLink>
      <Bars onClick={onBurgerLinkClick} />
      <NavMenu>
        <NavLink to="/categorias/televisores" >
          SmartTV
        </NavLink>
        <NavLink to="/categorias/portatiles" >
          Portatiles
        </NavLink>
        <NavLink to="/categorias/ordenadores" >
          Ordenadores
        </NavLink>
        <NavLink to="/categorias/moviles" >
          SmartPhones
        </NavLink>
        <NavLink to="/categorias/monitores" >
          Monitores
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink href="#comprar">Comprar</NavBtnLink>
      </NavBtn>
    </Nav>
    <BarsContent active={isBurgerOpen}>
        <a href="/categorias/televisores"className="burgerContent" to="/categorias/televisores">SmartTv</a>
        <a href="/categorias/portatiles"className="burgerContent" to="/categorias/portatiles">Portatiles</a>
        <a href="/categorias/ordenadores"className="burgerContent" to="/categorias/ordenadores">Ordenadores</a>
        <a href="/categorias/moviles" className="burgerContent" to="/categorias/moviles">SmartPhones</a>
        <a href="/categorias/monitores"className="burgerContent" to="/categorias/monitores">Monitores</a>
        </BarsContent>
    </div>
  );
}
