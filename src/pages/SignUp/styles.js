import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.08);
  max-width: 400px;
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.7s linear;
  margin-bottom: 20px;

  header {
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 25px;

    h2 {
      font-size: 15px;
      text-transform: uppercase;
      font-size: 300;
      color: #dee8e8;
    }
  }
`;

export const ContentBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  a {
    text-decoration: none;
    color: #f4f4f4;
    font-size: 12px;
    font-weight: 300;
    text-transform: uppercase;
    background: none;
    border: none;

    &:hover {
      color: #fff;
      transition: all 0.3s linear;
      text-decoration: underline;
    }
  }
`;

export const ContentLink = styled.div`
  a {
    text-decoration: none;
    color: #f4f4f4;
    font-size: 12px;
    font-weight: 300;
    text-transform: uppercase;
    background: none;
    border: none;

    &:hover {
      color: #fff;
      transition: all 0.3s linear;
      text-decoration: underline;
    }
  }
`;
