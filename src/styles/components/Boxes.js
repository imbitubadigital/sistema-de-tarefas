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

const fadeChart = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

/* const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0);
    opacity: 0;
  }
`; */

export const BoxCentral = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`;

export const Box = styled.article`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.08);
  flex-basis: ${props => `${props.basis}%`};
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.7s linear;
  margin-bottom: 20px;

  @media (max-width: 999px) {
    flex-basis: 100%;
  }

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
export const BoxChartContent = styled.article`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.08);
  flex-basis: ${props => `${props.basis}%`};
  border-radius: 5px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);
  animation: ${fadeChart} 0.7s linear;
  margin-bottom: 20px;

  @media (max-width: 999px) {
    flex-basis: 100%;
  }

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

    button{
    background: rgba(255,255,255,0);
    border: 1px solid rgba(255,255,255,0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 40px;
    height: 36px;
    margin-left: 4px;
    i {
      color: #fff
      font-size: 14px;
    }

    &:hover {
      background: rgba(255,255,255,0.2);
      transition: 0.3s all;
    }
  }
`;

export const ContentBox = styled.article`
  padding: 20px 25px;
`;

export const BoxCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const BoxChart = styled.div`
  height: 400px;
  background: rgba(255, 255, 255, 0.15);
  color: #333 !important;
`;
