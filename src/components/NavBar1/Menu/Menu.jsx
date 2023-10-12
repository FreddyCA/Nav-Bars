import styled, { css, keyframes } from "styled-components";
import PropTypes from "prop-types";
import MenuIcon from "../MenuIcon/MenuIcon";
import { useEffect, useRef, useState } from "react";

const MenuStyle = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  z-index: 20;

  @media screen and (max-width: 992px) {
    width: 300px;
    position: absolute;
    right: 0;
    flex-direction: column;
    ${(props) =>
      !props.$menuOpen &&
      css`
        background-color: var(--color-darkBrown);
      `}
  }
  @media screen and (max-width: 576px) {
    width: 200px;
  }
`;
const ListStyle = styled.ul`
  list-style: none;
  display: flex;
  height: 50px;
  align-items: center;

  ${(props) =>
    !props.$desktop &&
    css`
      flex-direction: column;
      width: 100%;
      align-items: center;
    `}

  @media screen and (max-width: 992px) {
    border-top: 3px solid var(--color-hookersGreen);
    ${(props) =>
      props.$menuOpen &&
      css`
        display: none;
      `}
  }
`;
const ListAnimationStyle = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const ListItemsStyle = styled.li`
  color: var(--color-azure);
  margin: 0 0.5rem;
  white-space: nowrap;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.175rem;
  border-bottom: 2px solid var(--color-hookersGreen);
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;

  &:last-child {
    border: 2px solid var(--color-hookersGreen);
  }
  &:hover {
    background-color: var(--color-azure);
    color: var(--color-hookersGreen);
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    font-weight: 400;
    text-align: center;
    border-bottom: 2px solid var(--color-hookersGreen);
    border-radius: 0;
    background-color: var(--color-darkBrown);

    animation: ${ListAnimationStyle} 0.5s ease-in-out;
    animation-fill-mode: both;
    &:nth-child(1) {
      animation-delay: 0.01s;
    }
    &:nth-child(2) {
      animation-delay: 0.05s;
    }
    &:nth-child(3) {
      animation-delay: 0.1s;
    }
    &:nth-child(4) {
      animation-delay: 0.15s;
    }
    &:nth-child(5) {
      animation-delay: 0.2s;
    }
    &:nth-child(6) {
      animation-delay: 0.25s;
    }

    &:last-child {
      border: none;
      border-bottom: 2px solid var(--color-hookersGreen);
    }
  }
  @media screen and (max-width: 576px) {
    font-size: 1rem;
  }
`;

const ListLinkStyle = styled.a`
  text-decoration: none;
  padding: 1rem;
  width: 100%;
  color: var(--color-azure);
  border-radius: 5px;
  &:hover {
    color: var(--color-hookersGreen);
  }
`;

const Menu = ({ data, desktop }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleMenuClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(true);
      }
    };
    document.addEventListener("click", handleMenuClick);
    return () => {
      document.removeEventListener("click", handleMenuClick);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleItem = () => {
    if (!desktop) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <MenuStyle $menuOpen={menuOpen} ref={menuRef}>
      {!desktop && <MenuIcon onClick={toggleMenu} estado={menuOpen}></MenuIcon>}
      <ListStyle $desktop={desktop} $menuOpen={menuOpen}>
        {data.map((item, index) => (
          <ListItemsStyle key={index} $desktop={desktop} onClick={toggleItem}>
            <ListLinkStyle href={item.url}>{item.title}</ListLinkStyle>
          </ListItemsStyle>
        ))}
      </ListStyle>
    </MenuStyle>
  );
};

Menu.propTypes = {
  data: PropTypes.array.isRequired,
  desktop: PropTypes.bool.isRequired,
};

export default Menu;
