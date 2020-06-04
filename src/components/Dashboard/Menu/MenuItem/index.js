import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { showMenu } from '~/store/modules/menu/actions';
import {
  BoxItem,
  LinkMenu,
  FalseLink,
  ContentItem,
  SubItems,
  SubLink,
} from './styles';

export default function MenuItem({ menu }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuVisible = useSelector(state => state.menu.menuVisible);

  const dispatch = useDispatch();

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  function handleShowMenu() {
    dispatch(showMenu());
  }

  return (
    <BoxItem>
      {menu.subs.length > 0 ? (
        <>
          <FalseLink onClick={handleOpen}>
            <i
              className={`fa fa-${menu.icon}`}
              aria-hidden="true"
              onClick={handleShowMenu}
            />
            <ContentItem visible={menuVisible}>
              <p>{menu.name}</p>
              <span>
                {isOpen ? (
                  <i className="fa fa-chevron-up" aria-hidden="true" />
                ) : (
                  <i className="fa fa-chevron-down" aria-hidden="true" />
                )}
              </span>
            </ContentItem>
          </FalseLink>
          {menuVisible && (
            <SubItems isOpen={isOpen}>
              {menu.subs.map(sub => (
                <SubLink to={sub.url} title={sub.name} key={sub.url}>
                  {sub.name}
                </SubLink>
              ))}
            </SubItems>
          )}
        </>
      ) : (
        <>
          <LinkMenu exact={menu.name === 'Dashboard'} to={menu.url}>
            <i
              className={`fa fa-${menu.icon}`}
              aria-hidden="true"
              onClick={handleShowMenu}
            />
            <ContentItem visible={menuVisible}>
              <p>{menu.name}</p>
              <span />
            </ContentItem>
          </LinkMenu>
        </>
      )}
    </BoxItem>
  );
}

MenuItem.propTypes = {
  menu: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string,
    url: PropTypes.string,
    subs: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      })
    ),
  }).isRequired,
};
