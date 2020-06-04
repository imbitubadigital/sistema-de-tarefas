import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.4);
  min-height: 100%;
  max-height: 100%;

  width: ${props => (props.show ? '184px' : '50px')};
  padding-top: 90px;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
  }
`;
