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
  background-color: var(--color-hookersGreen);
  color: var(--color-azure);
  margin: 0 1rem;
  padding: 1rem;
  white-space: nowrap;
  height: max-content;
  
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
