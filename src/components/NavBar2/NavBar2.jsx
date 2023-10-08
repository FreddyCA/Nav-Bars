import styled from "styled-components";
import PropTypes from "prop-types";
import LogoContent from "./Logo/Logo";
import Menu from "./Menu/Menu";

const NavBar2Styled = styled.div`
  margin-top: 2rem;
  padding: 0 2rem;
  height: 200px;
  background-color: var(--color-oxfordBlue);

  display: flex;
  justify-content: space-between;
`;

const NavBar2 = ({ data, desktop }) => {
    console.log(desktop)
  return (
    <NavBar2Styled>
      <LogoContent></LogoContent>
      <Menu data={data}></Menu>
    </NavBar2Styled>
  );
};

NavBar2.propTypes = {
  data: PropTypes.array.isRequired,
  desktop: PropTypes.bool.isRequired,
};

export default NavBar2;
