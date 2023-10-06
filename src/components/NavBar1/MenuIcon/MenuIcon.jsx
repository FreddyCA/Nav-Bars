import styled from "styled-components";
import PropTypes from "prop-types";
import Menu from "../../../assets/icons/menu.svg";
import MenuX from "../../../assets/icons/menuX.svg";

const MenuIconContStyle = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: end;
`;
const MenuIconStyle = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;


const MenuIcon = ({ estado, onClick }) => {
  return (
    <MenuIconContStyle>
      {estado ? (
        <MenuIconStyle src={Menu} alt="open menu" onClick={onClick}/>
      ) : (
        <MenuIconStyle src={MenuX} alt="close menu" onClick={onClick} />
      )}
    </MenuIconContStyle>
  );
};

MenuIcon.propTypes = {
  estado: PropTypes.bool.isRequired,
  onClick:PropTypes.func.isRequired
};

export default MenuIcon;
