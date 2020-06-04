import React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from './MenuItem';
import { Nav } from './styles';

import itemsMenus from './Config';

export default function Menu() {
  const menuVisible = useSelector(state => state.menu.menuVisible);
  return (
    <Nav show={menuVisible}>
      {itemsMenus.map(menu => (
        <MenuItem menu={menu} key={menu.url} />
      ))}
    </Nav>
  );
}
