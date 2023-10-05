import styled from "styled-components";
import PropTypes from "prop-types";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";

const NavBar1Style = styled.div`
  height: 200px;
  background-color: var(--color-oxfordBlue);
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;

const NavBar1 = ({ data, desktop }) => {
  // console.log(data);
  console.log(desktop)
  return (
    <NavBar1Style>
      <Logo></Logo>
      {desktop && <Menu data={data}></Menu>}
    </NavBar1Style>
  );
};

NavBar1.propTypes = {
  data: PropTypes.array.isRequired,
  desktop: PropTypes.bool.isRequired,
};

export default NavBar1;
