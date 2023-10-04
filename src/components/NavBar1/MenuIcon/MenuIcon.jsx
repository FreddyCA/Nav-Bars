import styled from "styled-components";
import MiSVG from "../../../assets/icons/menu.svg";


const MenuIconStyle = styled.img`
width: 30px;
height: 30px;
`

const MenuIcon = () => {

    return <MenuIconStyle src={MiSVG} alt="abrir menu"/>
}

export default MenuIcon