import styled, { keyframes } from 'styled-components';

const fadeBox = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  z-index: 2000;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  min-width: 300px;
  max-width: 340px;
  border-radius: 5px;
  animation: ${fadeBox} 0.4s linear;
  h4 {
    background: red;
    padding: 10px;
    color: #fff;
    text-align: center;
    border-radius: 5px 5px 0 0;
    line-height: 20px;
  }
`;
export const Btns = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
