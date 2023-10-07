import styled from "styled-components";
import LogoContent from "./Logo/Logo";
import Menu from "./Menu/Menu";

const NavBar2Styled = styled.div`
margin-top: 2rem;
height: 200px;
background-color: var(--color-oxfordBlue);

display: flex;
justify-content: space-between;
`


const NavBar2 = () => {

    return <NavBar2Styled>
        <LogoContent></LogoContent>
        <Menu></Menu>
    </NavBar2Styled>
}

export default NavBar2