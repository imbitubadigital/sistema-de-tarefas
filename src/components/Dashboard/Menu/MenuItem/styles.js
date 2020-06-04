import styled, { keyframes } from 'styled-components';

import { NavLink } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0);
    opacity: 0;
  }
`;

export const BoxItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkMenu = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1px 0;
  padding: 10px 10px 10px 15px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  i {
    font-size: 16px;
  }
  border-right: 4px solid rgba(0, 0, 0, 0);

  &.active {
    background: #209e91;
  }

  &:hover {
    border-right: 4px solid #209e91;
    color: #209e91;
    transition: all 0.3s linear;
    background: rgba(0, 0, 0, 0);
    p {
      color: #209e91;
    }
  }
`;

export const FalseLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1px 0;
  padding: 10px 10px 10px 15px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  border-right: 4px solid rgba(0, 0, 0, 0);

  i {
    font-size: 16px;
  }

  &:hover {
    border-right: 4px solid #209e91;
    color: #209e91;
    transition: all 0.3s linear;
    background: rgba(0, 0, 0, 0);
    cursor: pointer;
    p {
      color: #209e91;
    }
  }
`;

export const ContentItem = styled.div`
  flex: 1;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    flex: 1;
    text-decoration: none;
    color: #fff;
    padding-left: 10px;
    font-size: 14px;
  }

  p {
    display: flex;
    flex: 1;
    text-decoration: none;
    color: #fff;
    padding-left: 10px;
    font-size: 14px;
  }

  span {
    i {
      font-size: 12px;
      font-weight: 300;
    }
  }
`;

export const SubItems = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  animation: ${props => (!props.isOpen ? fadeOut : fadeIn)} 0.3s linear;
`;

export const SubLink = styled(NavLink)`
  flex: 1;
  margin: 1px 0;
  padding: 10px 10px 10px 38px;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  width: 100%;
  border-right: 4px solid rgba(0, 0, 0, 0);

  &.active {
    background: #209e91;
  }
  &:hover {
    border-right: 4px solid #209e91;
    color: #209e91;
    transition: all 0.3s linear;
    background: rgba(0, 0, 0, 0);
  }
`;
