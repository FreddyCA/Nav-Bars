import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import OpenMenu from "../../../assets/icons/menu.svg";
import CloseMenu from "../../../assets/icons/menuX.svg";

const IconMenuStyle = styled.div`
  /* background-color: blue; */
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 2rem;

  ${(props) =>
    !props.$estado &&
    css`
      background-color: var(--color-darkBrown);
      border-bottom: 2px solid var(--color-azure);
    `}
`;

const IconMenuImgStyle = styled.img`
  width: 30px;
  height: 28px;
  cursor: pointer;
`;

const IconMenu = ({ estado, onClick }) => {
  return (
    <IconMenuStyle $estado={estado}>
      {estado ? (
        <IconMenuImgStyle src={OpenMenu} onClick={onClick} />
      ) : (
        <IconMenuImgStyle src={CloseMenu} onClick={onClick} />
      )}
    </IconMenuStyle>
  );
};

IconMenu.propTypes = {
  estado: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconMenu;
