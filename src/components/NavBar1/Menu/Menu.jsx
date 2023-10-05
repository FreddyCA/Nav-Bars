import styled from "styled-components";
import PropTypes from "prop-types";

const MenuStyle = styled.div`
  height: 100px;
  /* width: 500px; */
  display: flex;
  align-items: center;
`;
const ListStyle = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItemsStyle = styled.li`
  color: var(--color-azure);
  margin: 0 0.5rem;
  padding: 1rem;
  white-space: nowrap;
  height: max-content;
  font-weight: 700;
  font-size: 1.175rem;
  border-bottom: 2px solid var(--color-hookersGreen);
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--color-azure);
    color: var(--color-hookersGreen);
  }
`;

const Menu = ({ data }) => {
  return (
    <MenuStyle>
      <ListStyle>
        {data.map((item, index) => (
          <ListItemsStyle key={index}>{item.title}</ListItemsStyle>
        ))}
      </ListStyle>
    </MenuStyle>
  );
};

Menu.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Menu;
