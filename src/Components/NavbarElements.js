import styled from "styled-components"
import {FaBars} from "react-icons/fa"

export const Nav = styled.div`
    background: #000;
    height:80px;
    display:flex;
    justify-content:space-between;
    padding: 0.5rem calc((100vh - 1000px) / 2);
    z-index:10;
`


export const Bars = styled(FaBars)`
display:none;
color:#fff;

    @media screen and (max-width: 938px){
        display:block;
        position:absolute;
        right:0;
        margin: 15.5px;
        transform: translate()(-100%,75%);
        font-size: 1.8rem;
        cursor:pointer;
    }
`

export const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right: -24px;

@media screen and (max-width: 938px) {
    display:none;
}
`

export const NavBtn = styled.nav`
display:flex;
align-items:center;
margin-right: 24px;

@media screen and (max-width: 938px) {
    display:none;
}
`

export const NavBtnLink = styled.a`
border-radius:4px;
background: #256ce1;
padding: 10px 22px;
color: #fff;
border:none;
outline:none;
cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

 &:hover {
     transition: all 0.2s ease-in-out;
     background:#fff;
     color: #010606;
 }
`

export const BarsContent = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  top: 111px;
  width: 300px;
  background: black;
  right: ${(props) => (props.active ? "0px" : "-300px")};
  height: calc(100vh - 59px);
  transition: right 1s ease-in-out;
  z-index:3;
  position:${(props) => (props.active ? "absolute" : "fixed")};

  @media screen and (max-width: 448px){
    height:calc(100vh - 31px);
  }
`