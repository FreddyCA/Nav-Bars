import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import IconMenu from "../IconMenu/IconMenu";

const MenuStyle = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  z-index: 10;
  @media screen and (max-width: 992px) {
    position: absolute;
    right: 0;
    width: 300px;
    height: auto;
    flex-direction: column;
  }
  @media screen and (max-width: 576px) {
    width: 200px;
  }
`;

const ItemContentStyle = styled.div`
  height: 70px;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 992px) {
    width: 100%;
    height: 50px;
    justify-content: center;
    box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.5);

    ${(props) =>
      props.$estadoMenu
        ? css`
            display: none;
          `
        : css`
            display: flex;
            &:nth-child(2) {
              animation: slideInRight 0.25s forwards;
            }
            &:nth-child(3) {
              animation: slideInRight 0.5s forwards;
            }
            &:nth-child(4) {
              animation: slideInRight 0.75s forwards;
            }
            &:nth-child(5) {
              animation: slideInRight 1s forwards;
            }
            &:nth-child(6) {
              animation: slideInRight 1.25s forwards;
            }
            &:nth-child(7) {
              animation: slideInRight 1.5s forwards;
            }
          `}
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
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

  @media screen and (max-width: 992px) {
    width: 100%;
    justify-content: center;
    font-weight: 400;
    border: none;
    background-color: var(--color-darkBrown);
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
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
    &:hover {
      background-color: var(--color-hookersGreen);
      color: var(--color-azure);
    }
    ${(props) =>
      props.$isLast &&
      css`
        background-color: var(--color-darkBrown);
        color: var(--color-azure);
        &:hover {
          background-color: var(--color-hookersGreen);
          color: var(--color-azure);
        }
      `}
  }
`;

const Menu = ({ data, desktop }) => {
  const [estado, setEstado] = useState(true);

  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenuClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setEstado(true);
      }
    };
    document.addEventListener("click", closeMenuClick);
    return () => {
      document.removeEventListener("click", closeMenuClick);
    };
  }, []);

  const togleEstado = () => {
    setEstado(!estado);
  };

  const closeMenu = () => {
    setEstado(!estado);
  };

  return (
    <MenuStyle ref={menuRef}>
      {!desktop && <IconMenu onClick={togleEstado} estado={estado} />}

      {data.map((item, index) => (
        <ItemContentStyle key={index} $estadoMenu={estado}>
          <ItemTitleStyle
            $isLast={index === data.length - 1}
            href={item.url}
            onClick={closeMenu}
          >
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
