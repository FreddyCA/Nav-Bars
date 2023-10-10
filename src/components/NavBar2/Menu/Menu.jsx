import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import IconMenu from "../IconMenu/IconMenu";

const MenuStyle = styled.div`
  height: 100px;
  /* width: 500px; */
  /* background-color: yellowgreen; */
  display: flex;
  align-items: center;
  @media screen and (max-width: 992px) {
    background-color: yellow;
    position: absolute;
    right: 0;
    width: 300px;
    height: auto;
    flex-direction: column;
  }
`;

const ItemContentStyle = styled.div`
  /* background-color: turquoise; */
  height: 70px;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;

  
  @media screen and (max-width: 992px) {
    width: 100%;
    height: 50px;
    justify-content: center;

    ${(props) =>
      props.$estadoMenu &&
      css`
        background-color: red;
        display: none;
      `}
  }
`;

const ItemTitleStyle = styled.a`
  text-align: center;
  height: 100%;
  display: flex;
  padding: 0 1rem;
  font-weight: 700;
  font-size: 1.175rem;
  text-decoration: none;
  color: var(--color-azure);
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: var(--color-azure);
    color: var(--color-oxfordBlue);
  }
  @media screen and (max-width: 992px) {
    width: 100%;
    justify-content: center;
    background-color: blue;
  }

  ${(props) =>
    props.$isLast &&
    css`
      color: var(--color-oxfordBlue);
      background-color: var(--color-azure);
      position: relative;
      overflow: hidden;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 1.5px;
        left: 50%;
        background-color: var(--color-azure);
        transition: width 0.4s ease;
      }
      &::before {
        top: 0;
        transform: translateX(-50%);
      }
      &::after {
        bottom: 0;
        transform: translateX(-50%);
      }
      &:hover::before,
      &:hover::after {
        width: 100%;
      }
      &:hover {
        background-color: transparent;
        color: var(--color-azure);
      }
    `}
`;

const Menu = ({ data, desktop }) => {
  console.log(desktop);

  const [estado, setEstado] = useState(true);
  const togleEstado = () => {
    setEstado(!estado);
  };
  return (
    <MenuStyle>
      {!desktop && <IconMenu onClick={togleEstado} estado={estado} />}

      {data.map((item, index) => (
        <ItemContentStyle key={index} $estadoMenu={estado}>
          <ItemTitleStyle $isLast={index === data.length - 1} href={item.url}>
            {item.title}
          </ItemTitleStyle>
        </ItemContentStyle>
      ))}
    </MenuStyle>
  );
};

Menu.propTypes = {
  data: PropTypes.array.isRequired,
  desktop: PropTypes.bool.isRequired,
};

export default Menu;
